const { loginHandler, registerHandler } = require("./controllers/auth");
const { verifyToken } = require("./middleware/verifyToken");
const { loadedUser } = require("./controllers/users");

const routes = (app) => {
  // Login endpoint
  app.post("/api/login", loginHandler);

  // Register endpoint
  app.post("/api/register", registerHandler);

  // Retrieve login user info
  app.get("/api/auth/user", verifyToken, loadedUser);
};

module.exports = routes;
