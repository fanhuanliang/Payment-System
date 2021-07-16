const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/paymentTest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("mongoose connected successfully");
});

const userInfoSchema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true, min: 6, max: 255 },
  email: { type: String, unique: true, required: true, min: 6, max: 255 }, // unique key  db.collection.createIndex( { email: 1 }, { unique: true } )
  password: { type: String, required: true, min: 6, max: 1024 },
  balance: Number,
  register_date: { type: Date, default: Date.now },
});

const User = mongoose.model("UserInfo", userInfoSchema);

const transferMoney = async ({ payer, payee, amount }) => {
  const filterPayer = { userName: payer };
  const filterPayee = { userName: payee };
  const session = await mongoose.startSession();
  session.startTransaction();
  try {
    const sender = await User.findOne(filterPayer);
    // const sender = await User.findOne(filterPayer).session(session);
    // console.log("sender", sender, amount);
    sender.balance -= Number(amount);
    if (sender.balance < 0) {
      return `User has insufficient funds`;
    }
    await sender.save();
    const receiver = await User.findOne(filterPayee);
    // const receiver = await User.findOne(filterPayee).session(session);
    receiver.balance += Number(amount);
    console.log(receiver);
    await receiver.save();
    await session.commitTransaction();
    return sender;
  } catch (error) {
    // if anything fails above just rollback the changes here
    // this will rollback any changes made in the database
    await session.abortTransaction();

    // logging the error
    // console.error('error', error);

    // rethrow the error
    return "error";
  } finally {
    // ending the session
    session.endSession();
  }
};

module.exports = {
  User,
  transferMoney,
};
