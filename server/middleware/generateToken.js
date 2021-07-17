const jwt = require("jsonwebtoken");

const accessTokenGenerator = (user) => {
  const accessToken = jwt.sign(
    { userName: user },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "10s" }
  );
  return accessToken;
};

const refreshTokenGenerator = (user) => {
  const refreshToken = jwt.sign(
    { userName: user.userName },
    process.env.REFRESH_TOKEN_SECRET,
    { expiresIn: "1d" }
  );
  return refreshToken;
};

module.exports = {
  accessTokenGenerator,
  refreshTokenGenerator,
};
