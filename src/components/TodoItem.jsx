import React from "react";
export function TodoItem({
  title,
  text,
  id,
  date,
  completed,
  onComplete,
  onDelete,
  setOpenModal,
  setOpenEdit,
  setCurrentTodo,
}) {
  const toggleEdit = () => {
    setOpenModal(true);
    setOpenEdit(true);
    setCurrentTodo({id, title, text, date});
  }
  return (
    <li
      className={`todo-list__item ${completed && "todo-list__item-completed"}`}
    >
      <div className="todo-list__icon-container">
        <span
          className={`icon icon-check ${completed && "icon-check--active"}`}
          onClick={onComplete}
        >
          ✔
        </span>
        <span
          className={`icon icon-edit ${completed && "todo-list__task-name--completed icon-edit--disabled"}`}
          onClick={toggleEdit}
        >
          Editar
        </span>
        <span className="icon close" onClick={onDelete}>
          X
        </span>
      </div>
      <h4
        className={`todo-list__title ${completed && "todo-list__task-name--completed"
          }`}
      >
        {title}
      </h4>
      <p
        className={`todo-list__task-name ${completed && "todo-list__task-name--completed"
          }`}
      >
        {text || "No hay descripción"}
      </p>
      <p
        className={`todo-list__date ${completed && "todo-list__task-name--completed"
          }`}
      >
        {date || "No hay fecha"}
      </p>
    </li>
  );
}
