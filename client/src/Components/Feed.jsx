import React from 'react'
import '../styles/Feed.scss'
import Header from './Header'
import Post from './Post'

export default function Feed()  {
    return(
        <div className="feed">
            <div className="feed-container">
                <Header />
                <Post />
            </div>
        </div>
    )
}
