"use strict";

const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const bodyParser = require('body-parser')
const apiRequest = require("../routes/request");
const fs = require("fs");
const sass = require('node-sass');
const app = express();
const PORT = process.env.PORT || 8081;
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

    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());

    app.use((req, res, next) => {
        res.locals.user = req.session.user || false;
        next();
    });

    app.engine(".hbs", exphbs({
        extname: ".hbs",
        defaultLayout: "main"
    }));
    app.set("view engine", ".hbs");

    app.use(express.static("public"));

    sass.render({
        file: "public/css/main.scss"
    }, (err, res) => {
        if(err) {
            console.log(err);
        }

        fs.writeFile("public/css/sassy.css", res.css, err => {
            if(err) {
                console.log(err);
            }
        });
    });

    // setInterval(() => {
        apiRequest();
    // }, 3600000);

    app.use("/", require("../routes/home"));
    app.use("/", require("../routes/update"));
    app.use("/", require("../routes/login"));
    app.use("/", require("../routes/logout"));

    app.use("*", (req, res) => {
        return res.redirect("/");
    });

    app.listen(PORT, function () {
        console.log("Express up. " + PORT);
    });
}
