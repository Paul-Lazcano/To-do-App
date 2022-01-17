import React, { Fragment, useState } from 'react';
import { TodoCounter } from "./components/TodoCounter";
import { TodoSearch } from "./components/TodoSearch";
import { TodoList } from "./components/TodoList";
import { TodoItem } from "./components/TodoItem";
import { CreateTodoButton } from "./components/CreateTodoButton";
import './styles.css';
import { findAllByTestId } from '@testing-library/react';

// To do list
const defaultTodos = [
    {taskName: 'jugar con aikito', isCompleted: false},
    {taskName: 'ver haruhi', isCompleted: false},
    {taskName: 'hacer ejercicio', isCompleted: false},
    {taskName: 'Ver shingeki', isCompleted: false},
];
// App
export function App() {
    const [todos, setTodos] = useState(defaultTodos);
    const [searchValue, setSearchValue] = useState('');
    
    const completedTodos = todos.filter(todos => !!todos.isCompleted).length;
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

    const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.taskName === text);

        const newTodos = [...todos];
        newTodos[todoIndex].isCompleted = true;

        setTodos(newTodos);
    };

    const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.taskName === text);

        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1)

        setTodos(newTodos);
    };

    return (
        <Fragment>
            <TodoCounter
                total={totalTodos}
                completed={completedTodos}
            />
            <TodoSearch
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <TodoList >
                {searchedTodos.map(({ taskName, isCompleted }) => (
                    <TodoItem 
                        key={taskName}
                        text={taskName}
                        completed={isCompleted}
                        onComplete={() => completeTodo(taskName)}
                        onDelete={() => deleteTodo(taskName)}
                    />
                ))}
            </TodoList>
            <CreateTodoButton />
            
        </Fragment>
    );
}