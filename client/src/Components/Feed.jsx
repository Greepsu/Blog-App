import React, { useEffect, useState } from "react";
import "../styles/Feed.scss";

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";

//Import Components
import Header from "./Header";
import Post from "./Post";
import UserInput from "./UserInput";

export default function Feed() {
    const [feedMessages, setFeedMessages] = useState([]);

    useEffect(() => {
        getMessages();
      }, []);


  const getMessages = async () => {
      try {
        await fetch("http://localhost:5001/api", {
            method: "GET"
        })
          .then((res) => res.json())
          .then((data) => setFeedMessages(data));
      } catch (error) {
          console.log(error)
      }

  };

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
            {feedMessages ?
            feedMessages.map((post) => (
                <Post key={post.id} message={post.message} />
            )) : "No post available"
        }
          </div>
        </section>
      </div>
      <Link to="/private-message">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="arrow-right"
        ></motion.div>
      </Link>
    </motion.div>
  );
}
