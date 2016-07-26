"use strict";


let navbar = () => {

  let nav = document.querySelector("nav");

  window.addEventListener("scroll", (e) => {

    if (e.pageY >= 100) {
        nav.style.padding = "10px 0";
        nav.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    } else {
      nav.style.padding = "0";
      nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

  });

}

window.addEventListener("load", navbar);
