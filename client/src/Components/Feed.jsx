import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

import "../styles/Feed.scss";

//Import Components
import Header from "./Header";
import Post from "./Post";
import UserInput from "./UserInput";

export default function Feed() {
  return (
    <motion.div
      initial={{ x: "-40%" }}
      animate={{ x: 0 }}
      transition={{ ease: "easeOut", duration: 0.4 }}
      className="feed"
    >
      <div className="feed-container">
        <Header pageName="Feed" />
        <section>
          <UserInput />
          <div className="posts-container">
            <Post />
            <Post />
            <Post />
            <Post />
          </div>
        </section>
      </div>
        <Link to="/private-message">
            <motion.div whileHover={{ scale: 1.2 }} className="arrow-right"></motion.div>
        </Link>
    </motion.div>
  );
}
