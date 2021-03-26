import React, { useState, useRef } from "react";
import "../styles/Chat.scss";
import { io } from "socket.io-client";

//import users images
import jamesPicture from "../assets/users-image/photo-james-helms.jpg";
import kerryPicture from "../assets/users-image/photo-kerry-hebert.jpg";

import TextareaAutosize from "react-textarea-autosize";
import { useEffect } from "react/cjs/react.development";

export default function Chat() {
  const [input, setInput] = useState();
  const [messages, setMessages] = useState([]);

  const inputEl = useRef(null);

  const socket = io("http://localhost:5001");

  socket.on("connect", () => {
    console.log(socket.connected);
  });

  socket.on("disconnect", () => {
    console.log(socket.connected);
  });

  const sendMessage = (e) => {
    e.preventDefault();
    if (input) {
      socket.emit("chat message", input);
      inputEl.current.value = "";
    }
  };

  socket.on("chat message", function (msg) {
    setMessages([...messages, msg]);
  });

  console.log("messages: " + messages);

  return (
    <div className="chat">
      <div className="chat-conversation">
        {messages.map((message) => (
          <p>{message}</p>
        ))}
      </div>
      <div className="chat-input">
        <div className="chat-input-container">
          <form>
            <TextareaAutosize
              onChange={(e) => setInput(e.target.value)}
              ref={inputEl}
              className="chat-input-textarea"
              placeholder="Enter message here..."
            />
            <button onClick={sendMessage}>Send !</button>
          </form>
        </div>
      </div>
    </div>
  );
}
