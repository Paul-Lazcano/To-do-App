import React from "react";
import { TodoHeader } from "./components/TodoHeader";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoLoading } from "./components/TodoLoading";
import { TodoError } from "./components/TodoError";
import { EmptyTodos } from "./components/EmptyTodos";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./components/TodoForm";
import { useTodos } from "./hooks/useTodos";
import "./css/styles.css";

export function App() {
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
    completedTodos,
    totalTodos,
    setOpenModal,
    setOpenForm,
    addTodo,
    toggleModalAndCloseWindow,
  } = useTodos();
  return (
    <>
      <TodoHeader loading={loading}>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
          // loading={loading}
        />
        <TodoSearch
          setSearchValue={setSearchValue}
          searchValue={searchValue}
          // loading={loading}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodoError />}
        onLoading={() => <TodoLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => (
          <p className="state-text">No hay resultados para "{searchText}"</p>
        )}
        render={({ taskName, title, date, isCompleted }) => (
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
        )}
      >
        {({ taskName, title, date, isCompleted }) => (
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
        )}
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

      <CreateTodoButton setOpenModal={setOpenModal} setOpenForm={setOpenForm} />
    </>
  );
}
