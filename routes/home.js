"use strict";

const router = require("express").Router();
const secret = require("../config/secret/vimeo-tokens.js");
const Vimeo = require("vimeo").Vimeo;
const lib = new Vimeo(secret.CLIENT_ID, secret.CLIENT_SECRET, secret.ACCESS_TOKEN);

router.route( "/" )
  .get(( req, res ) => {

    lib.request({ path : "/users/alanmasferrer/videos" },
      function (error, body, status_code, headers) {
        if (error) {
          return res.render("home", {
            information: "error"
          });
        }

        let video = {};
        let videoCollection = [];
        let header = null;
        let bioHeader = null;
        let bio = null;
        let profilePicture = null;

        for (let i = 0; i < body.data.length; i++) {

          if (!bio) {
            bioHeader = body.data[i].user.bio.split(".")[0];
            bio = body.data[i].user.bio;
          }

          if (!header) {
            for (let j = 0; j < body.data[i].pictures.sizes.length; j++) {
              if (body.data[i].pictures.sizes[j].width >= 1280) {
                header = body.data[i].pictures.sizes[j].link;
              }
            }
          }

          video.title = body.data[i].name;
          video.embed = body.data[i].embed.html;
          videoCollection.push(video);
          video = {};

        }

        lib.request({ path : "/users/alanmasferrer" },
          function (error, body, status_code, headers) {
            if (error) {
              return res.render("home", {
                information: "error"
              });
            }

            profilePicture = body.pictures.sizes[(body.pictures.sizes.length - 1)].link;

            res.render("home", {
              information: videoCollection,
              header: header,
              profilePicture: profilePicture,
              bioHeader: bioHeader,
              bio: bio
            });

          });



      });


  })

module.exports = router;
