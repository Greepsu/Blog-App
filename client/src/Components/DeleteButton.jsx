import React from "react";

export default function DeleteButton({ postId }) {
    const deleteMessage = async (id) => {
        await fetch(`http://localhost:5001/api/${id}`, {
          method: 'DELETE',
          "Content-Type": 'application/json'
        })
        .then(console.log("post deleted"))
      }
  return (
    <>
      <button className="delete-button" onClick={() => deleteMessage(postId)}>
        <span>X</span>
      </button>
    </>
  );
}
