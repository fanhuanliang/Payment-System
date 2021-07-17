const path = require("path");
const { loginHandler, registerHandler } = require("./controllers/auth");
const { verifyToken } = require("./middleware/verifyToken");
const {
  loadedUser,
  searchRecipient,
  transactionHandler,
} = require("./controllers/users");
const { deleteCookie } = require("./middleware/handleCookies");

const routes = (app) => {
  // Login endpoint
  app.post("/api/login", loginHandler);

  // Register endpoint
  app.post("/api/register", registerHandler);

  // Retrieve login user info
  app.get("/api/auth/user", verifyToken, loadedUser);

  // Search recipient user
  app.post("/api/findRecipient", verifyToken, searchRecipient);

  // Handle the transaction
  app.put("/api/transfer", verifyToken, transactionHandler);

  // Handle logout
  app.get("/api/deleteCookie", deleteCookie);

  // wildcard handles any requests that don't match the ones ABOVE
  app.get("*", (req, res) => {
    // console.log('here', res)
    res.sendFile(path.resolve(__dirname, "..", "public", "index.html"));
  });
};

module.exports = routes;
