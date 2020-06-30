
const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h2");

function time() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const date = new Date();
  // 현재 시각을 나타내는 Date 오브젝트 설정, ms 단위
  const daysBetween = xmasDay.getTime() - date.getTime();

  const days = parseInt(daysBetween / (24 * 60 * 60 * 1000), 10);
  const hours = 23 - date.getHours();
  const minutes = 59 - date.getMinutes();
  const seconds = 60 - date.getSeconds();

  clockTitle.innerText = `${days}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
  // `${name}` : 템플릿 리터럴, name 변수의 값을 문자열로 출력, 백틱
  // (condition) ? a : b
  // condition이 true일 때 a, false일 때 b
}

function init() {
  time();
  setInterval(time, 1000);
  // time 함수를 1000ms 간격으로 반복 실행
}
init();
