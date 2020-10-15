import React, { useState } from "react";
import "./App.css";
import Modal from "./Component/Modal";

function App() {
  const [show, setShow] = useState(false);

  const handleOk = (e) => {
    alert("You just clicked the Ok button! ");
  };

  const handleCancel = (e) => {
    setShow(false);
  };

  const content = () => {
    return <div>This is a content Modal!</div>;
  };

  return (
    <div className="App">
      <Modal
        show={show}
        content={content}
        title="A React Modal Example"
        background="#c36b89"
        closeTime={5}
        width={500}
        clickOutsideToClose={true}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Cancel"
        okButtonProps={{ disable: false }}
      />
      <button className="show_modal" onClick={() => setShow(!show)}>
        Show Modal
      </button>
    </div>
  );
}

export default App;
