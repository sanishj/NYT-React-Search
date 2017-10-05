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
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.text());
  app.use(bodyParser.json({ type: "application/vnd.api+json" }));

  app.use(methodOverride('_method'));

  app.use(express.static("./client/public"));

  require('./controllers/routes.js')(app);

  app.listen(PORT, function () {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
}