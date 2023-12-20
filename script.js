let toDoInput,
  errorInfo,
  addBtn,
  ulList,
  popup,
  popupInfo,
  todotoEdit,
  popupInput,
  popupAddBtn,
  popupCloseBtn;

const main = () => {
  prepareDOMElements();
  prepareDOMEvents();
};
const prepareDOMElements = () => {
  toDoInput = document.querySelector(".todo-input");
  errorInfo = document.querySelector(".error-info");
  addBtn = document.querySelector(".btn-add");
  ulList = document.querySelector(".todolist ul");

  popup = document.querySelector(".popup");
  popupInfo = document.querySelector(".popup-info");
  popupInput = document.querySelector(".popup-input");
  popupAddBtn = document.querySelector(".accept");
  popupCloseBtn = document.querySelector(".cancel");
};
const prepareDOMEvents = () => {
  addBtn.addEventListener("click", addTask);
  ulList.addEventListener("click", checkClick);
  popupCloseBtn.addEventListener("click", closePopup);
  popupAddBtn.addEventListener("click", changeText);
  toDoInput.addEventListener("keyUp", enterKeyCheck);
};

const addTask = () => {
  if (toDoInput.value !== "") {
    const newTods = document.createElement("li");
    newTods.textContent = toDoInput.value;

    createToolsArea(newTods);
    ulList.append(newTods);

    ulList.append(newTods);
    errorInfo.textContent = "";
  } else {
    errorInfo.textContent = "wpisz tresc zadania";
  }
};

function createToolsArea(newTods) {
  const newDiv = document.createElement("div");
  newDiv.classList.add("tools");
  newTods.append(newDiv);

  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete");
  completeBtn.innerHTML = '<i class="fas fa-check"></i>';

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.textContent = "EDIT";

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");
  deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

  newDiv.append(completeBtn, editBtn, deleteBtn);
}

const checkClick = (e) => {
  if (e.target.matches(".complete")) {
    console.log(e.target.closest("li").classList.toggle("completed"));
    e.target.classList.toggle("completed");
  } else if (e.target.matches(".edit")) {
    editTodo(e);
  } else if (e.target.matches(".delete")) {
    deleteTodo(e);
  }
};

const editTodo = (e) => {
  todotoEdit = e.target.closest("li");
  popupInput.value = todotoEdit.firstChild.textContent;
  popup.style.display = "flex";
};
const closePopup = () => {
  popup.style.display = "none";
  popupInfo.textContent = "";
};

const changeText = () => {
  if (popupInput.value !== "") {
    todotoEdit.firstChild.textContent = popupInput.value;
    popup.style.display = "none";
    popupInfo.textContent = "";
  } else {
    popupInfo.textContent = "Musisz podać jakąś treść";
  }
};

const deleteTodo = (e) => {
  e.target.closest("li").remove();
  const allTodos = ulList.querySelectorAll("li");
  if (allTodos.length === 0) {
    errorInfo.textContent = "There is not task";
  }
};

const enterKeyCheck = (e) => {
  if (e.key === "Enter" || e.key === "NumpadEnter") {
  }
};

document.addEventListener("DOMContentLoaded", main);
