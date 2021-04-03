import React from "react";
import "../styles/UserInput.scss";

//import Lib
import TextareaAutosize from "react-textarea-autosize";

export default function UserInput(props) {
  return (
    <div className="user-input">
      <TextareaAutosize
        className="textarea-input"
        onChange={(e) => props.setMessage(e.target.value)}
        placeholder="Enter message..."
      />
      <button onClick={props.postMessage}>Post !</button>
    </div>
  );
}
