"use strict";

const router = require("express").Router();


router.route( "/robots" )
  .get(( req, res ) => {
    res.send("User-agent: *\nDisallow: /");
});

module.exports = router;
