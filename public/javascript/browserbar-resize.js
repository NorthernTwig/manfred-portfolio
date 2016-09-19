"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("orientationchange", resizer.bind(null, header));
}

const getHeight = () => {
  return window.outerHeight;
}

const resizer = (header) => {
  getHeight();
  header.style.height = getHeight() + "px";
  header.firstElementChild.style.height = getHeight() + "px";
}

selector();
