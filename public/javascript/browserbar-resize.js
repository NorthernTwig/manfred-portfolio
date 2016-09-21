"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("resize", resizer.bind(null, header));
}

const getHeight = (header) => {
  let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
  return currentHeight;
}

const resizer = (header) => {
  let height = getHeight(header);
  header.style.height = height;
  header.firstElementChild.style.height = height;
}

selector();
