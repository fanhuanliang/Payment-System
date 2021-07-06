const jwt = require("jsonwebtoken");

// Verify Token
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //Authorization: Bearer <access_token>
    const bearerToken = bearerHeader.split(" ")[1];
    // console.log(bearerToken);
    jwt.verify(bearerToken, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403).json({ msg: "Token is not valid" });
      }
      req.user = user;
      next();
    });
    //next middleware
  } else {
    //Forbidden
    res.sendStatus(401).json({ msg: "No token, authorization denied" });
  }
}

module.exports = verifyToken;