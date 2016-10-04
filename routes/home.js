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
    let number = '';
    let bigText = null;
    let smallText = null;
    let titlePart = null;

    let loggedIn = req.session.user == undefined ?  false : req.session.user.loggedIn;

    return VimeoInformation.findOne({})
    .then((info) => {
      information = info.information;
      header = info.header;
      profilePicture = info.profilePicture;
      bioHeader = info.bioHeader;
      bio = info.bio;
      number = info.number;
    })
    .then(() => StaticText.findOne({}))
    .then(smallAndBigText => {
      if (smallAndBigText) {
        bigText = smallAndBigText.bigText;
        smallText = smallAndBigText.smallText;
        titlePart = smallAndBigText.titlePart;
      } else {
        return StaticText.create({ bigText: 'Byt Text', smallText: 'Här också', titlePart: 1 }, function (err, tempText) {
          if (err) {
            console.log(err);
          }
          bigText = tempText.bigText;
          smallText = temtText.bigText;
          titlePart = smallAndBigText.titlePart;
        })
      }
    })
    .then(() => {
        res.render("home", {
          information: information,
          header: header,
          profilePicture: profilePicture,
          bioHeader: bioHeader,
          bio: bio,
          number: number,
          bigText: bigText,
          smallText: smallText,
          titlePart: titlePart,
          loggedIn: loggedIn
        });
    })
    .catch(e => console.log(e));

  })

module.exports = router;
