require("dotenv").config();

const bcrypt = require("bcrypt");
const { User } = require("../database/index");
const {
  accessTokenGenerator,
  refreshTokenGenerator,
} = require("../middleware/generateToken");
const { handleError } = require("../middleware/handleError");
const { sendCookie } = require("../middleware/handleCookies");

const loginHandler = async (req, res) => {
  const { account, password } = req.body;
  // console.log(req.body);
  if (!account || !password) {
    // 400 Bad Request response status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error
    return res.status(400).json({ msg: "Please enter all fields" });
  }

  try {
    const userInfo = {
      $or: [{ userName: account }, { email: account }],
    };
    // Check if user exists
    const findUser = await User.findOne(userInfo);
    if (!findUser) throw "no user";
    const validPassword = await bcrypt.compare(
      req.body.password,
      findUser.password
    );
    // Valid the password
    if (!validPassword) throw "Invalid credentials";
    const { userName } = findUser;

    const accessToken = accessTokenGenerator(userName);
    const refreshToken = refreshTokenGenerator(userName);
    // Check if token sign successfully
    if (!accessToken) throw "Could not sign the token";
    return sendCookie(res, accessToken, refreshToken, findUser);
  } catch (error) {
    // console.log("error");
    handleError(res, error);
  }
};

const registerHandler = async (req, res) => {
  // console.log(req.body);
  const { userName, email, password, regConfirmPassword } = req.body;
  if (!userName || !email || !password || !regConfirmPassword) {
    return res.status(400).json({ msg: "Please enter all fields" });
  }
  if (password !== regConfirmPassword) {
    return res.status(401).json({ msg: "Password does not match" });
  }

  // console.log(password);
  // password validation
  // const requirement = "^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{7,15}$";
  // if (!password.match(requirement)) {
  //   return res.status(401).json({
  //     msg: "Password must between 7 to 15 characters which contain at least one numeric digit and a special character",
  //   });
  // }

  try {
    const userInfo = {
      $or: [{ userName: req.body.userName }, { email: req.body.email }],
    };
    // Check if user exists
    const findUser = await User.findOne(userInfo);
    if (findUser) throw "user exists";
    // create hashed password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = req.body;
    user.password = hashedPassword;
    user.balance = 1000; // default balance 1000
    const newUser = new User(user);
    // Store the new User.
    const saveUser = await newUser.save();
    if (!saveUser) throw "Something went wrong saving the user";
    const accessToken = accessTokenGenerator(user.userName);
    const refreshToken = refreshTokenGenerator(user.userName);

    if (!accessToken) throw "Could not sign the token";
    return sendCookie(res, accessToken, refreshToken, newUser);
  } catch (error) {
    // console.log(error);
    handleError(res, error);
  }
};

module.exports = {
  loginHandler,
  registerHandler,
};
