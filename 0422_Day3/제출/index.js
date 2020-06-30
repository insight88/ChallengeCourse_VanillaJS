// <⚠️ DONT DELETE THIS ⚠️>
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {
  over() {
    h2.style.color = colors[0];
    h2.innerHTML = "This mouse is here!";
  },
  gone() {
    h2.style.color = colors[1];
    h2.innerHTML = "This mouse is gone!";
  },
  resize() {
    h2.style.color = colors[2];
    h2.innerHTML = "You just resized!";
  },
  rightClick() {
    h2.style.color = colors[3];
    h2.innerHTML = "You just right clicked!";
  }
};

h2.addEventListener("mouseover", superEventHandler.over);
h2.addEventListener("mouseleave", superEventHandler.gone);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.rightClick);
