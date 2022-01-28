import React from 'react'

export function TodoItem({ title, text, date, completed, onComplete, onDelete, onOpenClosePart }) {
    
    const toggleCompleteColor = evt => {
        onComplete()
        if(!completed){
            evt.target.classList.add('icon-check--active')
        } else {
            evt.target.classList.remove('icon-check--active')
        }
    }
    
    return (
        <li className={`todo-list__item ${completed && 'todo-list__item-completed'}`}>
            <div className="todo-list__icon-container">
                <span
                    className={`icon icon-check`}
                    onClick={toggleCompleteColor}
                >
                    ✔
                </span>
                <span
                    className="icon close"
                    onClick={onDelete}
                >
                    X
                </span>
            </div>
            <h4 className={`todo-list__title ${completed && 'todo-list__task-name--completed'}`}>{title}</h4>
            <p className={`todo-list__task-name ${completed && 'todo-list__task-name--completed'}`}>{text}</p>
            <p className={`todo-list__date ${completed && 'todo-list__task-name--completed'}`}>{date || 'No hay fecha'}</p>
        </li>
    )
}
