const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  errorHandler = require("./handlers/error");

// Port and IP config
const PORT = process.env.PORT || 8081;
const IP = process.env.IP || '0.0.0.0';

app.use(cors());
app.use(bodyParser.json());

// All routes here
app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, IP, function () {
  console.log(`Server is running on IP: ${IP}, PORT: ${PORT}`);
});