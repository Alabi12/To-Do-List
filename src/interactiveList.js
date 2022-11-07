const checkoffItem = (todoListItem) => {
  const todoListLi = todoListItem;
  const checkbox = todoListItem.querySelector(".checkbox");
  const input = todoListItem.querySelector(".item-description-input");

  const todoContainer = todoListItem.closest(".todo-list");

  if (checkbox.checked) {
    todoListLi.dataset.completed = true;
    input.classList.add("checked");
  } else {
    todoListLi.dataset.completed = false;
    input.classList.remove("checked");
  }

  // Indexes to remove
  const indexesToRemove = [];
  todoContainer.querySelectorAll(".todo").forEach((todoNode) => {
    if (todoNode.dataset.completed === "true") {
      indexesToRemove.push(+todoNode.dataset.index);
    }
  });

  return indexesToRemove;
};

export default checkoffItem;
