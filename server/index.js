require("dotenv").config();

const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const cookieParser = require("cookie-parser");

const app = express();

const port = process.env.port || 5000; // whatever is in the environment variable PORT, or 3000 if there's nothing there.
const cors = require("cors");
const { User, transferMoney } = require("../database/index.js");
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
app.get("/api/auth/user", verifyToken, async (req, res) => {
  try {
    const findUser = await User.findOne({ userName: req.user.userName });
    if (!findUser) throw "no user";
    // user exist
    res
      .status(200)
      .json({ userName: findUser.userName, balance: findUser.balance });
  } catch (error) {
    if (error === "no user") {
      res.status(409).json({ msg: "Can't find the user" });
    } else {
      res.status(500).json(error);
    }
  }
});

app.post("/api/findRecipient", verifyToken, async (req, res) => {
  const { account } = req.body;
  if (!account) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const userInfo = {
      $or: [{ userName: account }, { email: account }],
    };
    const findUser = await User.findOne(userInfo);
    if (!findUser) throw "no user";
    // user exist
    res
      .status(200)
      .json({ userName: findUser.userName, balance: findUser.balance });
  } catch (error) {
    if (error === "no user") {
      res.status(409).json({ msg: "Can't find the user" });
    } else {
      res.status(500).json(error);
    }
  }
});

app.put("/api/transfer", verifyToken, async (req, res) => {
  // console.log('transfer endpoint',req.body, req.user)
  if (!req.body.userName || !req.body.amount)
    return res.status(400).json({ msg: "Please enter receiver or amount" });
  if (req.body.userName === req.user.userName)
    return res.status(400).json({ msg: "Can not transfer to same account" });
  try {
    const transaction = await transferMoney({
      payer: req.user.userName,
      payee: req.body.userName,
      amount: req.body.amount,
    });
    if (transaction === `User has insufficient funds`)
      throw "User has insufficient funds";
    if (transaction === "error") throw "error";
    res
      .status(200)
      .json({ user: transaction.userName, balance: transaction.balance });
  } catch (error) {
    console.log(error);
    if (error === "User has insufficient funds") {
      res.status(400).json({ msg: error });
    } else {
      res.status(400).json({ msg: "Transaction can't complete" });
    }
  }
});

app.post("/api/login", async (req, res) => {
  const { account, password } = req.body;
  if (!account || !password) {
    // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const userInfo = {
      $or: [{ userName: account }, { email: account }],
    };
    // Check if user exists
    const findUser = await User.findOne(userInfo);
    if (!findUser) throw "no user";
    const validPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    // Valid the password
    if (!validPassword) throw "Invalid credentials";
    const { userName } = findUser;
    const accessToken = jwt.sign({ userName }, process.env.ACCESS_TOKEN_SECRET);
    // Check if token sign successfully
    if (!accessToken) throw "Could not sign the token";
    res
      .status(200)
      .cookie("access-token", accessToken, {
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        user: {
          id: findUser.id,
          userName: findUser.userName,
          balance: findUser.balance,
        },
      });
  } catch (error) {
    // console.log(error);
    if (error === "Invalid credentials") {
      res.status(400).json({ msg: "Invalid credentials" });
    } else if (error === "no user") {
      res.status(409).json({ msg: "Can't find the user" });
    } else if (error === "Could not sign the token") {
      res.status(404).json("Something wrong on the server");
    } else {
      res.status(500).json(error);
    }
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
    const userInfo = {
      $or: [{ userName: req.body.userName }, { email: req.body.email }],
    };
    // Check if user exists
    const findUser = await User.findOne(userInfo);
    if (findUser) throw "user exists";
    // create hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    user.balance = 1000; // default balance 1000
    const newUser = new User(user);
    // Store the new User.
    const saveUser = await newUser.save();
    if (!saveUser) throw "Something went wrong saving the user";

    const accessToken = jwt.sign(
      { userName: user.userName },
      process.env.ACCESS_TOKEN_SECRET
    );
    if (!accessToken) throw "Could not sign the token";
    res
      .status(200)
      .cookie("access-token", accessToken, {
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        user: { id: user.id, userName: user.userName, balance: user.balance },
      });
  } catch (error) {
    // console.log(error);
    if (error === "user exists") {
      res.status(409).json({ msg: "User exists already" });
    } else {
      res.status(400).json({ msg: "Something wrong on the server" });
    }
  }
});

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
