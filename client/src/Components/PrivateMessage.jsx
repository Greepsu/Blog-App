import React from "react";
import "../styles/PrivateMessage.scss";

//import Components
import Chat from "./Chat";
import Header from "./Header";

//import users images
import kerryPicture from "../assets/users-image/photo-kerry-hebert.jpg";

//import Lib
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";


export default function PrivateMessage() {
  return (
    <motion.div
      initial={{ x: "40%" }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className="private-message"
    >
      <Header pageName="Private message" />
      <Link to="/">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="arrow-left"
        ></motion.div>
      </Link>
      <section>
        <div className="bubble">
          <img src={kerryPicture} alt="user" />
          <span className="notif">1</span>
        </div>
        <div className="separator"></div>
        <Chat />
      </section>
    </motion.div>
  );
}
