import React from 'react';

export const ChangeMessage = ({onToggleShow}) => {
  return (
    <div className="change-message">
      <div className="change-message__background">
        <div className="change-message__text-container">
          <p className="change-message__text">Tus tareas han cambiado</p>
          <p className="change-message__text">Deseas actualizar la página?</p>
          <button
            className="change-message__button"
            onClick={onToggleShow}
          >
            Si! 😈
          </button>
        </div>
      </div>
    </div>
  );
};
