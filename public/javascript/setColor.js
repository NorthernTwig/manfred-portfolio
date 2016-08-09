"use strict";

let setting = () => {
  let text = document.querySelector(".text-hero");
  let value = text.firstElementChild.getAttribute("data-titlepart");

  if (value <= text.firstElementChild.children.length) {
    text.firstElementChild.children[value - 1].firstElementChild.classList.add("yellow");
    text.firstElementChild.children[value - 1].firstElementChild.classList.add("mont-bold");
  }

}

let setColors = function() {
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
