"use strict";

const findHeader = () => {
  let headerInput = document.querySelector(".header");
  let tinyInput = document.querySelector(".tiny-text");

  headerInput.addEventListener("keyup", function() {
    headerText().firstElementChild.textContent = this.value;
    setColor();
  });

  tinyInput.addEventListener("keyup", function() {
    headerText().children[1].textContent = this.value;
  });

  let length = headerText().firstElementChild.children.length;
  let radio = document.querySelector(".title-part");

  for (let i = 0; i < length; i++) {
    radio.addEventListener("keyup", testColor);
  }

}

const testColor = function() {
  let value = this.value - 1;
  let testing = document.querySelector(".text-hero").firstElementChild;

  for (let i = 0; i < testing.children.length; i++) {
    testing.children[i].firstElementChild.classList.remove("mont-bold");
    testing.children[i].firstElementChild.classList.remove("yellow");
  }

  if (value < testing.children.length) {
    testing.children[value].firstElementChild.classList.add("yellow");
    testing.children[value].firstElementChild.classList.add("mont-bold");
  }

}

const headerText = () => {
  let header = document.querySelector(".text-hero");
  return header;
}

const setColor = function() {
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

findHeader();
