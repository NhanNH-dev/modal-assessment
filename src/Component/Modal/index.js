import React from "react";
import PropTypes from "prop-types";

const Modal = React.forwardRef((props, ref) => {
  const { show, title, closeModal, content } = props;
  if (!show) {
    return null;
  }
  return (
    <div ref={ref} className="modal" id="modal">
      <h3>{title}</h3>
      <div className="content">{content()}</div>
      <div className="actions">
        <button className="toggle-button" onClick={closeModal}>
          close Modal
        </button>
      </div>
    </div>
  );
});

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string,
};
export default Modal;
