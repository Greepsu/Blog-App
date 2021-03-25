import React, { useState } from 'react'
import '../styles/UserInput.scss'

import TextareaAutosize from 'react-textarea-autosize';

export default function UserInput() {

    const [message, setMessage] = useState()

    const postMessage = async () => {
        await fetch('http://localhost:5001/api', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(message)
        })
        .then(res => res.json())
    }
    return (
        <div className="user-input">
            <TextareaAutosize className="textarea-input" onChange={(e) => setMessage({message: e.target.value})} placeholder="Enter message..." />
            <button onClick={postMessage} >Post !</button>
        </div>
    )
}
