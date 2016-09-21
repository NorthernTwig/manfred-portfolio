"use strict";

// const selector = () => {
  // let header = document.querySelector("header");
  // getHeight(header);
  // window.addEventListener("resize", getHeight.bind(null, header));
// }

// const getHeight = (header) => {
  // setTimeout(function() {
    // let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
    // header.style.height = currentHeight;
    // header.firstElementChild.style.height = currentHeight;
  // }, 100);
// }

// const resizer = (header) => {
//     let height = getHeight(header);
//     header.style.height = height;
//     header.firstElementChild.style.height = height;
//     console.log(header);
// }

const checkHeight = (header) => {
  let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
  return currentHeight;
}

const fuckinghell = () => {
  let header = document.querySelector("header");
  header.style.height = "100vh";
  let tjosan = window.getComputedStyle(header).getPropertyValue("height");
  header.style.height = tjosan;
  // console.log(checkHeight(header));
  // console.log(tjosan);

  // let currentHeight = checkHeight(header);
  // window.addEventListener("orientationchange", () => {
      // console.log(screen.orientation.angle);
  // });
}

window.addEventListener("orientationchange", fuckinghell);
// test();
