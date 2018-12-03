require("dotenv").config();

const express = require("express"),
  app = express(),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  errorHandler = require("./handlers/error"),
  authRoutes = require("./routes/auth"),
  messagesRoutes = require("./routes/messages"),
  { loginRequired, ensureCorrectUser } = require("./middleware/auth");

// Port and IP config
const PORT = process.env.PORT || 8081;
const IP = process.env.IP || '0.0.0.0';

app.use(cors());
app.use(bodyParser.json());

// All routes here
app.use("/api/auth", authRoutes);
app.use(
  "/api/users/:id/messages",
  loginRequired,
  ensureCorrectUser,
  messagesRoutes
);

app.use(function (req, res, next) {
  let err = new Error("Not found");
  err.status = 404;
  next(err);
});

app.use(errorHandler);

app.listen(PORT, IP, function () {
  console.log(`Server is running on IP: ${IP}, PORT: ${PORT}`);
});