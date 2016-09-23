(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

module.exports = () => {
  const getHeaderElement = () => {
    let header = document.querySelector("header");
    return header;
  }
  
  const getTriangleElement = () => {
    let triangle = document.querySelector(".triangle-connector");
    return triangle;
  }

  const getHeaderHeight = (header) => {
    let headerHeight = window.getComputedStyle(header).getPropertyValue("height");
    return headerHeight;
  }

  const restoreHeaderHeight = (header) => {
    header.style.height = "100vh";
  }

  const setHeaderHeight = (header, headerHeightInPixels) => {
    header.style.height = headerHeightInPixels;
    header.firstElementChild.style.height = headerHeightInPixels;
    header.children[2].style.top = headerHeightInPixels.split("px")[0] - 50 + "px";
    header.children[2].style.opacity = 1;
  }

  const headerOrientationListener = (header, heightInPixels) => {
    restoreHeaderHeight(header);
    getTriangleElement().style.opacity = 0;
    setTimeout(() => {
      // header.children[2].style.top = getTriangleElement();
      getTriangleElement().style.opacity = 1;
      heightInPixels = getHeaderHeight(header);
      getTriangleElement().style.top = heightInPixels;
      setHeaderHeight(header, heightInPixels);
    }, 150);
  }

  const initSetHeaderHeight = () => {
    let heightInPixels = "";
    let header = getHeaderElement();
    getTriangleElement().style.opacity = 0;
    headerOrientationListener(header, heightInPixels);
    window.addEventListener("orientationchange", headerOrientationListener.bind(null, header, heightInPixels), false);
  }

  initSetHeaderHeight();

}

},{}],2:[function(require,module,exports){
"use strict";

const embedSrc = require("./embedSrc")();
const browserbarResize = require("./browserbar-resize")();
const hamburger = require("./hamburger")();
const imageResize = require("./imageResize")();
const navbar = require("./navbar")();
const parallax = require("./parallax")();
const setColor = require("./setColor")();
const slowscroll = require("./slowscroll")();

},{"./browserbar-resize":1,"./embedSrc":3,"./hamburger":4,"./imageResize":5,"./navbar":6,"./parallax":7,"./setColor":8,"./slowscroll":9}],3:[function(require,module,exports){
"use strict";

module.exports = () => {

  const src = () => {
    let svg = document.querySelectorAll(".video-thumbnail");
    let iframeSrc = null;
    let theTarget = null;

    for (let i = 0; i < svg.length; i++) {
      svg[i].firstElementChild.addEventListener("click", function(e) {
        let values = this.parentNode.getAttribute("data-value");

        let div = document.createElement('p');
        div.innerHTML = values;
        let iframe = div.firstChild;

        iframeSrc = iframe.getAttribute("src") + "&amp;autoplay=1";
        iframe.setAttribute("src", iframeSrc);

        this.parentElement.appendChild(iframe);
        this.remove();
      });
    }

  }

  window.addEventListener("load", src);

}

},{}],4:[function(require,module,exports){
"use strict";

module.exports = () => {
  const hamburger = () => {
    let ham = document.querySelector(".hamburger-container");
    let sallad = document.querySelector(".hamburger");
    ham.addEventListener("click", () => {
      sallad.classList.toggle("expand");
    });

  }

  hamburger();
}

},{}],5:[function(require,module,exports){
"use strict";

module.exports = () => {
  const resizing = () => {
    let image = document.querySelectorAll(".video-container");
    let rows = document.querySelectorAll(".row");
    let width = null;
    let imageWidth = null;
    let imageHeight = null;

    rescale(width, imageWidth, imageHeight, image, rows);
    window.addEventListener("resize", rescale.bind(null, width, imageWidth, imageHeight, image, rows));
  }

  const rescale = (width, imageWidth, imageHeight, image, rows) => {
    let widthings = 0;
    let maxWidth = 0;

    for (let y = 0; y < rows.length; y++) {

      widthings = rows[y].children.length;

      width = window.outerWidth;

      if (width > 800) {
        imageWidth = (width/widthings);
      } else {
        imageWidth = (width/1);
      }

      imageHeight = window.innerHeight < (imageWidth/16 * 9) ? window.innerHeight : (imageWidth/16 * 9);

      for (let i = 0; i < rows[y].children.length; i++) {
        rows[y].children[i].style.width = imageWidth + "px";
        rows[y].children[i].style.height = imageHeight + "px";
      }

    }


  }

  resizing();
}

},{}],6:[function(require,module,exports){
"use strict";

module.exports = () => {

  const getNavBar = () => {
    return document.querySelector("nav");
  }

  const navbar = () => {
    let nav = getNavBar();

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

},{}],7:[function(require,module,exports){
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
      console.log("Här inne är den laom stor");
      header.style.backgroundPosition =  "50% " + (window.pageYOffset / 3) + "px";
    }
  }

  scroll();
}

},{}],8:[function(require,module,exports){
"use strict";

module.exports = () => {
  const setting = () => {
    let text = document.querySelector(".text-hero");
    let value = text.firstElementChild.getAttribute("data-titlepart");

    if (value <= text.firstElementChild.children.length) {
      text.firstElementChild.children[value - 1].firstElementChild.classList.add("yellow");
      text.firstElementChild.children[value - 1].firstElementChild.classList.add("mont-bold");
    }

  }

  const setColors = function() {
    let headerText = document.querySelector(".text-hero").firstElementChild;
    let text = headerText.textContent;
    let splitted = text.split(" ");
    let word = null;
    let span = null;
    let paragraph = null;

    for (let i = 0; i < splitted.length; i++) {
      span = document.createElement("span");
      paragraph = document.createElement("h1");
      word = splitted[i];
      paragraph.textContent = word;
      paragraph.classList.add("mont-regular");
      span.appendChild(paragraph);
      headerText.appendChild(span);
    }

    headerText.firstChild.remove();

  };

  setColors();

  setting();
}

},{}],9:[function(require,module,exports){
"use strict";


module.exports = () => {

  const currentPosition = () => {

    // Where are we?
    return window.pageYOffset;

  }

  const anchorPosition = (e) => {

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

  const distanceToScroll = (current, anchor) => {

    return current - anchor;

  }

  const performScrollAction = (e) => {

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

  const anchorLink = () => {

    let navbar = document.querySelectorAll("nav a");

    for (let i = 0;i < navbar.length; i++) {
      navbar[i].addEventListener("click", performScrollAction, false);
    }

  }

  const getDistance = () => {
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

  const turnWhite = () => {
    let links = document.querySelectorAll("nav a");

    for (let i = 0; i < links.length; i++) {
      links[i].style.color = "";
    }

  }

  const getLinks = () => {
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

  getLinks();
  window.addEventListener("scroll", getLinks);
  anchorLink();
}

},{}]},{},[2]);
