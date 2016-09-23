"use strict";

module.exports = () => {
  // Scroll parrallax
  const scroll = (e) => {
    let header = document.querySelector("header");
    console.log("hit");
    pageCheck(header);
    window.addEventListener("scroll", pageCheck.bind(null, header));
  }

  const pageCheck = (header) => {
    if (window.outerWidth > 800) {
      header.style.backgroundPosition =  "50% " + (window.pageYOffset / 3) + "px";
    }
  }

  scroll();
}
