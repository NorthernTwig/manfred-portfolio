"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staticText = mongoose.Schema({
    bigText: {
      type: String,
      default: "Fuckin' hell"
    },
    smallText: {
      type: String,
      default: "Twice Fuckin' hell"
    },
    titlePart: {
      type: Number,
      default: 4
    }
});

module.exports = mongoose.model("staticText", staticText);
