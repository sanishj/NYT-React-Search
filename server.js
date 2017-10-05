const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const methodOverride = require('method-override');
var db;

mongoose.Promise = Promise;
// Database configuration with mongoose
mongoose.connect(("mongodb://localhost/NYT-React-Search" || "m-lab"), function (err) {
  if (err) {
    console.log("Connection Failed!", err);
  } else {
    console.log("Connection Successful!");
    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'DB connection error:'));
    db.once('open', function () {
      console.log("DB connected.");
    });
    init();
  }
});

function init() {
  const PORT = process.env.PORT || 3001;
  const app = express();
  const appRoutes = require("./routes");

  // Serve up static assets (usually on heroku)
  if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
  app.use(appRoutes);
  // Send every request to the React app
  // Define any API routes before this runs

  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
}