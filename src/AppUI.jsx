import React, { Fragment, useContext } from 'react'
import { TodoContext } from "./TodoContext/index";
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import { Modal } from "./modal/Modal";
import { TodoForm } from "./components/TodoForm"

export function AppUI() {
    const value = useContext(TodoContext)
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        searchValue,
        setSearchValue,
        openModal,
    } = value;
    return (
        <Fragment>
            <TodoCounter />
            <TodoSearch setSearchValue={setSearchValue} searchValue={searchValue}/>
            
            <TodoList>
                {error && <p className='state-text'>Desesperate, hubo un error</p>}
                {loading && <p className='state-text'>Estamos cargando, no desesperes...</p>}
                {!loading && (!searchedTodos.length) && <p className='state-text'>Crea tu primer TODO!</p>}

                {Array.isArray(searchedTodos) && searchedTodos.map(({ taskName, isCompleted }) => (
                    <TodoItem 
                        key={taskName}
                        text={taskName}
                        completed={isCompleted}
                        onComplete={() => completeTodo(taskName)}
                        onDelete={() => deleteTodo(taskName)}
                    />
                ))}

            </TodoList>
                
            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

            <CreateTodoButton />
            
        </Fragment>
    )
}

