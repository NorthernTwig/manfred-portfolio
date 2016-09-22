"use strict";

let resizing = () => {
  let image = document.querySelectorAll(".video-container");
  let rows = document.querySelectorAll(".row");
  let width = null;
  let imageWidth = null;
  let imageHeight = null;

  rescale(width, imageWidth, imageHeight, image, rows);
  window.addEventListener("resize", rescale.bind(null, width, imageWidth, imageHeight, image, rows));
}

let rescale = (width, imageWidth, imageHeight, image, rows) => {
  let widthings = 0;
  let maxWidth = 0;

  for (let y = 0; y < rows.length; y++) {

    widthings = rows[y].children.length;

    width = window.outerWidth;

    if (width > 800) {
      imageWidth = (width/widthings);
    } else {
      imageWidth = (width/1);
    }

    imageHeight = window.innerHeight < (imageWidth/16 * 9) ? window.innerHeight : (imageWidth/16 * 9);

    for (let i = 0; i < rows[y].children.length; i++) {
      rows[y].children[i].style.width = imageWidth + "px";
      rows[y].children[i].style.height = imageHeight + "px";
    }

  }


}

resizing();
