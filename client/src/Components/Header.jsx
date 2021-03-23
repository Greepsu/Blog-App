import React from 'react'
import '../styles/Header.scss'

export default function Header({ pageName }) {
    return (
        <header>
            <div className="page-name">
                <span>{pageName}</span>
            </div>
            <div className="login-name">
                <span>Name</span>
            </div>
        </header>
    )
}
