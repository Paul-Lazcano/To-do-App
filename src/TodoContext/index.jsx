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
  
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = Array.isArray(todos) ? todos.filter(todo => !!todo.isCompleted).length : 0;
  const totalTodos = todos.length;

  let searchedTodos = [];
  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
      searchedTodos = todos.filter(todo => {
        const todoText = todo.taskName.toLowerCase();
        const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
      })
  }

  const addTodo = (taskName) => {
    const newTodos = [...todos];
    Array.isArray(newTodos) && newTodos.push({
      taskName,
      isCompleted: false,
    })
    saveTodos(newTodos);
  };
  const completeTodo = (text) => {
    const todoIndex = Array.isArray(todos) && todos.findIndex(todo => todo.taskName === text);
    const newTodos = [...todos];
    newTodos[todoIndex].isCompleted = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const todoIndex = Array.isArray(todos) && todos.findIndex(todo => todo.taskName === text);
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
      completeTodo,
      deleteTodo,
      openModal,
      setOpenModal,
    }}>
      {props.children}
    </TodoContext.Provider>
  );
}

export { TodoContext, TodoProvider };