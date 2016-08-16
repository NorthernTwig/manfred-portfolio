"use strict";

const hamburger = () => {
  let ham = document.querySelector(".hamburger-container");
  let sallad = document.querySelector(".hamburger");
  ham.addEventListener("click", () => {
    sallad.classList.toggle("expand");
  });

}

hamburger();
