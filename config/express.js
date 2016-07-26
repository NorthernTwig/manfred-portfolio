"use strict";

const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const PORT = process.env.PORT || 3000;


module.exports = () => {
  app.engine(".hbs", exphbs({extname: ".hbs", defaultLayout: "main"}));
  app.set("view engine", ".hbs");

  app.use(express.static("public"));

  app.use("/", require("../routes/home"));

  app.listen(PORT, function () {
    console.log("Express up. " + PORT);
  });

}
