require("dotenv").config();

const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
const port = process.env.port || 5000; // whatever is in the environment variable PORT, or 3000 if there's nothing there.
const cors = require("cors");
const db = require("../database/index.js");
const verifyToken = require("./verifyToken");

app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cookieParser());
app.use(cors());
// support parsing of application/json type post data
// app.use(bodyParser.json());
app.use(express.json());
// support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

// api endpoint for retrieve login user info
app.get("/api/auth/user", verifyToken, (req, res) => {
  console.log("user", req.user.userName);
  try {
    db.loginUser({ account: req.user.userName }, async (err, user) => {
      if (err) {
        // check if user exist
        res.status(404).json({ msg: err });
      } else {
        res
          .status(200)
          .json({ userName: user.userName, balance: user.balance });
      }
    });
  } catch {
    res.status(500);
  }
});

app.post("/api/findUser", verifyToken, (req, res) => {
  const { account } = req.body;
  if (!account) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    db.loginUser(req.body, async (err, user) => {
      if (err) {
        // check if user exist
        res.status(404).json({ msg: err });
      } else {
        res.status(200).json({ userName: user.userName });
      }
    });
  } catch {
    res.status(500);
  }
});

app.put("/api/transfer", verifyToken, (req, res) => {
  // console.log('transfer endpoint',req.body, req.user)
  if (!req.body.userName || !req.body.amount)
    return res.status(400).json({ msg: "Please enter receiver or amount" });
  db.transferMoney(
    {
      payer: req.user.userName,
      payee: req.body.userName,
      amount: req.body.amount,
    },
    (err, result) => {
      if (err) {
        console.log("err", err);
        res.status(400).json({ msg: err });
      } else {
        res
          .status(200)
          .json({ user: result.userName, balance: result.balance });
      }
    }
  );
});

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
        // Can't find the user
        res.status(404).json({ msg: err });
      } else {
        // Validate password
        if (await bcrypt.compare(req.body.password, user.password)) {
          // jwt.sign(payload, secretOrPrivateKey, [options, callback])
          const { userName } = user;
          jwt.sign(
            { userName },
            process.env.ACCESS_TOKEN_SECRET,
            // { expiresIn: "15s" },
            (error, token) => {
              if (error) {
                // The HTTP 403 Forbidden client error status response code indicates that the server understood the request but refuses to authorize it.
                res.sendStatus(403);
              } else {
                res
                  .status(200)
                  .cookie("access-token", token, {
                    httpOnly: true,
                    sameSite: "strict",
                  })
                  .json({
                    user: {
                      id: user.id,
                      userName: user.userName,
                      balance: user.balance,
                    },
                  });
                // res.status(200).json({
                //   token,
                //   user: {
                //     id: user.id,
                //     userName: user.userName,
                //     balance: user.balance,
                //   },
                // });
              }
            }
          );
        } else {
          // console.log("passwordWrong");
          res.status(400).json({ msg: "Invalid credentials" });
        }
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/api/register", async (req, res) => {
  // console.log(req.body);
  const { userName, email, password, regConfirmPassword } = req.body;
  if (!userName || !email || !password || !regConfirmPassword) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (password !== regConfirmPassword) {
    return res.status(401).json({ msg: "Password does not match" });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    const initBalance = { balance: 1000.0 }; // default balance 1000

    db.registerUser({ ...user, ...initBalance }, (err, resultUser) => {
      if (err) {
        // check if user exist ref:https://stackoverflow.com/questions/9269040/which-http-response-code-for-this-email-is-already-registered/9270432
        res.status(409).json({ msg: err });
      } else {
        const { id, userName, balance } = resultUser;
        const token = jwt.sign({ userName }, process.env.ACCESS_TOKEN_SECRET);
        // res.status(200).json({
        //   token,
        //   user: { id, userName, balance },
        // });
        res
          .status(200)
          .cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
          })
          .json({
            user: { id, userName, balance },
          });
      }
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete cookies
app.get("/api/deleteCookie", (req, res) => {
  res.status(202).clearCookie("access-token").send("Cookies cleared");
});

// wildcard handles any requests that don't match the ones ABOVE
app.get("*", (req, res) => {
  // console.log('here', res)
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
