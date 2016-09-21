"use strict";

// const selector = () => {
  // let header = document.querySelector("header");
  // getHeight(header);
  // window.addEventListener("resize", getHeight.bind(null, header));
// }

// const getHeight = (header) => {
  // setTimeout(function() {
    // let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
    // header.style.height = currentHeight;
    // header.firstElementChild.style.height = currentHeight;
  // }, 100);
// }

// const resizer = (header) => {
//     let height = getHeight(header);
//     header.style.height = height;
//     header.firstElementChild.style.height = height;
//     console.log(header);
// }

// const checkHeight = (header) => {
//   let currentHeight = window.getComputedStyle(header).getPropertyValue("height");
//   return currentHeight;
// }
//
// const fuckinghell = () => {
//   let header = document.querySelector("header");
//   header.style.height = "100vh";
//   let tjosan = window.getComputedStyle(header).getPropertyValue("height");
//   header.style.height = tjosan;
  // console.log(checkHeight(header));
  // console.log(tjosan);

  // let currentHeight = checkHeigeadeht(header);
  // window.addEventListener("orientationchange", () => {
      // console.log(screen.orientation.angle);
  // });
// }


const getHeaderElement = () => {
  let header = document.querySelector("header");
  console.log("fixar header");
  return header;
}

const getHeaderHeight = (header) => {
  let headerHeight = window.getComputedStyle(header).getPropertyValue("height");
  console.log("header höjd");
  return headerHeight;
}

const restoreHeaderHeight = (header) => {
  console.log("återställer höjd till 100vh");
  header.style.height = "100vh";
}

const setHeaderHeight = (header, headerHeightInPixels) => {
  console.log("Sätter till 100vh i pixlar");
  header.style.height = headerHeightInPixels;
}

const headerOrientationListener = (header, heightInPixels) => {
  restoreHeaderHeight(header);
  setTimeout(function() {
    heightInPixels = getHeaderHeight(header);
    setHeaderHeight(header, heightInPixels);
  }, 150);
}

const initSetHeaderHeight = () => {
  let heightInPixels = "";
  let header = getHeaderElement();
  headerOrientationListener(header, heightInPixels);
  window.addEventListener("orientationchange", headerOrientationListener.bind(null, header, heightInPixels), false);
}

initSetHeaderHeight();

// window.addEventListener("orientationchange", fuckinghell);
// test();
