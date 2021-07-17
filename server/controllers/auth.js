require("dotenv").config();

const bcrypt = require("bcrypt");
const { User } = require("../../database/index.js");
const {
  accessTokenGenerator,
  refreshTokenGenerator,
} = require("../middleware/generateToken");
const { handleError } = require("../middleware/handleError");
const { sendCookie } = require("../middleware/sendCookie");

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

module.exports = {
  loginHandler,
};
