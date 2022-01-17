import React from 'react'

export function TodoItem({ text, completed, onComplete, onDelete }) {
    return (
        <li className="todo-list__item">
            <span 
                className={`icon icon-check ${completed && 'icon-check--active'}`}
                onClick={onComplete}
            >
                ✔
            </span>            
            <p className={`todo-list__task-name ${completed && 'todo-list__task-name--completed'}`}>{text}</p>
            <span
                className="icon close"
                onClick={onDelete}
            >
                X
            </span>
        </li>
    )
}
