"use strict";

const selector = () => {
  let header = document.querySelector("header");
  resizer(header);
  window.addEventListener("orientationchange", resizer.bind(null, header));
}

const getHeight = (header) => {
  setTimeout(function() {
    let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
    console.log(currentHeight);
    return currentHeight;
  }, 100);
}

const resizer = (header) => {
    let height = getHeight(header);
    header.style.height = height;
    header.firstElementChild.style.height = height;
}

selector();
