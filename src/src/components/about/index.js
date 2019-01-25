import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
import About1 from '../../images/about1.png';
import About2 from '../../images/about2.png';
export default ( { closeModal } ) => {
    return <div className="about">
        <div className="header">
            <div>
                <span>ABOUT TOURISM LINKAGES NETWORK</span>
                <hr />
            </div>
            <img src={ Close } onClick={ () => closeModal() } />
        </div>
        <div className="flex-container">
            <div>
                <img src={About1}/>        
            </div>
            <div>
                <img src={About2}/>        
            </div>
        </div>
        
        <div className="content">
            <div className="heading">Background</div>
            <p>
                As priority policy, the Ministry of Tourism has targeted the development and strengthening of sustainable linkages between the tourism sector and other productive sectors of the economy — such as agriculture, manufacturing and entertainment — to which it is closely linked. The Tourism Linkages Network which was approved by Cabinet decision and established in June 2013 to fulfill the ministry’s mandate to create and sustain linkages throughout productive industries. The Network is funded by the Ministry of Tourism’s Tourism Enhancement Fund.
            </p>
            <div className="heading">Objectives</div>
            <p>
                The primary objective of the Tourism Linkages Network is to increase the consumption of goods and services that can be competitively sourced locally. It also aims to create employment while generating and retaining the country’s foreign exchange earning potential.
            </p>
            <div className="subHeading">The Network also aims to</div>
            <ul>
                <li>Support, facilitate and monitor the development of efficient marketing and distribution systems for local products and services required by tourism entities.</li>

                <li>Increase market awareness and intelligence of the targeted sectors through research and analysis.</li>
                <li>Facilitate and monitor the development of more effective and efficient information and communication systems to support relationship building and trade between local suppliers of goods and services, and tourism entities.</li>
                <li>Harness and harmonize existing mechanisms and initiatives being undertaken by business associations, ministries and agencies in an effort to improve the business environment for buyers and suppliers.</li>
                <li>Contribute and provide support to the development of viable economic and fiscal policies across industries and sectors to strengthen and facilitate linkages.</li>
                <li>Create opportunities for deeper facilitation of linkages between the Entertainment and Tourism sectors.</li>
            </ul>

        </div>

    </div>
}
