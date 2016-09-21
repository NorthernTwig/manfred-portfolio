"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("resize", resizer.bind(null, header));
}

const getHeight = (header) => {
  let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
  // console.log(window.getComputedStyle(header).getPropertyValue("height"));
  return currentHeight;
}

const resizer = (header) => {
  let height = getHeight(header);
  // console.log(height);
  header.style.height = height + "px";
  header.firstElementChild.style.height = height + "px";
}

selector();
