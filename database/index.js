const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paymentTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected successfully");
});

const userInfoSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true, min: 6, max: 255 },
  email: { type: String, unique: true, required: true, min: 6, max: 255 }, // unique key  db.collection.createIndex( { email: 1 }, { unique: true } )
  password: { type: String, required: true, min: 6, max: 1024 },
  balance: Number,
  register_date: {type: Date, default: Date.now,},
});

const User = mongoose.model("UserInfo", userInfoSchema);

const loginUser = (data, callback) => { 
  const userInfo = {
    $or: [
      { userName: data.account },
      { email: data.account },
    ],
  };
  console.log(userInfo)
  User.findOne(userInfo, (err, result) => {
    if (err) {
      callback(err);
    } else {
      if(!result) {
        callback("Can't find the user");
      } else {
        callback(null, result);
      }
    }
  });
};

const registerUser = (data, callback) => {
  // console.log(data);
  const user = new User(data);
  user.save((err, result) => {
    if (err) {
      callback("User exists already");
    } else {
      callback(null, result);
    }
  });
};
module.exports = {
  loginUser,
  registerUser,
};
