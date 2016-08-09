"use strict";

const router = require("express").Router();

router.route( "/login" )
  .get(( req, res ) => {
    res.render("login");
  })
  .post(( req, res ) => {
    if (req.body.username === "kontroll1" && req.body.password === "kontroll2") {

      req.session.user = {
                currentUser: "kontroll1",
                loggedIn: true
      };

      return res.redirect("/");
    } else {
      res.send("Fuck off");
    }
  });

module.exports = router;
