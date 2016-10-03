"use strict";

const router = require("express").Router();
const userCredentials = require("../config/secret/pass-and-username");
const passwordHash = require("password-hash");


router.route( "/login" )
  .get(( req, res ) => {
    res.render("login");
  })
  .post(( req, res ) => {

    let correctPassword = passwordHash.verify(req.body.password, userCredentials.PASSWORD);
    if (req.body.username === userCredentials.USERNAME && correctPassword) {

      req.session.user = {
                currentUser: "Manfred",
                loggedIn: true
      };

      return res.redirect("/");
    } else {
      res.send("You're not Manfred.");
    }
  });

module.exports = router;
