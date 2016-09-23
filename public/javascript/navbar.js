"use strict";

module.exports = () => {
  const navbar = () => {

    let nav = document.querySelector("nav");

    navChange(nav);
    window.addEventListener("scroll", navChange.bind(null, nav));

  }

  const navChange = (nav) => {

    if (window.pageYOffset >= 100) {
      nav.style.padding = "10px 0";
      nav.style.backgroundColor = "rgba(0, 0, 0, 0.75)";
    } else {
      nav.style.padding = "0";
      nav.style.backgroundColor = "rgba(0, 0, 0, 0)";
    }

  }

  navbar();
}
