import React from "react";
export function CreateTodoButton({ setOpenModal, setOpenForm }) {
  const toggleModal = () => {
    setOpenModal(true);
    setOpenForm(true);
  };

  return (
    <button className="FAB" onClick={toggleModal}>
      <span className="FAB__icon">+</span>
    </button>
  );
}
