import React from "react";
import "../styles/Post.scss";

export default function Post({ author, authorPic, message }) {
  return (
    <div className="post">
      <div className="post-container">
        <div className="user-img">
          <img src={`${authorPic}`} alt="user" />
        </div>
        <div className="user-post">
          <div className="user-author">
            <p>{author}</p>
          </div>
          <div className="user-message">
            <p>{message}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
