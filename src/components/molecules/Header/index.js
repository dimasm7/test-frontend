import React from 'react'
import { IcLogo } from '../../../asset'
import './styles.css'

function Header() {
    return (
        <div className="container">
            <div className="container-logo">
                <div className="wrapper-logo">
                    <img className="logo" src={IcLogo}></img>
                </div>
            </div>
            <p className="text">You don't have an account yet, please create a new account </p>
        </div>
    )
}

export default Header
