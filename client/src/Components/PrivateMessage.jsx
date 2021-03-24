import React from "react";
import '../styles/PrivateMessage.scss'

import Chat from "./Chat";
import Header from "./Header";

//import users images
import kerryPicture from '../assets/users-image/photo-kerry-hebert.jpg'
import { Link } from "react-router-dom/cjs/react-router-dom.min";


export default function PrivateMessage() {
  return (
    <div className="private-message" >
      <Header pageName="Private message" />
      <Link className="arrow-left" to="/"></Link>
      <section>
        <div className="bubble">
          <img src={kerryPicture} alt="user"/>
          <span className="notif">1</span>
        </div>
          <div className="separator"></div>
          <Chat />
      </section>
    </div>
  );
}
