import React from 'react';
import './index.scss'

export default () => {
    return <div className="login">
        <div className="arrow-up"></div>

        <input placeholder="Email" />
        <input placeholder="Password" />

        <div className="remember-me">
            <input type="checkbox" id="RememberMe" name="RememberMe" value="Remember Me" />
            <label htmlFor="RememberMe">Remember Me</label>
        </div>
        <div className="remeber-section">
            <button className="button" >
                Login
        </button>

            <span className="forgot-password">Forgot Password?</span>
        </div>
    </div>
}