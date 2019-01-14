import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
export default ( { closeModal } ) => {
    return <div className="about">
        <div className="header">
            <div>
                <span>Christmas in July</span>
                <hr />
            </div>
            <img src={ Close } onClick={ () => closeModal() } />
        </div>
        <div className="publications">
            <iframe
                className="iframe"
                src="https://e.issuu.com/anonymous-embed.html?u=jbdc&d=christmas_in_july_2018_issuu_versio"
                frameBorder="0" 
                allowFullScreen="true"
            >
            </iframe>
        </div>

    </div>
}
