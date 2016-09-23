"use strict";


const getHeaderElement = () => {
  let header = document.querySelector("header");
  return header;
}

const getTriangleElement = () => {
  let triangle = document.querySelector(".triangle-connector");
  return triangle;
}

const getHeaderHeight = (header) => {
  let headerHeight = window.getComputedStyle(header).getPropertyValue("height");
  return headerHeight;
}

const restoreHeaderHeight = (header) => {
  header.style.height = "100vh";
}

const setHeaderHeight = (header, headerHeightInPixels) => {
  header.style.height = headerHeightInPixels;
  header.firstElementChild.style.height = headerHeightInPixels;
  header.children[2].style.top = headerHeightInPixels.split("px")[0] - 50 + "px";
  header.children[2].style.opacity = 1;
}

const headerOrientationListener = (header, heightInPixels) => {
  restoreHeaderHeight(header);
  getTriangleElement().style.opacity = 0;
  setTimeout(() => {
    // header.children[2].style.top = getTriangleElement();
    getTriangleElement().style.opacity = 1;
    heightInPixels = getHeaderHeight(header);
    getTriangleElement().style.top = heightInPixels;
    setHeaderHeight(header, heightInPixels);
  }, 150);
}

const initSetHeaderHeight = () => {
  let heightInPixels = "";
  let header = getHeaderElement();
  getTriangleElement().style.opacity = 0;
  headerOrientationListener(header, heightInPixels);
  window.addEventListener("orientationchange", headerOrientationListener.bind(null, header, heightInPixels), false);
}

initSetHeaderHeight();
