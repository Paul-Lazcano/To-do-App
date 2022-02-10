import React, { useState } from "react";
export function TodoForm({ addTodo, setOpenModal, setOpenForm }) {
  const [newTodoValue, setNewTodoValue] = useState("");
  const [newTitleValue, setNewTitleValue] = useState("");
  const [newDate, setNewDate] = useState("");
  const [labelText, setLabelText] = useState("Escribe tu nueva tarea!");

  //eventos del teclado
  const preventSubmitWithEnter = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
    }
  };
  const addNewLineOnTextArea = (evt) => {
    if (evt.key === "Enter") {
      evt.preventDefault();
      setNewTodoValue((prevState) => `${prevState}\n`);
    }
  };
  //eventos de escribir
  const onInputWrite = (evt) => {
    setNewTitleValue(evt.target.value);
  };
  const onTextAreaWrite = (evt) => {
    setNewTodoValue(evt.target.value);
  };
  const onDateInputWrite = (evt) => {
    setNewDate(evt.target.value);
  };
  //evento de cancelar
  const onCancel = () => {
    setOpenModal(false);
    setOpenForm(false);
  };
  //evento de submit
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!!newTitleValue) {
      addTodo(newTitleValue, newTodoValue, newDate);
      setNewTodoValue("");
      setNewTitleValue("");
      setNewDate("");
      setOpenModal(false);
      setOpenForm(false);
    } else {
      setLabelText("Tienes que añadir al menos un título");
    }
  };

  return (
    <form onSubmit={onSubmit} className="form">
      <label className="form__label">{labelText}</label>

      <div className="form__text-container">
        <input
          value={newTitleValue}
          type="text"
          placeholder="Titulo"
          className="form__input"
          onKeyDown={preventSubmitWithEnter}
          onChange={onInputWrite}
        ></input>
        <textarea
          value={newTodoValue}
          onChange={onTextAreaWrite}
          placeholder="Descripción, Ej: Comprar Cheetos"
          className="form__text-area"
          onKeyDown={addNewLineOnTextArea}
        />
        <p className="change-message__text">Elige la fecha</p>
        <input
          value={newDate}
          type="date"
          placeholder="20/08/2022"
          className="form__date"
          onKeyDown={preventSubmitWithEnter}
          onChange={onDateInputWrite}
        />
        <p className="change-message__text">O si prefieres escribir</p>
        <input
          value={newDate}
          type="text"
          placeholder="20/08/2022"
          className="form__date"
          onKeyDown={preventSubmitWithEnter}
          onChange={onDateInputWrite}
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
          Añadir
        </button>
      </div>
    </form>
  );
}
