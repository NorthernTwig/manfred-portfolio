"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("orientationchange", resizer.bind(null, header), true);
}

const getHeight = (header) => {
  let currentHeight = window.getComputedStyle(header).getPropertyValue("webkitLogicalHeight")
  return currentHeight;
}

const resizer = (header) => {
  let height = getHeight(header);
  header.style.height = height + "px";
  header.firstElementChild.style.height = height + "px";
}

selector();
