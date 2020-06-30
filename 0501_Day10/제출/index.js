const maxValue = document.getElementById("bar"),
  guessNumber = document.querySelector(".guessNumber"),
  play = document.querySelector(".play"),
  chosen = document.querySelector(".chosen"),
  result = document.querySelector(".result");

function handleSubmit() {
  const currentValue = guessNumber.value;
  const maxNumber = maxValue.value;
  const machine = Math.floor(Math.random() * maxNumber);

  chosen.innerText = `You chose : ${currentValue}, the machine chose : ${machine}`;
  if (Number(currentValue) === Number(machine)) {
    result.innerText = `You Won!`;
  } else {
    result.innerText = `You Lost!`;
  }
}

function init() {
  play.addEventListener("click", handleSubmit);
}

init();
