"use strict";

const mongoose = require("mongoose");

module.exports = () => {

    mongoose.Promise = global.Promise;
    let db = mongoose.connection;

    //Connects to the selected server as param
    mongoose.connect("mongodb://localhost/manfred-ohlsson");

    //On error
    db.on("error", err => {
      console.log(err);
        console.log("Mongo could not establish connection.");
    });

    //On open
    db.once("open", () => {
        console.log("Mongo established connection.");
    });

    //When shut down
    process.on("SIGINT", () => {
        db.close(() => {
            console.log("Mongo connection has been terminated.");
            process.exit(0);
        });
    });

};
