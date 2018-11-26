const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:8081/warbler", {
  keepAlive: true,
  useMongoClient: true,
  useNewUrlParser: true
});