import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import useClickOutside from "../../Utils/useClickOutside";

const Modal = (props) => {
  const refModal = useRef();
  const {
    show,
    title,
    content,
    onOk,
    onCancel,
    cancelText,
    clickOutsideToClose,
    background,
    width,
    closeTime,
    okButtonProps
  } = props;

  const [time, setTime] = useState("");

  useEffect(() => {
    if (closeTime) {
      setTime(closeTime);
    }
  }, [show]);

  const closeModalAfter = () => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      onCancel();
    }, time * 1000);
  };
  //custom hook
  useClickOutside(refModal, () => {
    if (clickOutsideToClose) {
      if (show) onCancel();
    }
  });

  if (!show) {
    return null;
  }

  return (
    <div
      ref={refModal}
      style={{ background, width }}
      className="modal"
      id="modal"
    >
      <div className="header_modal">
        <h3 className='title_modal'>{title}</h3>
        <button className="btn_x" onClick={() => onCancel()}>X</button>
      </div>

      <div className="content">
        {content()}
        {closeTime && (
          <button onClick={() => closeModalAfter()}>
            Modal to close in {time}s
          </button>
        )}
      </div>
      <div className="actions">
        <button onClick={() => onCancel()}>{cancelText}</button>
        <button disabled={okButtonProps} className="btn_Ok" onClick={() => onOk()}>
          OK
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  closeTime: PropTypes.number,
  title: PropTypes.string,
  cancelText: PropTypes.string,
  background: PropTypes.string,
  clickOutsideToClose: PropTypes.bool,
};
export default Modal;
