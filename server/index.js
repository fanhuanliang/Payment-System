const express = require('express');
const path = require('path');
const app = express();
const bcrypt = require('bcrypt');
const port = process.env.port || 3000; //whatever is in the environment variable PORT, or 3000 if there's nothing there.
const db = require('../database/index.js')
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.post('/api/login', (req, res)=>{
  console.log(req.body)
  db.loginUser(req.body, (err, result)=>{
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(200).send(result);
    }
  })
})

app.post('/api/register', async (req, res)=>{
  // console.log("req1", req.body);
  // db.registerUser(req.body, (err, result) => {
  //   if (err) {
  //     res.status(404).send(err);
  //   } else {
  //     // console.log(result);
  //     res.status(200).send(result);
  //   }
  // });
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    // console.log(user);
    db.registerUser(user, (err, result) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log(result);
        res.status(200).send(result);
      }
    });
  } catch {
    res.status(500).send(0)
  }
})



app.listen(port, ()=> {
  console.log(`Listening at http://localhost:${port}`);
})