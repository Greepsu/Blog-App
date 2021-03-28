import React from 'react'
import '../styles/Header.scss'
import Login from './Login'
import Logout from './Logout'

export default function Header({ pageName }) {
    return (
        <header>
            <div className="page-name">
                <span>{pageName}</span>
            </div>
            <div className="login-name">
                <Login />
                <Logout />
            </div>
        </header>
    )
}
