"use strict";

module.exports = () => {
  // Scroll parrallax
  const scroll = (e) => {
    let header = document.querySelector("header");
    pageCheck(header);
    window.addEventListener("scroll", pageCheck.bind(null, header), false);
  }

  const pageCheck = (header) => {
    if (window.outerWidth > 800) {
      header.style.backgroundPosition =  "50% " + (this.pageYOffset / 3) + "px";
    }
  }

  scroll();
}
