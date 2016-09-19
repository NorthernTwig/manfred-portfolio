"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("orientationchange", resizer.bind(null, header), false);
}

const getHeight = () => {
  return screen.height;
}

const resizer = (header) => {
  let height = getHeight();
  header.style.height = height + "px";
  header.firstElementChild.style.height = height + "px";
}

selector();
