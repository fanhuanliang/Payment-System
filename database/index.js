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
  userName: { type: String, unique: true, required: true, min: 6, max: 255 },
  email: { type: String, unique: true, required: true, min: 6, max: 255 }, // unique key  db.collection.createIndex( { email: 1 }, { unique: true } )
  phoneNumber: { type: String, unique: true, required: true, min: 6, max: 255 }, // unique key
  password: { type: String, required: true, min: 6, max: 1024 },
  balance: String,
  friends: Object,
});

const User = mongoose.model("UserInfo", userInfoSchema);

const loginUser = (data, callback) => {
  console.log("connect to database", data);
  // {email: 'fan@gmail.com', password: '111222' } {acc: 'fan', password: '111222'}{acc: '49999888', password: '111222'}
  // data: {email: 'fan@gmail.com'}
  // const data = {user: data.acc, email: data.acc, phone: data.acc}
  const newData = {
    $or: [{  userName: data.acc }, { email: data.acc },{ phoneNumber: data.acc }]
  }
  console.log(newData)
  User.findOne(newData, (err, result) => {
    if (err) {
      callback(err);
    } else {
      // console.log('data:', result)
      // if (result.length === 0) {
      //   callback("Some of your info isn't correct. Please try again.");
      // } else {
      if(!result) callback("Some of your info isn't correct. Please try again.");
      callback(null, result);
      // }
    }
  });
};

const registerUser = (data, callback) => {
  // console.log(data);
  const user = new User(data);
  user.save((err, result) => {
    if (err) {
      console.log(err);
      callback("User exists already");
    } else {
      callback(null, result);
    }
  });
  // let filterObj = { email: data.email, phoneNumber: data.phoneNumber };
  // User.findOne(filterObj, (err, arr) => {
  //   if (err) {
  //     callback(err);
  //   } else {
  //     if (arr.length === 0) {
  //       const user = new User(data);
  //       user.save((err, result) => {
  //         if (err) {
  //           callback(err);
  //         } else {
  //           // console.log(result)
  //           callback(null, result);
  //         }
  //       });
  //     } else {
  //       callback("User exists already");
  //     }
  //   }
  // });
};
module.exports = {
  loginUser,
  registerUser,
};
