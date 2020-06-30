
const addTask = document.querySelector(".js-addTask"),
  taskInput = addTask.querySelector("input"),
  pendingList = document.querySelector(".js-pending"),
  finishedList = document.querySelector(".js-finished");

const PENDING_LS = "pending";
const FINISHED_LS = "finished";

function filterFn(toDo) {
  return toDo.id === 1;
}

let pending = [];
let finished = [];

function deletePending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  const cleanToDos = pending.filter(function(toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  pending = cleanToDos;
  saveToDos();
}

function finishPending(event) {
  const btn = event.target;
  const li = btn.parentNode;
  pendingList.removeChild(li);
  finishedList.appendChild(li);
  const cleanToDos = pending.filter(function(toDo) {
    return toDo.id !== parseInt(li.id, 10);
  });
  pending = cleanToDos;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(PENDING_LS, JSON.stringify(pending));
}

function paintToDo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delBtn");
  const finishBtn = document.createElement("finishBtn");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  delBtn.addEventListener("click", deletePending);
  finishBtn.addEventListener("click", finishPending);
  span.innerText = text;
  delBtn.innerHTML = "❌";
  finishBtn.innerHTML = "✔";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(finishBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pending.push(toDoObj);
  saveToDos();
}

function paintToDo2(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("delBtn");
  const backBtn = document.createElement("backBtn");
  const span = document.createElement("span");
  const newId = pending.length + 1;
  delBtn.addEventListener("click", deletePending);
  backBtn.addEventListener("click", finishPending);
  span.innerText = text;
  delBtn.innerHTML = "❌";
  backBtn.innerHTML = "🔺";
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(backBtn);
  li.id = newId;
  pendingList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  pending.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintToDo(currentValue);
  taskInput.value = "";
}

function loadToDos() {
  const loadedtoDos = localStorage.getItem(PENDING_LS);
  if (loadedtoDos !== null) {
    const parsedToDos = JSON.parse(loadedtoDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  addTask.addEventListener("submit", handleSubmit);
}

init();
