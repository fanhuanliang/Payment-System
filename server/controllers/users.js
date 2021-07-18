const { User } = require("../database/index");
const { handleError } = require("../middleware/handleError");
const { transferMoney } = require("../database/index");

const loadedUser = async (req, res) => {
  // console.log('findUser');
  try {
    const findUser = await User.findOne({ userName: req.user.userName });
    if (!findUser) throw "no user";

    // user exist
    res
      .status(200)
      .json({ userName: findUser.userName, balance: findUser.balance });
  } catch (error) {
    if (error === "no user") {
      res.status(409).json({ msg: "Can't find the user" });
    } else {
      res.status(500).json(error);
    }
  }
};

const searchRecipient = async (req, res) => {
  const { account } = req.body;
  if (!account) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  try {
    const userInfo = {
      $or: [{ userName: account }, { email: account }],
    };
    const findUser = await User.findOne(userInfo);
    if (!findUser) throw "no user";
    // user exist
    res
      .status(200)
      .json({ userName: findUser.userName, balance: findUser.balance });
  } catch (error) {
    handleError(res, error);
  }
};

const transactionHandler = async (req, res) => {
  if (!req.body.userName || !req.body.amount)
    return res.status(400).json({ msg: "Please enter receiver or amount" });
  if (req.body.userName === req.user.userName)
    return res.status(400).json({ msg: "Can not transfer to same account" });
  try {
    const transaction = await transferMoney({
      payer: req.user.userName,
      payee: req.body.userName,
      amount: req.body.amount,
    });
    if (transaction === `User has insufficient funds`)
      throw "User has insufficient funds";
    if (transaction === "error") throw "error";
    res
      .status(200)
      .json({ user: transaction.userName, balance: transaction.balance });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { loadedUser, searchRecipient, transactionHandler };
