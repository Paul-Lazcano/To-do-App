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
import { ChangeAlert } from "./components/ChangeAlert/ChangeAlert";
import { Menu } from './components/Menu/Menu';
import { EditTodo } from "./components/EditTodo";
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
    sincronizeTodos,
    openEdit,
    setOpenEdit,
    editTodos,
    setCurrentTodo,
    currentTodo,
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
        <Menu>
          <></>
        </Menu>
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
        render={({ taskName, title, date, isCompleted, id }) => (
          <TodoItem
            key={id}
            id={id}
            title={title}
            text={taskName}
            date={date}
            completed={isCompleted}
            setCurrentTodo={setCurrentTodo}
            setOpenModal={setOpenModal}
            setOpenEdit={setOpenEdit}
            onComplete={() => toggleCompleteTodo(id)}
            onDelete={() => deleteTodo(id)}
          />
        )}
      />

      {openForm && openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenForm={setOpenForm}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      {openEdit && openModal && (
        <Modal>
          <EditTodo
            addTodo={addTodo}
            setOpenModal={setOpenForm}
            setOpenEdit={setOpenEdit}
            onCompleteEdit={editTodos}
            currentTodo={currentTodo}
          />
        </Modal>
      )}

      <CreateTodoButton setOpenModal={setOpenModal} setOpenForm={setOpenForm} />

      <ChangeAlert sincronize={sincronizeTodos} />

    </>
  );
}
