
const PENDING_LS = "PENDING",
  FINISHED_LS = "FINISHED";

let pendingTasks = [],
  finishedTasks = [];

const form = document.querySelector("form"),
  input = form.querySelector("input"),
  pending = document.querySelector(".pending"),
  finished = document.querySelector(".finished");

function taskObj(text) {
  return {
    id: String(Math.random() * 100),
    text
  };
}

function deletePending(taskId) {
  pendingTasks = pendingTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function deleteFinished(taskId) {
  finishedTasks = finishedTasks.filter(function(task) {
    return task.id !== taskId;
  });
}

function deleteTask(event) {
  const btnD = event.target;
  const li = btnD.parentNode;
  if (li.parentNode === pending) {
    pending.removeChild(li);
    const cleanTasks = pendingTasks.filter(function(task) {
      return task.id !== parseInt(li.id, 10);
    });
    pendingTasks = cleanTasks;
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTasks));
  } else if (li.parentNode === finished) {
    finished.removeChild(li);
    const cleanTasks = finishedTasks.filter(function(task) {
      return task.id !== parseInt(li.id, 10);
    });
    finishedTasks = cleanTasks;
    localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
    localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTasks));
  }
}

function finishTask(event) {
  const pendingBtn = document.createElement("button");
  pendingBtn.innerHTML = "⏩";
  pendingBtn.addEventListener("click", pendingTask);

  const btnF = event.target;
  const li = btnF.parentNode;
  li.removeChild(btnF);
  li.appendChild(pendingBtn);
  pending.removeChild(li);
  finished.appendChild(li);

  deletePending(li.id);
  const taskObj = {
    text: li.span,
    id: li.id
  };
  pendingTasks.push(taskObj);
}

function pendingTask(event) {
  const checkBtn = document.createElement("button");
  checkBtn.innerHTML = "✅";
  checkBtn.addEventListener("click", finishTask);

  const btnP = event.target;
  const li = btnP.parentNode;
  li.removeChild(btnP);
  li.appendChild(checkBtn);
  finished.removeChild(li);
  pending.appendChild(li);

  deleteFinished(li.id);
  const taskObj = {
    text: li.span,
    id: li.id
  };
  finishedTasks.push(taskObj);
}

function addPending(taskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const checkBtn = document.createElement("button");

  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteTask);
  checkBtn.innerHTML = "✅";
  checkBtn.addEventListener("click", finishTask);

  span.innerText = taskObj.text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(checkBtn);
  li.id = taskObj.id;
  pending.appendChild(li);
}

function addFinished(taskObj) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const delBtn = document.createElement("button");
  const pendingBtn = document.createElement("button");

  delBtn.innerHTML = "❌";
  delBtn.addEventListener("click", deleteTask);
  pendingBtn.innerHTML = "⏩";
  pendingBtn.addEventListener("click", pendingTask);

  span.innerText = taskObj.text;
  li.appendChild(span);
  li.appendChild(delBtn);
  li.appendChild(pendingBtn);
  li.id = taskObj.id;
  pending.appendChild(li);
}

function loadTasks() {
  const pendingLoad = localStorage.getItem(PENDING_LS);
  const finishedLoad = localStorage.getItem(FINISHED_LS);
  const parsedPending = JSON.parse(pendingLoad) || [];
  const parsedFinished = JSON.parse(finishedLoad) || [];
  parsedPending.forEach(function(task) {
    addPending(task);
  });
  parsedFinished.forEach(function(task) {
    addFinished(task);
  });
}

function handleSubmit(event) {
  event.preventDefault();
  const inputTask = taskObj(input.value);
  addPending(inputTask);
  pendingTasks.push(inputTask);
  localStorage.setItem(PENDING_LS, JSON.stringify(pendingTasks));
  localStorage.setItem(FINISHED_LS, JSON.stringify(finishedTasks));
  input.value = "";
}

function init() {
  form.addEventListener("submit", handleSubmit);
  loadTasks();
}

init();
