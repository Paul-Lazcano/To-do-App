import React, { useContext } from "react";
import { TodoContext } from "./TodoContext/index";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./components/TodoForm";
import { CloseWindow } from "./components/CloseWindow";

export function AppUI() {
  const value = useContext(TodoContext);
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodo,
    deleteTodo,
    searchValue,
    setSearchValue,
    openModal,
    openForm,
    openCloseWindow,
    completedTodos,
    totalTodos,
    setOpenModal,
    setOpenForm,
    addTodo,
    toggleModalAndCloseWindow,
  } = value;
  return (
    <>
      <TodoHeader>
        <TodoCounter totalTodos={totalTodos} completedTodos={completedTodos} />
        <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue} />
      </TodoHeader>

      <TodoList>
        {error && <p className="state-text">Desesperate, hubo un error</p>}
        {loading && (
          <div className="loading-state">
            <p className="state-text">Estamos cargando, no desesperes...</p>
          </div>
        )}
        {!loading && !searchedTodos.length && (
          <p className="state-text">Crea tu primera tarea!</p>
        )}

        {Array.isArray(searchedTodos) &&
          searchedTodos.map(({ title, taskName, isCompleted, date }) => (
            <TodoItem
              key={`${taskName}${title}${date}`}
              title={title}
              text={taskName}
              date={date}
              completed={isCompleted}
              onComplete={() => toggleCompleteTodo(taskName, date, title)}
              onOpenClosePart={toggleModalAndCloseWindow}
              onDelete={() => deleteTodo(taskName, date, title)}
            />
          ))}
      </TodoList>
      {openModal && openForm && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenForm={setOpenForm}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}
      {openModal && openCloseWindow && (
        <Modal>
          <CloseWindow onDismiss={toggleModalAndCloseWindow} />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} setOpenForm={setOpenForm} />
    </>
  );
}
