import React from 'react'
import '../styles/Post.scss'

//import users images
import jamesPicture from '../assets/users-image/photo-james-helms.jpg'

export default function Post() {
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur imperdiet tellus nisl, eget volutpat urna viverra ut. Proin in ipsum vitae nibh porta dignissim.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
