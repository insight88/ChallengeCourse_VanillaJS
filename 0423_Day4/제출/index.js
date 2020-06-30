const h2 = document.querySelector("h2");
const BASE_COLOR = "#5882FA";
const COLOR1 = "#8A0886";
const COLOR2 = "#B18904";

function windowSize() {
  var windowWidth = window.innerWidth;
  // window 오브젝트의 innerWidth 속성 불러오기
  if (windowWidth < 500) {
    document.body.style.background = BASE_COLOR;
  } else if (windowWidth > 500 && windowWidth < 1000) {
    document.body.style.background = COLOR1;
  } else {
    document.body.style.background = COLOR2;
  }
}

function init() {
  h2.style.color = "white";
  document.body.style.background = BASE_COLOR;
}

window.addEventListener("resize", windowSize);
init();
