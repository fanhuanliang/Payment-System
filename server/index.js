require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const port = process.env.port || 3000; //whatever is in the environment variable PORT, or 3000 if there's nothing there.
const db = require("../database/index.js");
const bodyParser = require("body-parser");
// const cors = 

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/api/login", async (req, res) => {
  try {
    db.loginUser(req.body, async (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        if (await bcrypt.compare(req.body.password, result.password)) {
          //jwt.sign(payload, secretOrPrivateKey, [options, callback])
          console.log(result)
          let user = result.userName
          jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, (err, token) => {
            if (err) {
              res.sendStatus(403);
            } else {
              res.status(200).json({ token });
              // res.status(200).send(result);
            }
          });
        } else {
          res
            .status(200)
            .send("Some of your info isn't correct. Please try again.");
        }
      }
    });
  } catch {
    res.status(500).send();
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    console.log('user', user)
    db.registerUser(user, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log(result);
        res.status(200).send(result);
      }
    });
  } catch {
    res.status(500).send();
  }
  // console.log("req1", req.body);
  // db.registerUser(req.body, (err, result) => {
  //   if (err) {
  //     res.status(404).send(err);
  //   } else {
  //     // console.log(result);
  //     res.status(200).send(result);
  //   }
  // });
});

app.get("/api/findUser", verifyToken, (req, res) => {
  res.json(req.user);
});

// Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //Authorization: Bearer <access_token>
    const bearerToken = bearerHeader.split(" ")[1];
    // console.log(bearerToken);
    jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
    //next middleware
  } else {
    //Forbidden
    res.sendStatus(401);
  }
}

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
