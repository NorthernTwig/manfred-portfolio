"use strict";

const router = require("express").Router();


router.route( "robots.txt" )
  .get(( req, res ) => {
    return res.send("User-agent: *\nDisallow: /");
});

module.exports = router;
