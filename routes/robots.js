"use strict";

const router = require("express").Router();


router.route( "/robots.txt" )
  .get(( req, res ) => {
    res.render("User-agent: *\nDisallow: /");
  })

module.exports = router;
