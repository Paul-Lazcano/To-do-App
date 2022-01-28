import React, {useState} from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider(props) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [openCloseWindow, setOpenCloseWindow] = useState(false);
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = Array.isArray(todos) ? todos.filter(todo => !!todo.isCompleted).length : 0;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.taskName.toLowerCase();
        const todoTitle = todo.title.toLowerCase();
        const todoDate = todo.date.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText) || todoTitle.includes(searchText) || todoDate.includes(searchText);
      })
  }

  const addTodo = (title, taskName, date) => {
    const newTodos = [...todos];
    Array.isArray(newTodos) && newTodos.push({
      title,
      taskName,
      isCompleted: false,
      date,
    })
    saveTodos(newTodos);
  };
  const toggleCompleteTodo = (taskName, date, title) => {
    const todoIndex = Array.isArray(todos) 
      &&  todos.findIndex((todo) => (
            todo.taskName === taskName && todo.date === date && todo.title === title
          ));
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = !newTodos[todoIndex].isCompleted
    saveTodos(newTodos);
  }
  const openClosePart = () => {
    setOpenCloseWindow(true);
  }
  const deleteTodo = (taskName, date, title) => {
    const todoIndex = Array.isArray(todos) 
      &&  todos.findIndex((todo) => (
            todo.taskName === taskName && todo.date === date && todo.title === title
          ));
    const newTodos = [...todos];
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };
  
  return (
    <TodoContext.Provider value={{
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
      openCloseWindow,
      setOpenCloseWindow,
      openClosePart,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };