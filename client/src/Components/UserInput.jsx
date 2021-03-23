import React from 'react'
import '../styles/UserInput.scss'

import TextareaAutosize from 'react-textarea-autosize';

export default function UserInput() {
    return (
        <div className="user-input">
            <TextareaAutosize className="textarea-input" placeholder="Enter message..." />
            <button>Post !</button>
        </div>
    )
}
