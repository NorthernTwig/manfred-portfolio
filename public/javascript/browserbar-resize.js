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
  // let header = document.querySelector("header");
  let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
  // console.log(currentHeight);
  return currentHeight;
}


const test = () => {
  let testing = "";
  let header = document.querySelector("header");
  header.style.height = checkHeight(header);
  window.addEventListener("orientationchange", function() {
    testing = checkHeight(header);
    // currentHeight = window.getComputedStyle(header).getPropertyValue("height");
    header.style.height = testing;
  });
}

test();
