import React, { useState } from 'react'

export const EditTodo = ({ setOpenModal, setOpenEdit, onCompleteEdit, currentTodo }) => {
  const [title, setTitle] = useState(currentTodo.title);
  const [taskName, setTaskName] = useState(currentTodo.text);
  const [date, setDate] = useState(currentTodo.date);
  const onCancel = () => {
    setOpenModal(false);
    setOpenEdit(false);
  };
  const onTitleWrite = (evt) => {
    setTitle(evt.target.value)
  }
  const onTaskNameWrite = (evt) => {
    setTaskName(evt.target.value)
  }
  const onDateWrite = (evt) => {
    setDate(evt.target.value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault();

    onCompleteEdit(currentTodo.id, title, taskName, date);
    setTitle("");
    setTaskName("");
    setDate("");
    setOpenModal(false);
    setOpenEdit(false);
  }
  return (
    <>
      <form
        className='form'
        onSubmit={onSubmit}
      >
        <label
          className='form__label'
        >
          Edita tu tarea!
        </label>
        <div className='form__text-container'>
          <input
            type="text"
            placeholder='Nuevo título'
            className='form__input'
            value={title}
            onChange={onTitleWrite}
          />
          <textarea
            placeholder='Descripción, Ej: Comprar pikochas'
            className='form__text-area'
            value={taskName}
            onChange={onTaskNameWrite}
          />
          <input
            type="text"
            placeholder='14/08/2022'
            className='form__date'
            value={date}
            onChange={onDateWrite}
          />
        </div>
        <div className="form__button-container">
          <button
            type="button"
            onClick={onCancel}
            className="form__button form__button--close"
          >
            Cancelar
          </button>
          <button type="submit" className="form__button form__button--add">
            Editar
          </button>
        </div>
      </form>
    </>
  )
}
