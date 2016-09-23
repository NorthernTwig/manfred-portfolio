"use strict";

const router = require("express").Router();
const userCredentials = require("../config/secret/pass-and-username");


router.route( "/login" )
  .get(( req, res ) => {
    res.render("login");
  })
  .post(( req, res ) => {
    if (req.body.username === userCredentials.USERNAME && req.body.password === userCredentials.PASSWORD) {

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
