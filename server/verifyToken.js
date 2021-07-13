const jwt = require("jsonwebtoken");
// Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  const token = req.headers["authorization"];
  //check if bearer is undefined, no token
    if (!token) {
      return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
      const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
      // Add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" });
    }
}

module.exports = verifyToken;