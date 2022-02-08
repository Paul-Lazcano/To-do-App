import React from "react";
export function CreateTodoButton({ setOpenModal, setOpenForm }) {
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
