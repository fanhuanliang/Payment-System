const { User } = require("../../database/index");

const loadedUser = async (req, res) => {
  // console.log('findUser');
  try {
    const findUser = await User.findOne({ userName: req.user.userName });
    if (!findUser) throw "no user";
    console.log("findUser", findUser.userName);
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

module.exports = { loadedUser };
