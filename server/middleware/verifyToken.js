const jwt = require("jsonwebtoken");
const { jwtAccessToken, jwtRefreshToken } = require("../config/_env");

const isValidToken = (token) => {
  try {
    const decoded =
      Object.keys(token)[0] === "accessToken"
        ? jwt.verify(token.accessToken, jwtAccessToken)
        : jwt.verify(token.refreshToken, jwtRefreshToken);
    // Add user from payload
    return { payload: decoded, expired: false };
  } catch (error) {
    // check if it is expired
    return { payload: null, expired: error.message.includes("jwt expired") };
  }
};

// Verify Token
const verifyToken = (req, res, next) => {
  const { accessToken, refreshToken } = req.cookies;
  // console.log("accessToken", accessToken);
  // Get auth header value
  if (!accessToken) {
    return res.status(401).json({ msg: "No token, authorization denied" });
  }

  const { payload, expired } = isValidToken({ accessToken });
  if (payload) {
    req.user = payload;
    return next();
  }

  // accessToken expired
  if (expired && refreshToken) {
    const { payload } = isValidToken({ refreshToken });
    // console.log(payload)
    if (payload) {
      req.user = payload;
      // const newAccessToken = signJWT({userName: req.user}, '5s');
      const newAccessToken = jwt.sign(
        { userName: payload.userName },
        jwtAccessToken,
        { expiresIn: "10s" }
      );
      res.status(200).cookie("accessToken", newAccessToken, {
        httpOnly: true,
        sameSite: "strict",
      });
      return next();
    }
  }
  res
    .status(400)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .json({ msg: "Token is not valid" });
};

module.exports = { verifyToken };
