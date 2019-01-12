import React from 'react';
import Close from '../../images/icon/cross.svg';
import crossWhite from '../../images/icon/cross-white.svg';
import './index.scss'
import Register1 from './signUp';
import Login from './LogIn';

export default class Register extends React.Component {

    constructor() {
        super();
        this.state = {
            register: false,
            login: true,
            registerationSuccess: false
        }
    }

    onSuccessRegister = () => {
        this.setState({
            registerationSuccess: true,
            login: true,
            register: false
        })
    }

    render() {

        const { closeModal } = this.props;
        return <div className="wrapper">
            <div className="register">
                <div className="header">
                    <div>
                        <span>REGISTER / LOGIN </span>
                        <hr />
                    </div>
                    <img src={ crossWhite } onClick={ () => closeModal() } />
                </div>
                <div className="content">
                    {
                        this.state.registerationSuccess ? <div className="register-success-message"> You have Register Successfully. You can login now!</div> : null
                    }
                    <div className="heading">Welcome to TLN</div>
                    
                    <div className="subHead">
                        <span onClick={ () => this.setState( { login: false, register: true } ) }
                            style={ { color: this.state.register ? '#fff' : "#A4AFD0", cursor:'pointer' } }>Register</span>
                        <span onClick={ () => this.setState( { login: true, register: false } ) }
                            style={ { color: this.state.login ? '#fff' : "#A4AFD0", cursor:'pointer' } } >Login</span>
                    </div>

                    <div>
                        { this.state.login ? <Login closeModal={ closeModal } /> : '' }
                        { this.state.register ? <Register1 closeModal={ closeModal } onSuccessRegister={this.onSuccessRegister} /> : '' }

                    </div>
                </div>
            </div>
        </div>
    }
}