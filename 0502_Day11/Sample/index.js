const input = document.getElementsByClassName("input")[0],
      tmp = document.getElementsByClassName("tmp")[0];

function i_empty() {
  input.innerText = ""
}

function t_empty() {
  tmp.innerText = ""
}

document.getElementsByClassName("all-clear")[0].addEventListener("click", function(){
  i_empty(),
  t_empty()
}),
document.getElementsByClassName("clear")[0].addEventListener("click", function(){
  i_empty()
}),
Array.from(document.querySelectorAll('.number')).forEach(a => {
    a.addEventListener('click', function() {
        if (input.innerText.length <= 19) {
          input.innerText = input.innerText + this.innerText
        }
        else {
          alert("최대 입력 범위를 초과했습니다!")
        }
    });
}),
document.getElementsByClassName("dot")[0].addEventListener("click", function(){
  if (input.innerText.indexOf(".") === -1) {
    input.innerText = input.innerText + "."
  }
}),
document.getElementsByClassName("sign")[0].addEventListener("click", function(){
  if (input.innerText.indexOf("-") === -1 && input.innerText !== "") {
    input.innerText = "-" + input.innerText
  }
  else {
    input.innerText = input.innerText.replace("-", "")
  }
}),
Array.from(document.querySelectorAll('.amt')).forEach(a => {
    a.addEventListener('click', function() {
        if (input.innerText !== "") {
          if (tmp.innerText === "") {
            tmp.innerText = input.innerText + " " + this.innerText
          }
          else {
            tmp.innerText = tmp.innerText + " " + input.innerText + " " + this.innerText
          }
        }
        if (input.innerText === "" && tmp.innerText !== "") {
          tmp.innerText = tmp.innerText.slice(0,-1) + " " + this.innerText
        }

        i_empty()
    });
}),
document.getElementsByClassName("result")[0].addEventListener("click", function(){
  if (input.innerText !== "") {
    input.innerText = eval(tmp.innerText + input.innerText),
    t_empty()
  }
});