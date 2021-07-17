// const { request, respond } = require("express");
const { loginHandler } = require("./controllers/auth.js");
const { verifyToken } = require("./middleware/verifyToken");

const routes = (app) => {
  // Login endpoint
  app.post("/api/login", loginHandler);
  // console.log(verifyToken);
  // app.get("/api/auth/user", verifyToken);
};

module.exports = routes;
