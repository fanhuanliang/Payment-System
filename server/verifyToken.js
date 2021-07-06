const jwt = require("jsonwebtoken");
// Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
    if (!bearerHeader)
      return res.status(401).json({ msg: "No token, authorization denied" });

    try {
      // Verify token Authorization: Bearer <access_token>
      const bearerToken = bearerHeader.split(" ")[1];
      const decoded = jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET);
      console.log('verify', decoded)
      // Add user from payload
      req.user = decoded;
      next();
    } catch (e) {
      res.status(400).json({ msg: "Token is not valid" });
    }
}

module.exports = verifyToken;