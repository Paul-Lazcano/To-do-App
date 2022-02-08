import React, { useContext } from "react";
import { TodoContext } from "../TodoContext";
export function CreateTodoButton() {
  const { setOpenModal, setOpenForm } = useContext(TodoContext);
  const toggleModal = () => {
    setOpenModal((prevState) => !prevState);
    setOpenForm((prevState) => !prevState);
  };

  return (
    <button className="FAB" onClick={toggleModal}>
      <span className="FAB__icon">+</span>
    </button>
  );
}
