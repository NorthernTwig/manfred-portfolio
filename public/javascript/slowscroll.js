"use strict";

let currentPosition = () => {

  // Where are we?
  return window.pageYOffset;

}

let anchorPosition = (e) => {

  // Where is the anchor?
  let tag = e.target.getAttribute("href");
  let anchor = null;
  if (window.outerWidth > 800) {
    anchor = document.querySelector(tag).offsetTop - 50;
  } else {
    anchor = document.querySelector(tag).offsetTop;
  }
  return anchor;

}

let distanceToScroll = (current, anchor) => {

  return current - anchor;

}

let performScrollAction = (e) => {

  e.preventDefault();

  let anchorPos = anchorPosition(e);
  let currentPos = currentPosition();
  let distance = distanceToScroll(currentPos, anchorPos);
  let j = 0;

  let scrollCounter = setInterval(() => {

    //Depending on above or under.
    let speed = distance < 0 ? currentPos+j*j : currentPos-j*j;

    if (currentPosition() !== anchorPos) {
      currentPos += 0.5;
      j += 0.5;
    } else {
      console.log(anchorPos);
      return clearInterval(scrollCounter);
    }

    window.scrollTo(0, speed);

    //Ease-in
    if (distance <= 0) {
      if (speed >= anchorPos) {
        window.scrollTo(0, anchorPos);
        return clearInterval(scrollCounter);
      }
    } else if (distance >= 0) {
      if (speed <= anchorPos) {
        window.scrollTo(0, anchorPos);
        return clearInterval(scrollCounter);
      }
    }

  }, 1);
}

let anchorLink = () => {

  let navbar = document.querySelectorAll("nav a");

  for (let i = 0;i < navbar.length; i++) {
    navbar[i].addEventListener("click", performScrollAction, false);
  }

}

let getDistance = () => {
  let links = document.querySelectorAll("nav a");
  let linkArr = [];
  let tag = "";
  let anchor = 0;


  for (let i = 0; i < links.length; i++) {
    tag = links[i].getAttribute("href");

    if (window.outerWidth > 800) {
      anchor = document.querySelector(tag).offsetTop - 50;
    } else {
      anchor = document.querySelector(tag).offsetTop;
    }
    
    linkArr.push(anchor);
  }

  return linkArr;
}

let turnWhite = () => {
  let links = document.querySelectorAll("nav a");

  for (let i = 0; i < links.length; i++) {
    links[i].style.color = "";
  }

}

let getLinks = () => {
  let links = document.querySelectorAll("nav a");


  let current = currentPosition() + 50;
  let distance = getDistance();

  if (distance[0] <=  current && distance[1] >= current) {
    turnWhite();
    links[0].style.color = "#FFE13F";
  } else if (distance[1] <=  current && distance[2] >= current) {
    turnWhite();
    links[1].style.color = "#FFE13F";
  } else if (distance[2] <=  current) {
    turnWhite();
    links[2].style.color = "#FFE13F";
  }


}

window.addEventListener("scroll", getLinks);

anchorLink();
