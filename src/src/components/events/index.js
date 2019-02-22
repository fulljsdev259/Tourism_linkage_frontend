import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
import Event1 from '../../images/Picture5.png';
import About2 from '../../images/about2.png';
export default ({ closeModal }) => {
    return <div className="event">
        <div className="header">
            <div>
                <span>EVENTS</span>
                <hr />
            </div>
            <img src={Close} onClick={() => closeModal()} />
        </div>


        <div className="content">
            <div className="heading">The Tourism Linkages Speed Networking</div>

            <div className="subHeading">March 20th, 2019</div>
            <div className="subHeading">8:15am - 5:00pm</div>
            <div className="subHeading">Monetgo Bay Convention Centre, Rose Hall, Montego Bay.</div>
            <div className="flex-container">

                <div>
                    <img src={About2} />
                </div>
            </div>
            <p>This event will give local suppliers of goods and services the opportunity to have one-on-one,
                 15 minute sessions with hotel purchasing managers and attraction managers to sell their product/service.
            </p>
            <p>
                REGISTRATION DEADLINE: FRIDAY, FEBRUARY 22nd, 2019.<br />
                For registration and payment, contact the The Jamaica Manufacturers and Exporters Association at <a href="tel:1-876-922-8880">1-876-922-8880</a>
            </p>


            <hr />


            <div className="heading">Christmas In July 2018 Recap</div>
            <div className="subHeading">July 19th 2018</div>
            <div className="subHeading">9:am - 5:00pm</div>
            <div className="subHeading">The Jamaica Pegasus Hotel, New Kingston</div>

            <div className="videoWrapper">

                <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/93HFWdrnzvg"
                    frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>

            </div>
            <p>The event was hosted by the Tourism Linkages Network and its partners Jamaica Promotions Corporation (JAMPRO), Jamaica Manufacturers and Exporters’
Association (JMEA), Jamaica Business Development Corporation (JBDC), and Jamaica Hotel and Tourist Association (JHTA).
<br />
                The primary objective is to increase the consumption of goods and services that can be competitively sourced locally. It also aims to create employment while
                generating and retaining the country’s foreign exchange earning potential.

            </p>



        </div>

    </div >
}
