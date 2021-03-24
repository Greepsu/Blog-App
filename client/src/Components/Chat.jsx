import React from "react";
import "../styles/Chat.scss";

//import users images
import jamesPicture from '../assets/users-image/photo-james-helms.jpg'
import kerryPicture from '../assets/users-image/photo-kerry-hebert.jpg'

import TextareaAutosize from "react-textarea-autosize";

export default function Chat() {
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
            <TextareaAutosize className="chat-input-textarea" placeholder="Enter message here..." />
            <button>Send !</button>
          </div>
      </div>
    </div>
  );
}
