"use strict";

const secret = require("../config/secret/vimeo-tokens.js");
const Vimeo = require("vimeo").Vimeo;
const VimeoInformation = require("../models/vimeoInformation.js");
const lib = new Vimeo(secret.CLIENT_ID, secret.CLIENT_SECRET, secret.ACCESS_TOKEN);
const vimoeUsername = "manfredohlsson";
const headerSize = "1920x1080";
const thumbnailSize = "1280x720";

module.exports = () => {

      lib.request({ path : "/users/" + vimoeUsername + "/videos" },
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
          let embedString = null;
          let $ = null;
          let slicedEmbed = null;
          let manfredNumberString = "";

          for (let i = 0; i < body.data.length; i++) {

            if (!bio) {
              let bioArray = [];
              let splitted = body.data[i].user.bio.split(".");
              for (let j = 0; j < splitted.length; j++) {
                bioHeader = splitted[0];
                j === 0 ? null : bioArray.push(splitted[j]);
              }
              bio = bioArray.join(".").substring(1);
              let splitOnNumber = bio.split('+');
              bio = splitOnNumber[0];
              let manfredNumber = [];
              manfredNumber.push('+');
              manfredNumber.push(splitOnNumber[splitOnNumber.length - 1]);
              manfredNumberString = manfredNumber.join('');
            }

            if (!header) {
                let headerLink = body.data[i].pictures.sizes[0].link;
                let headerLinkNoSize = headerLink.split('100x75');
                let headerLinkBigSize = headerLinkNoSize.join(headerSize);
                header = headerLinkBigSize;
            }

            video.rowStart = false;
            video.rowEnd = false;
            video.title = body.data[i].name;
            video.embed = body.data[i].embed.html.split("id=0").join("id=0&color=242F49&title=0&byline=0&portrait=0");
            let thumbnailLink = body.data[i].pictures.sizes[0].link;
            let thumbnailLinkNoSize = thumbnailLink.split('100x75');
            let thumbnailLinkBigSize = thumbnailLinkNoSize.join(thumbnailSize);
            video.thumbnail = thumbnailLinkBigSize;

            if (i % 3 === 0) {
              video.rowStart = true;
            }

            if (i % 3 === 0 && i !== 0) {
              video.rowEnd = true;
            }

            videoCollection.push(video);
            video = {};

          }

          lib.request({ path : "/users/" + vimoeUsername },
            function (error, body, status_code, headers) {
              if (error) {
                return res.render("home", {
                  information: "error"
                });
              }

              profilePicture = body.pictures.sizes[(body.pictures.sizes.length - 1)].link;

              VimeoInformation.findOne({})
              .then((info) => {
                  info.information = videoCollection;
                  info.header = header;
                  info.profilePicture = profilePicture;
                  info.bioHeader = bioHeader;
                  info.bio = bio;
                  info.number = manfredNumberString;
                  return info.save();
              })
              .catch((error) => console.log(error));

            });

        });

}
