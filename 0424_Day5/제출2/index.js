import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const DAYS_MS = (32400000 / 9) * 24;
const HOURS_MS = 32400000 / 9;
const MINUTES_MS = HOURS_MS / 60;
const SECONDS_MS = MINUTES_MS / 60;
const dDay = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();

  const ms = parseInt(xmasDay - today);
  const days = parseInt(ms / DAYS_MS);
  const hours = parseInt(ms / HOURS_MS - days * 24);
  const minutes = parseInt(ms / MINUTES_MS - days * 24 * 60 - hours * 60);
  const seconds = parseInt(
    ms / SECONDS_MS - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60
  );
  console.log(seconds);

  dDay.innerText = `${days < 10 ? `0${days}` : days}d ${
    hours < 10 ? `0${hours}` : hours
  }h ${minutes < 10 ? `0${minutes}` : minutes}m ${
    seconds < 10 ? `0${seconds}` : seconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
