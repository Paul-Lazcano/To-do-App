import React, { Fragment } from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import './styles.css';

// To do list
const todos = [
    {taskName: 'jugar con aikito', isCompleted: false},
    {taskName: 'ver haruhi', isCompleted: false},
    {taskName: 'hacer ejercicio', isCompleted: false},
    {taskName: 'ver shingeki', isCompleted: false},
];
// App
// TODO: Falta agregar la lógica JS y los estilos
export function App() {
    return (
        <Fragment>
            <TodoCounter />
            <TodoSearch />
            <TodoList >
                {todos.map(({ taskName }) => (
                    <TodoItem key={taskName} text={taskName} />
                ))}
            </TodoList>
            <CreateTodoButton />
            
        </Fragment>
    );
}