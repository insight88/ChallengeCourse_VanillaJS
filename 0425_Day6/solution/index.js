
const select = document.querySelector(".country");

function country() {
  const selected = select.value;
  localStorage.setItem("country", selected);
}

function savedCountry() {
  const selected = localStorage.getItem("country");
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  }
}

function init() {
  savedCountry();
  select.addEventListener("change", country);
}

init();
