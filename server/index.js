const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const routes = require("./routes");

const port = process.env.PORT || 5000;
const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// support parsing of application/json type post data
// app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

routes(app);
