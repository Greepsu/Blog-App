import React from 'react'
import '../styles/Header.scss'

export default function Header() {
    return (
        <header>
            <div className="page-name">
                <span>Feed</span>
            </div>
            <div className="login-name">
                <span>Name</span>
            </div>
        </header>
    )
}
