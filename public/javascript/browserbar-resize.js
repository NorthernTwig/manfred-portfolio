"use strict";

const selector = () => {
  let header = document.querySelector("header");
  console.log(header);
  resizer(header);
}

const getHeight = () => {
  return window.outerHeight;
}

const resizer = (header) => {
    header.style.height = `${getHeight()} px`;
}

selector();
