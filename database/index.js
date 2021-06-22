const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paymentTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("mongoose connected successfully");
});

const userInfoSchema = new mongoose.Schema({
  userName: { type: String, unique: true },
  email: { type: String, unique: true }, // unique key  db.collection.createIndex( { email: 1 }, { unique: true } )
  phoneNumber: { type: String, unique: true }, // unique key
  password: String,
  balance: String,
  friends: Object,
});

const User = mongoose.model("UserInfo", userInfoSchema);

const loginUser = (data, callback) => {
  // console.log("connect to database", data);
  User.find({email: data.email}, (err, result) => {
    if (err) {
      callback(err)
    } else {
      if (result.length === 0) {
        callback("Some of your info isn't correct. Please try again.");
      } else {
        callback(null, result)
      }
    }
  });
};

const registerUser = (data, callback) => {
  console.log(data)
  let filterObj = { email: data.email, phoneNumber: data.phoneNumber };
  User.find(filterObj, (err, arr) => {
    if (err) {
      callback(err);
    } else {
      if (arr.length === 0) {
        const user = new User(data);
        user.save((err, result) => {
          if (err) {
            callback(err);
          } else {
            // console.log(result)
            callback(null, result);
          }
        });
      } else {
        callback("User exists already");
      }
    }
  });
};
module.exports = {
  loginUser,
  registerUser,
};
