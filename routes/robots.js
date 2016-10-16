"use strict";

const router = require("express").Router();


router.route( "/robots" )
  .get(( req, res ) => {
    res.render("User-agent: *\nDisallow: /");
  })

module.exports = router;
