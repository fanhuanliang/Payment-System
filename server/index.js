require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const port = process.env.port || 5000; //whatever is in the environment variable PORT, or 3000 if there's nothing there.
const db = require("../database/index.js");
const cors = require("cors");
const verifyToken = require("./verifyToken");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(cors());
// support parsing of application/json type post data
// app.use(bodyParser.json());
app.use(express.json());
//support parsing of application/x-www-form-urlencoded post data
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

//authentication
app.post("/api/login", async (req, res) => {
  // console.log("login server", req.body);
  const { account, password } = req.body;
  if (!account || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    db.loginUser(req.body, async (err, user) => {
      if (err) {
        //check if user exist
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
                res.sendStatus(403);
              } else {
                // console.log("token match", { token, user });
                res
                  .status(200)
                  .json({
                    msg: { token, user: { id: user.id, userName: user.userName, balance:user.balance} },
                  });
              }
            }
          );
        } else {
          // console.log("passwordWrong");
          res.status(400).json({ msg: "Invalid credentials" });
        }
      }
    });
  } catch {
    res.status(500).send();
  }
});

//api endpoint for retrieve login user info
app.get("/api/authorize", verifyToken, (req, res) => {
  console.log("authorize", req.user);
  try {
    db.loginUser(req.user, async (err, user) => {
      if (err) {
        //check if user exist
        console.log(err);
        res.status(404).json({ msg: err });
      } else {
        res.status(200).json({ msg: { userName: user.userName, balance: user.balance } });
      }
    });
  } catch {
    res.status(500);
  }
});
app.post("/api/register", async (req, res) => {
  // console.log('postReg',req.body)
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    const balance = { balance: 1000.00 }; // default balance 1000
    // console.log('user', user)
    db.registerUser({ ...user, ...balance }, (err, user) => {
      if (err) {
        res.status(404).json({ msg: err });
      } else {
        const { id, userName } = user;
        const token = jwt.sign({ userName }, process.env.ACCESS_TOKEN_SECRET);
        res.status(200).json({ token, user: { id: id, userName: userName } });
      }
    });
  } catch {
    res.status(500);
  }
});

app.get("/api/findUser", verifyToken, (req, res) => {
  const { account } = req.body;
  console.log("server", account);
  if (!account) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    db.loginUser(req.body, async (err, user) => {
      if (err) {
        //check if user exist
        console.log(err)
        res.status(404).json({ msg: err });
      } else {
        res.status(200).json({ msg: {userName: user.userName} });
      }
    });
  } catch {
    res.status(500);
  }
});

app.put("/api/transfer", verifyToken, (req, res) => {
  console.log('transfer endpoint',req.body, req.user)
  // res.status(200).send('transferServer');
  db.transferMoney(
    {
      payer: req.user.userName,
      payee: req.body.userName,
      amount: req.body.amount,
    },
    (err, result) => {
      if (err) {
        console.log(err)
        res.status(400).json({msg:err})
      } else {
        console.log('transfer,success, server', result)
        res.status(400).json({ msg: result });
      }
    }
  );
})

// wildcard handles any requests that don't match the ones ABOVE
app.get("*", (req, res) => {
  // console.log('here', res)
  res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
