"use strict";

const selector = () => {
  let header = document.querySelector("header");
  window.addEventListener("orientationchange", resizer.bind(null, header));
}

const getHeight = () => {
  return window.outerHeight;
}

const resizer = (header) => {
  header.style.height = getHeight() + "px";
}

window.addEventListener("load", selector());
