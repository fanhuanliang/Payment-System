require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
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

//api endpoint for retrieve login user info
app.get("/api/auth/user", verifyToken, (req, res) => {
  // console.log("user", req.user.userName);
  try {
    db.loginUser({account: req.user.userName}, async (err, user) => {
      if (err) {
        //check if user exist
        res.status(404).json({ msg: err });
      } else {
        res.status(200).json({userName: user.userName, balance: user.balance});
      }
    });
  } catch {
    res.status(500);
  }
});

app.post("/api/findUser", verifyToken, (req, res) => {

  const { account } = req.body;
  console.log("server", account);
  if (!account) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    db.loginUser(req.body, async (err, user) => {
      if (err) {
        //check if user exist
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
  console.log('transfer endpoint',req.body, req.user)
  if (!req.body.userName || !req.body.amount) return res.status(400).json({ msg: "Please enter receiver or amount" });
    db.transferMoney(
      {
        payer: req.user.userName,
        payee: req.body.userName,
        amount: req.body.amount,
      },
      (err, result) => {
        if (err) {
          console.log('err', err);
          res.status(400).json({ msg: err });
        } else {
          res.status(200).json({user: result.userName, balance: result.balance});
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
