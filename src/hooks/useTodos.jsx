import React, { useState } from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
    sincronizeItem: sincronizeTodos,
  } = useLocalStorage("TODOS_V1", []);

  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [close, setClose] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = Array.isArray(todos)
    ? todos.filter((todo) => !!todo.isCompleted).length
    : 0;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.taskName.toLowerCase();
      const todoTitle = todo.title.toLowerCase();
      const todoDate = todo.date.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return (
        todoText.includes(searchText) ||
        todoTitle.includes(searchText) ||
        todoDate.includes(searchText)
      );
    });
  }

  const addTodo = (title, taskName, date) => {
    const newTodo = { title, taskName, isCompleted: false, date, id: new Date() }
    const newTodos = [...todos];
    Array.isArray(newTodos) &&
      newTodos.push(newTodo);
    saveTodos(newTodos);
  };

  const toggleCompleteTodo = (id) => {
    const todoIndex =
      Array.isArray(todos) &&
      todos.findIndex(
        (todo) => todo.id === id
      );
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted;
    saveTodos(newTodos);
  };
  const editTodos = (id, title, taskName, date) => {
    const todoIndex =
      Array.isArray(todos) &&
      todos.findIndex(
        (todo) => todo.id === id
      );
    const newTodos = [...todos];
    newTodos[todoIndex].title = title;
    newTodos[todoIndex].taskName = taskName;
    newTodos[todoIndex].date = date;
    saveTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const todoIndex =
      Array.isArray(todos) &&
      todos.findIndex(
        (todo) =>
          todo.id === id
      );
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    toggleCompleteTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    openForm,
    setOpenForm,
    close,
    setClose,
    sincronizeTodos,
    openEdit,
    setOpenEdit,
    editTodos,
    currentTodo,
    setCurrentTodo,
  };
}

export { useTodos };
