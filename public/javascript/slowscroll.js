"use strict";

let currentPosition = () => {
  // Where are we?

  return window.pageYOffset;

}

let anchorPosition = () => {
  // Where is the anchor?

  let anchor = document.querySelector(".manfred-info").offsetTop;
  return anchor;

}

let distanceToScroll = () => {
  // Distance to tag (Subtract or add depending)

  if (currentPosition() > anchorPosition()) {
    return currentPosition() - anchorPosition();
  } else {
    return anchorPosition() - currentPosition();
  }

}

let performScrollAction = (e) => {
  // Take window top and use the information above

  console.log(distanceToScroll());
  e.target.preventDefault();
  window.scrollTo(0, distanceToScroll());

}

let anchorLink = () => {
  let navbar = document.querySelectorAll(".nav-bar a");

  for (let i = 0;i < navbar.length; i++) {
    navbar[i].addEventListener("click", performScrollAction, false);
  }

}

anchorLink();
