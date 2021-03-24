import React from 'react'
import '../styles/Post.scss'

//import users images
import jamesPicture from '../assets/users-image/photo-james-helms.jpg'

export default function Post({message}) {
    return (
        <div className="post" >
            <div className="post-container">
                <div className="user-img">
                    <img src={jamesPicture} alt="user"/>
                </div>
                <div className="user-post">
                    <div className="user-author">
                        <p>Author</p>
                    </div>
                    <div className="user-message">
                        <p>{message}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
