import React from 'react';
import { TodoProvider } from "./TodoContext/index";
import { AppUI } from "./AppUI";

export function App() {
    return (
        <TodoProvider>
            <AppUI />
        </TodoProvider>
    );
}