require("dotenv").config();

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const db = require("../database/index.js");
const bcrypt = require("bcrypt");
const port = process.env.port || 4000; //whatever is in the environment variable PORT, or 3000 if there's nothing there.
const cors = require("cors");

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/login", async (req, res) => {
  // console.log("login server", req.body);
  const { account, password } = req.body;
  if (!account || !password) {
    // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    db.loginUser(req.body, async (err, user) => {
      if (err) {
        //Can't find the user
        res.status(404).json({ msg: err });
      } else {
        //Validate password
        if (await bcrypt.compare(req.body.password, user.password)) {
          //jwt.sign(payload, secretOrPrivateKey, [options, callback])
          let { userName } = user;
          jwt.sign(
            { userName },
            process.env.ACCESS_TOKEN_SECRET,
            (err, token) => {
              if (err) {
                //The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it.
                res.sendStatus(403);
              } else {
                res
                  .status(200)
                  .json({ token, user: { id: user.id, userName: user.userName, balance:user.balance} });
              }
            }
          );
        } else {
          // console.log("passwordWrong");
          res.status(400).json({ msg: "Invalid credentials" });
        }
      }
    });
  } catch(err) {
    res.status(500).send(err);
  }
});

app.post("/api/register", async (req, res) => {
  const { userName, email, password, regConfirmPassword } = req.body;
  if (!userName || !email || !password || !regConfirmPassword) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (password !== regConfirmPassword) {
    return res.status(400).json({ msg: "Password does not match" });
  }
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const user = req.body;
      user.password = hashedPassword;
      const initBalance = { balance: 1000.0 }; // default balance 1000

      db.registerUser({ ...user, ...initBalance }, (err, user) => {
        if (err) {
          //check if user exist ref:https://stackoverflow.com/questions/9269040/which-http-response-code-for-this-email-is-already-registered/9270432
          res.status(409).json({ msg: err });
        } else {
          const { id, userName, balance } = user;
          const token = jwt.sign({ userName }, process.env.ACCESS_TOKEN_SECRET);
          res.status(200).json({
            token,
            user: { id: id, userName: userName, balance: balance },
          });
        }
      });
    } catch(err) {
      res.status(500).json(err);
    }
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});