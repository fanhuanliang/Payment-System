const express = require("express");
const path = require("path");
const cors = require("cors");
const routes = require("./routes");

const port = process.env.port || 3000;
const app = express();
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// support parsing of application/json type post data
// app.use(bodyParser.json());
app.use(express.json());

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

routes(app);
