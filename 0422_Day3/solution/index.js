const h2 = document.querySelector("h2");
// html에서 h2 태그를 갖고 옴
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

const superEventHandler = {
  // 모든 eventHandler를 포함하는 오브젝트
  handleEnter: function() {
    h2.innerText = "The mouse is here!";
    // h2 tag 내부의 텍스트 내용을 입력
    h2.style.color = colors[0];
    // h2 tag의 style 중에서 color의 값을 colors[0]으로 입력
  },
  handleLeave: function() {
    h2.innerText = "The mouse is gone!";
    h2.style.color = colors[1];
  },
  handleResize: function() {
    h2.innerText = "You just resized!";
    h2.style.color = colors[2];
  },
  handleSelect: function() {
    h2.innerText = "You're selecting me!";
    h2.style.color = colors[3];
  },
  handleContext: function() {
    h2.innerHTML = "That was a right click!";
    h2.style.color = colors[4];
  }
};

h2.addEventListener("mouseenter", superEventHandler.handleEnter);
// mouseentet 이벤트 발생시 superEventHandler 오브젝트의 handleEnter 메소드를 실행
h2.addEventListener("mouseleave", superEventHandler.handleLeave);
window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContext);
