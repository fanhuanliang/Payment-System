const jwt = require("jsonwebtoken");
const { jwtAccessToken, jwtRefreshToken } = require("../config/_env");

const accessTokenGenerator = (user) => {
  const accessToken = jwt.sign({ userName: user }, jwtAccessToken, {
    expiresIn: "10s",
  });
  return accessToken;
};

const refreshTokenGenerator = (user) => {
  const refreshToken = jwt.sign({ userName: user }, jwtRefreshToken, {
    expiresIn: "1d",
  });
  return refreshToken;
};

module.exports = {
  accessTokenGenerator,
  refreshTokenGenerator,
};
