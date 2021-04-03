import React, { useEffect, useState, useContext } from "react";
import "../styles/Feed.scss";

//import Lib
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

//Import Components
import Header from "./Header";
import Post from "./Post";
import UserInput from "./UserInput";
import { Context } from "./userContext";

export default function Feed() {
  const [feedMessages, setFeedMessages] = useState();
  const [context, setContext] = useContext(Context);
  const [message, setMessage] = useState();

  useEffect(() => {
    getMessages();
  }, []);

  const getMessages = async () => {
    try {
      await fetch("http://localhost:5001/api", {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => setFeedMessages(data));
    } catch (error) {
      console.log(error);
    }
  };

  const postMessage = async () => {
    await fetch("http://localhost:5001/api", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author: context.name,
        authorPic: context.imageUrl,
        message: message,
      }),
    }).then((res) => res.json());
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
          <UserInput setMessage={setMessage} postMessage={postMessage} />
          <div className="posts-container">
            {feedMessages
              ? feedMessages
                  .map((post) => (
                    <Post
                      key={uuidv4()}
                      author={post.author}
                      authorPic={post.authorPic}
                      message={post.message}
                      postId={post._id}
                      context={context}
                    />
                  ))
                  .reverse()
              : "No post available"}
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
