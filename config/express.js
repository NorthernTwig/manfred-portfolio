"use strict";

const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const bodyParser = require('body-parser')
const apiRequest = require("../routes/request");
const app = express();
const PORT = process.env.PORT || 3000;
const secret = require("./secret/session-secret.js");

module.exports = () => {

  //Creates session
  app.use(session({
      name: secret.NAME,
      secret: secret.SECRET,
      saveUninitialized: false,
      resave: false,
      httpOnly: true,
      cookie: {
          secure: false
      }
  }));

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());

  app.use((req, res, next) => {
      res.locals.user = req.session.user || false;
      next();
  });

  app.engine(".hbs", exphbs({extname: ".hbs", defaultLayout: "main"}));
  app.set("view engine", ".hbs");

  app.use(express.static("public"));

  // setInterval(function() {
    // apiRequest();
  // }, 3600);
//3600000
  app.use("/", require("../routes/home"));
  app.use("/", require("../routes/update"));
  app.use("/", require("../routes/login"));
  app.use("/", require("../routes/logout"));

  app.listen(PORT, function () {
    console.log("Express up. " + PORT);
  });
}
