import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'

export default ( { closeModal } ) => {
    return <div className="wrapper">
        <div className="register">
            <div className="header">
                <div>
                    <span>REGISTER / LOGIN </span>
                    <hr />
                </div>
                <img src={ Close } onClick={ () => closeModal() } />
            </div>
            <div className="content">
                <div className="heading">Welcome to TLN</div>
            </div>
        </div>
    </div>
}