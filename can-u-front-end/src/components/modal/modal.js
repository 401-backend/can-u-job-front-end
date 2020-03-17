import React from "react";

import "./modal.scss";

const Modal = props => {
  return (
    <div className="modal">
      <div>
        <header>
          <span className="title">{props.title}</span>
          <button onClick={props.close}>X</button>
        </header>
        <div>{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;