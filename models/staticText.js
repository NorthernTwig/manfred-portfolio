"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staticText = mongoose.Schema({
    bigText: {
      type: String,
      default: "Manfred"
    },
    smallText: {
      type: String,
      default: "Ohlsson"
    },
    titlePart: {
      type: Number,
      default: 4
    }
});

module.exports = mongoose.model("staticText", staticText);
