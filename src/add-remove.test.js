/**
 * @jest-environment jsdom
 */
import getToDos, { addTodo, deleteToDo } from "./crud";
import { itemMarkupGen, populateList } from "./index.js";

const toDoList = JSON.parse(localStorage.getItem("todo")) || [];

const mockTaskData = [
  {
    description: "Feed the cats",
    isCompleted: false,
    index: toDoList.length + 1,
  },
  {
    description: "Feed the cats",
    isCompleted: false,
    index: toDoList.length + 1,
  },
];
