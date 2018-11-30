import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
import Img from '../../images/photo.png'

export default ( { closeModal } ) => {
    return <div className="news">
        <div className="header">
            <div>
                <span>NEWS</span>
                <hr />
            </div>
            <img src={ Close } onClick={ () => closeModal() } />
        </div>
        <div className="content">
            <div className="heading">
                Jamaica Tourism Minister says Canadian travel advisory “routine”, no need to worry
            </div>
            <div className="date">26 November 2018</div>
            <p>KINGSTON, Jamaica, Friday June 24, 2016 – In response to concerns raised about the latest travel advisory issued by the Canadian government on Jamaica, Minister of Tourism Edmund Bartlett has contended that the move was routine and is not expected to significantly impact visitor arrivals from Canada, as instances of violence against tourists are very low.
            <span className="link">Read more</span></p>
            <hr />
            <div className="heading">
                Jamaica Tourism Minister says Canadian travel advisory “routine”, no need to worry
            </div>
            <div className="date">26 November 2018</div>
            <img src={ Img } />
            <p>KINGSTON, Jamaica, Friday June 24, 2016 – In response to concerns raised about the latest travel advisory issued by the Canadian government on Jamaica, Minister of Tourism Edmund Bartlett has contended that the move was routine and is not expected to significantly impact visitor arrivals from Canada, as instances of violence against tourists are very low.
            <span className="link">Read more</span></p>
        </div>

    </div>

}