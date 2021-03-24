import React, { useState } from "react";
import "../styles/Chat.scss";

//import users images
import jamesPicture from '../assets/users-image/photo-james-helms.jpg'
import kerryPicture from '../assets/users-image/photo-kerry-hebert.jpg'

import TextareaAutosize from "react-textarea-autosize";

export default function Chat() {
  const [input, setInput] = useState()
  console.log(input)

  const sendMessage = (input) => {
    
  }
  return (
    <div className="chat">
      <div className="chat-conversation">
          <div className="chat-message">
              <img src={kerryPicture} alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
          <div className="chat-message response">
              <img src={jamesPicture} alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
          <div className="chat-message">
              <img src={kerryPicture} alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
          <div className="chat-message response">
              <img src={jamesPicture} alt=""/>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium voluptate mollitia aperiam laboriosam repellat!</p>
          </div>
      </div>
      <div className="chat-input">
          <div className="chat-input-container">
            <TextareaAutosize onChange={(e) => setInput(e.target.value)} className="chat-input-textarea" placeholder="Enter message here..." />
            <button onClick={sendMessage} >Send !</button>
          </div>
      </div>
    </div>
  );
}
