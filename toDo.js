const inputToDo = document.querySelector(".inputToDo");
const toDoUl = document.querySelector(".toDoUl");
let toDoList = [];
let length = 0;

function saveToDoList() {
  localStorage.removeItem("toDoList");
  console.log(toDoList);
  localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

function delToDo(event) {
  const target = event.target.parentNode;
  const parent = target.parentNode;
  parent.removeChild(target);
  parent.innerHTML = "";

  let tempList = [];

  length = 0;
  toDoList.forEach((toDo) => {
    if (toDo.id !== parseInt(target.id)) {
      tempList.push({ id: length, toDo: toDo.toDo });
      appendLi(toDo.toDo);
      length++;
    }
  });

  toDoList = tempList;

  saveToDoList();
}

function appendLi(toDo) {
  console.log("appendLi");

  const li = document.createElement("li");
  const btn =
    "<input type='button' onclick='delToDo(event)' value='❌' class='delBtn'>";
  const toDoDiv = `<span class='toDo'>${toDo}</span>`;
  li.id = length;
  li.innerHTML = btn + toDoDiv;
  inputToDo.value = "";
  toDoUl.append(li);
}

function handleInput() {
  const toDo = inputToDo.value;
  appendLi(toDo);

  if (toDoList === null) {
    toDoList = [];
  }

  const toDoObject = { id: length, toDo };
  toDoList.push(toDoObject);
  length++;
  saveToDoList();
}

function initToDo() {
  inputToDo.addEventListener("change", handleInput);
  console.log(toDoUl);
  toDoList = JSON.parse(localStorage.getItem("toDoList"));

  if (toDoList !== null) {
    length = toDoList.length;
    toDoList.forEach((toDo) => {
      appendLi(toDo.toDo);
    });
  }
}

initToDo();
