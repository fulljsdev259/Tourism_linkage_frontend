import React from 'react';
import './index.scss'

export default () => {
    return <div className="login">
        <div className="arrow-up"></div>

        <input placeholder="Email" />
        <input placeholder="Password" />
        <button className="button" >
            Login
        </button>
    </div>
}