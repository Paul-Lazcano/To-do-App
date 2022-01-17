import React from 'react'

export function TodoItem({ text }) {
    return (
        <li className="todo-list__item">
            <span className="icon complete">✔</span>            
            <p className='todo-list__task-name'>{text}</p>
            <span className="icon close">X</span>
        </li>
    )
}
