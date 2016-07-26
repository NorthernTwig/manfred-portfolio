"use strict";

let scroll = (e) => {
  let header = document.querySelector("header");
  header.style.backgroundPosition =  "0 " + (window.pageYOffset / 3) + "px";
  window.addEventListener("scroll", (e) => {
    header.style.backgroundPosition =  "0 " + (e.pageY / 3) + "px";
  });
}

window.addEventListener("load", scroll);
