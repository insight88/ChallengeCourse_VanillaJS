
const display = document.getElementsByClassName("display")[0],
  temp = document.getElementsByClassName("temp")[0],
  number = document.querySelectorAll(".number"),
  calculate = document.querySelectorAll(".calculate"),
  reset = document.querySelector(".reset"),
  equal = document.getElementById("equal");

let tempNumber = 0;
let finalNumber = 0;
let result = 0;
let calculator = "";
let resultArray = [];

function resetDisplay() {
  display.innerText = "";
  temp.innerText = "";
  tempNumber = 0;
  finalNumber = 0;
  calculator = "";
}

function getResult() {
  resultArray.push(tempNumber, calculator, finalNumber);
  result = eval(resultArray.join(""));
  display.innerText = result;
  tempNumber = 0;
  finalNumber = 0;
  resultArray = [];
}

function init() {
  equal.addEventListener("click", equal);
  reset.addEventListener("click", resetDisplay);

  Array.from(calculate).forEach(a => {
    a.addEventListener("click", function() {
      calculator = this.innerText;
    });
  });
  
  Array.from(number).forEach(a => {
    a.addEventListener("click", function() {
      if (this.innerText === "=") {
        getResult();
      } else if (calculator === "") {
        display.innerText = display.innerText + this.innerText;
        tempNumber = display.innerText;
      } else if (calculator !== "") {
        temp.innerText = temp.innerText + this.innerText;
        display.innerText = temp.innerText;
        finalNumber = display.innerText;
      }
      console.log(display.innerText);
      console.log(display);
      console.log(typeof display);
      console.log(tempNumber);
      console.log(finalNumber);
    });
  });
}

init();
