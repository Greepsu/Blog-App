import React from 'react'
import '../styles/Feed.scss'

//Import Components
import Header from './Header'
import Post from './Post'
import UserInput from './UserInput'

export default function Feed()  {
    return(
        <div className="feed">
            <div className="feed-container">
                <Header />
                <section>
                    <div className="posts-container">
                        <Post />
                        <Post />
                        <Post />
                        <Post />
                    </div>
                    <UserInput />
                </section>
            </div>
        </div>
    )
}
