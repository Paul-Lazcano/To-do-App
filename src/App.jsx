import React from 'react';
import { TodoProvider } from "./TodoContext/index";
import { AppUI } from "./AppUI";
import './css/styles.css'
export function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}