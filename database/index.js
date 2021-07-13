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

async function transferMoney ({ payer, payee, amount }, callback) {
  const filterPayer = { userName: payer };
  const filterPayee = { userName: payee };
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const sender = await User.findOne(filterPayer);
    // const sender = await User.findOne(filterPayer).session(session);
    // console.log("sender", sender, amount);
    sender.balance = sender.balance - Number(amount);
    if (sender.balance < 0) {
      callback(`User - ${sender.userName} has insufficient funds`);
    } else{
      await sender.save();
      const receiver = await User.findOne(filterPayee);
      // const receiver = await User.findOne(filterPayee).session(session);
      receiver.balance = receiver.balance + Number(amount);
  
      await receiver.save();
      await session.commitTransaction();
      callback(null, sender);
    }
  } catch (error) {
    // if anything fails above just rollback the changes here

    // this will rollback any changes made in the database
    await session.abortTransaction();

    // logging the error
    // console.error('error', error);

    // rethrow the error
    callback(error);
  } finally {
    // ending the session
    session.endSession();
  }
}; 

module.exports = {
  loginUser,
  registerUser,
  transferMoney,
};
