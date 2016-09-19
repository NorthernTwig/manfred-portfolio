"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("orientationchange", resizer.bind(null, header), false);
}

const getHeight = () => {
  // setTimeout(() => {
    // console.log(window.outerHeight);
    return window.innerHeight;
  // }, 100);
}

const resizer = (header) => {
  let height = getHeight();
  header.style.height = height + "px";
  header.firstElementChild.style.height = height + "px";
}

selector();
