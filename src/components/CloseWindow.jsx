import React, { useContext } from "react";
import { TodoContext } from "../TodoContext/index";
export function CloseWindow({ onDismiss }) {
  const { setOpenModal, setOpenCloseWindow, setClose, close } =
    useContext(TodoContext);

  return (
    <section className="close-window">
      <h3 className="todo-list__title">¿Seguro que quieres borrar la tarea?</h3>
      <button
        onClick={() => {
          setClose(true);
        }}
      >
        Si
      </button>
      <button onClick={onDismiss}>No</button>
    </section>
  );
}
