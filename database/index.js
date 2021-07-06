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
  // console.log(userInfo)
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

const transferMoney = ({ payer, payee, amount }, callback) => {
  console.log(payer, payee, amount);
  const filterPayer = { userName: payer };
  User.findOne(filterPayer, async (err, result) => {
    if (err) {
      callback(err);
    } else {
      console.log(result.balance);
      if (result.balance < amount) {
        callback({ msg: "Not enough balance" });
      } else {
        const newBalance = result.balance - amount;
        console.log("result1", result.balance, newBalance, filterPayer);
        User.updateOne(
          filterPayer,
          { $set: { balance: newBalance } },
          function (err, res) {}
        );
        console.log('result2', result.balance)

      }
    }
  });
}; 

module.exports = {
  loginUser,
  registerUser,
  transferMoney,
};
