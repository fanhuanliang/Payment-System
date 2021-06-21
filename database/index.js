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
  userName: String,
  email: { type: String, unique: true }, // unique key  db.collection.createIndex( { email: 1 }, { unique: true } )
  phoneNumber: { type: String, unique: true }, // unique key
  password: String,
  balance: String,
  friends: [
    {
      userName: String,
      email: String,
      _id: false,
    },
  ],
});
const User = mongoose.model("UserInfo", userInfoSchema);

const loginUser = (data, callback) => {
  console.log('connect to database', data)
  // User.findOne({ email: "fan@gmail.com", phoneNumber:'4088632546'});
  // Customer.find({ email: "fan@gmail.com", phoneNumber:'4088632546'});
}


const registerUser = (data, callback) => {
  let filterObj = {email: data.email, phoneNumber: data.phoneNumber}
  User.find(filterObj, (err, arr) => {
    if (arr.length === 0) {
      const user = new User(data)
      user.save((err, result) => {
        if (err) {
          callback(err);
        } else {
          // console.log(result)
          callback(result)
        }
      })
    } else {
      callback("User exists already", null);
    }
  });
}
module.exports = {
  loginUser,
  registerUser,
};