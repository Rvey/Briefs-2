const express = require("express");
const app = express()
const conn = require("./config/db");
var bodyParser = require("body-parser");

const port = process.env.PORT || 8080;
app.listen(port); // server

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// setup api

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

// set up router
const router = express.Router();

router.get("/", function (req, res) {
  res.json({ message: "hooray! welcome to our api!" });
});

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use("/api", router);

//connect
conn.connect((err) => {
  if (err) {
    console.log(err);
  }
  console.log(`connected and running on http://localhost:${port}`);
});
