"use strict";

const router = require("express").Router();
const StaticText = require("../models/staticText.js");

router.route( "/update" )
  .post(( req, res ) => {

    // if (req.session.user) {
    //   if (!req.session.user.loggedIn) {
    //     return res.send('Fuck off <3');
    //   }
    // } else {
    //   res.send('Not even close <3');
    // }

    let bigText = req.body.big || "Hello, I am Manfred";
    let smallText = req.body.small || "Welcome to my creative corner";
    let titlePart = req.body.titlePart || 3;

    StaticText.findOne({})
    .then(text => {
      if (text) {

        text.bigText = bigText;
        text.smallText = smallText;
        text.titlePart = titlePart;
        return text.save();

      } else {

        let newText = new StaticText({
          bigText: bigText,
          smallText: smallText,
          titlePart: titlePart
        });

        return newText.save();

      }
    })
    .then(() => res.redirect("/"))
    .catch(e => {
      return res.send(e);
    });

  });

module.exports = router;
