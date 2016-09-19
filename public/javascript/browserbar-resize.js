"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("resize", resizer.bind(null, header));
}

const getHeight = () => {
  return window.outerHeight;
}

const resizer = (header) => {
  header.style.height = getHeight() + "px";
  header.firstElementChild.style.height = getHeight() + "px";
}

selector();
