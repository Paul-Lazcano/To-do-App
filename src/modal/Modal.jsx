import ReactDOM from "react-dom";

export const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal-bg">{children}</div>,
    document.getElementById("modal")
  );
};
