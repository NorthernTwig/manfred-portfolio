"use strict";

const router          = require("express").Router();

router.route("/logout")

  .post((req, res) => {

    //Delets session on logout
    delete req.session.user;

    return res.redirect("/");

  });



module.exports = router;
