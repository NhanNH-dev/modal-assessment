import React, { useState, useRef, useEffect } from "react";
import "./App.css";
import Modal from "./Component/Modal";
import useClickOutside from "./Utils/useClickOutside";

function App() {
  const [show, setShow] = useState(false);
  const [time, setTime] = useState(5);
  const refModal = useRef();

  //custom hook
  useClickOutside(refModal, () => {
    if (show) setShow(false);
  });

  const closeModal = (e) => {
    setShow(false);
  };

  useEffect(() => {
    setTime(5);
  }, [show]);

  const closeModalAfter = () => {
    const interval = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
    setTimeout(() => {
      clearInterval(interval);
      setShow(false);
    }, time * 1000);
  };

  const content = () => {
    return (
      <div>
        this is my Modal!
        
        <div>
          <button onClick={() => closeModalAfter()}>
            Modal to close in {time}s
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="App">
      <Modal
        ref={refModal}
        show={show}
        closeModal={closeModal}
        content={content}
        title="A React Modal Example"
      />
      <button onClick={() => setShow(!show)}>show Modal</button>
    </div>
  );
}

export default App;
