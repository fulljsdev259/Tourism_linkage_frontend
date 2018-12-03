import React from 'react';
import './index.scss'

export default () => {
    return <div className="signup">
        <div className="arrow-up"></div>

        <input placeholder="Full Name" />
        <input placeholder="Email" />
        <input placeholder="Password" />

        <input placeholder="Retype password" />
        <button className="button" >
            Login
        </button>
    </div>
}
