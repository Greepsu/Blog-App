import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import '../styles/Feed.scss'

//Import Components
import Header from './Header'
import Post from './Post'
import UserInput from './UserInput'

export default function Feed()  {
    return(
        <div className="feed">
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
            <Link className="arrow-right" to="/private-message"></Link>
        </div>
    )
}
