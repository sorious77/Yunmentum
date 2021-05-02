const inputName = document.querySelector(".inputName");
const showName = document.querySelector(".showName");
const storageName = localStorage.getItem("userName");

function showAndHide(name) {
  if (name === null) {
    inputName.style = "display:block";
    showName.style = "display:none";
  } else {
    showName.innerHTML = `Welcome ${name}!!`;
    inputName.style = "display:none";
    showName.style = "display:block";
  }
}

function handleInput() {
  const name = inputName.value;
  localStorage.setItem("userName", name);
  showAndHide(name);
}

function initName() {
  inputName.addEventListener("change", handleInput);
  if (storageName !== null) {
    showAndHide(storageName);
  } else {
    showAndHide(null);
  }
}

initName();
