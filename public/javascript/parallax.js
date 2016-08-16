"use strict";

// Scroll parrallax
let scroll = (e) => {
  let header = document.querySelector("header");
  pageCheck(header);
  window.addEventListener("scroll", pageCheck.bind(null, header));
}

let pageCheck = (header) => {
  header.style.backgroundPosition =  "50% " + (this.pageYOffset / 3) + "px";
}

scroll();
