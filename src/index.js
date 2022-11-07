import getToDos, { addTodo, deleteToDo, updateTodo } from "./crud.js";
import checkoffItem from "./interactiveList.js";
import "./style.css";

const todoContainer = document.querySelector(".todo-list");
const clearListBtn = document.querySelector(".btn-clear");

const itemMarkupGen = (data) => {
  return `<li class="todo" data-index="${data.index}" data-completed="${data.completed}"> 
  <label for="${data.index}"> <input type="checkbox" class="checkbox"></label>
  <input type="text" id="${data.index}" class="item-description-input" name="${data.index}" value="${data.description}">
   <div class="fa-list-icon"><i
  class="fa-solid fa-ellipsis-vertical"></i></div> 
  </li>`;
};

const populateList = (arr) => {
  let listString = "";

  const sortedArr = arr.sort((a, b) => a.index - b.index);

  sortedArr.forEach((item) => {
    listString += itemMarkupGen(item);
  });

  todoContainer.innerHTML = listString;
};

populateList(getToDos());

// Add to do
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const { value } = e.target;

    if (!value?.trim()) return;

    if (e.target.classList.contains("add-todo-input")) {
      addTodo(value);
      // Empty input
      e.target.value = "";
      populateList(getToDos());
      return;
    }

    if (e.target.classList.contains("item-description-input")) {
      const parentEl = e.target.closest(".todo");

      const { index } = parentEl.dataset;

      updateTodo(+index, value);
      populateList(getToDos());
    }
  }
});

// Deleting
todoContainer.addEventListener("click", (e) => {
  const clickedItem = e.target.closest(".fa-list-icon");

  if (!clickedItem) return;

  clickedItem
    .querySelector(".fa-solid")
    .classList.remove("fa-ellipsis-vertical");

  clickedItem.querySelector(".fa-solid").classList.add("fa-trash-can");

  const trashIcon = clickedItem.querySelector(".fa-trash-can");

  trashIcon?.addEventListener("click", () => {
    const parentEle = trashIcon.closest(".todo");
    const { index } = parentEle.dataset;

    deleteToDo(+index);
    populateList(getToDos());
  });
});

let indexesToRemove = [];

todoContainer.addEventListener("click", (e) => {
  const activeEl = e.target.closest(".checkbox");
  if (!activeEl) return;
  const parentEl = activeEl.closest(".todo");

  // eslint-disable-next-line no-undef
  indexesToRemove = checkoffItem(parentEl);
});

clearListBtn.addEventListener("click", () => {
  indexesToRemove.forEach((i) => {
    deleteToDo(i);
  });
  populateList(getToDos());
});
