"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vimeoInformation = mongoose.Schema({
    information: {
    },
    header: {
      type: String
    },
    profilePicture: {
      type: String
    },
    bioHeader: {
      type: String
    },
    bio: {
      type: String
    }
});

module.exports = mongoose.model("vimeoInformation", vimeoInformation);
