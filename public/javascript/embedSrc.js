"use strict";

let src = () => {
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
