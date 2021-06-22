const express = require("express");
const path = require("path");
const app = express();
const bcrypt = require("bcrypt");
const jst = require("jsonwebtoken");
const port = process.env.port || 3000; //whatever is in the environment variable PORT, or 3000 if there's nothing there.
const db = require("../database/index.js");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "..", "public")));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post("/api/login", async (req, res) => {
  // console.log(req.body);
  try {
    db.loginUser(req.body, async (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        if (await bcrypt.compare(req.body.password, result[0].password)) {
          res.status(200).send(result);
        } else {
          res.status(200).send("Some of your info isn't correct. Please try again.");
        }
      }
    });
  } catch{
    res.status(500).send()
  }
});

app.post("/api/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;

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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
