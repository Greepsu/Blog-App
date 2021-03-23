import React from "react";
import "../styles/Chat.scss";

import TextareaAutosize from "react-textarea-autosize";

export default function Chat() {
  return (
    <div className="chat">
      <div className="chat-conversation">
          <div className="chat-message">
              <img src="" alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
          <div className="chat-message">
              <img src="" alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
      </div>
      <div className="chat-input">
          <div className="chat-input-container">
            <TextareaAutosize />
            <button>Send !</button>
          </div>
      </div>
    </div>
  );
}
