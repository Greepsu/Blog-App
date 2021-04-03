import React from 'react'
import '../styles/Header.scss'

//import Component
import Login from './Login'

export default function Header({ pageName }) {
    return (
        <header>
            <div className="page-name">
                <span>{pageName}</span>
            </div>
            <div className="login-name">
                <Login />
            </div>
        </header>
    )
}
