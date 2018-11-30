import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'

export default ( { closeModal } ) => {
    return <div className="contact">
        <div className="header">
            <div>
                <span>CONTACT US</span>
                <hr />
            </div>
            <img src={ Close } onClick={ () => closeModal() } />
        </div>
        <div className="content">
            <div className="contact1">
                <div className="heading">
                    Tourism Linkages Network
                </div>
                <p>
                    Ministry of Tourism<br />
                    Jamaica Tourism Centre<br />
                    64 Knutsford Boulevard<br />
                    Kingston 5<br />
                    Jamaica W.I.<br />
                </p>
                <p style={ { marginTop: 40 } }>
                    (876) 920-4926-30<br />
                    (876) 920-4944<br />
                    info@tourismlinkages.net<br />
                </p>

            </div>
            <div className="input">
                <div className="heading">
                    Leave us message
                </div>
                <textarea className="inputBox" />
                <button className="button">Send</button>
            </div>
        </div>
    </div>
}