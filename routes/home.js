"use strict";

const router = require("express").Router();
const secret = require("../config/secret/vimeo-tokens.js");
const Vimeo = require("vimeo").Vimeo;
const cheerio = require("vimeo").Vimeo;
const VimeoInformation = require("../models/vimeoInformation.js");
const StaticText = require("../models/staticText.js");
const lib = new Vimeo(secret.CLIENT_ID, secret.CLIENT_SECRET, secret.ACCESS_TOKEN);

router.route( "/" )
  .get(( req, res ) => {

    let information = null;
    let header = null;
    let profilePicture = null;
    let bioHeader = null;
    let bio = null;
    let bigText = null;
    let smallText = null;
    let titlePart = null;

    let loggedIn = req.session.user == undefined ?  false : req.session.user.loggedIn;

    VimeoInformation.findOne(function(req, info) {
      information = info.information || "hej";
      header = info.header || "hej";
      profilePicture = info.profilePicture || "hej";
      bioHeader = info.bioHeader || "hej";
      bio = info.bio || "hej";
    })
    .then(() => {
      return StaticText.findOne(function(req, info) {
        bigText = info.bigText || "hej";
        smallText = info.smallText || "hej";
        titlePart = info.titlePart || "hej";
      });
    })
    .then(() => {
      res.render("home", {
        information: information,
        header: header,
        profilePicture: profilePicture,
        bioHeader: bioHeader,
        bio: bio,
        bigText: bigText,
        smallText: smallText,
        titlePart: titlePart,
        loggedIn: loggedIn
      });
    })
    .catch(e => console.log(e));

  })

module.exports = router;
