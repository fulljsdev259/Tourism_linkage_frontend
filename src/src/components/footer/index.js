import React from 'react';
import './footer.scss'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import Close from '../../images/icon/cross.svg';
import footer1 from '../../images/footer1.png'
import footer2 from '../../images/footer2.png'
import footer3 from '../../images/footer3.png'
import footer4 from '../../images/footer4.png'

export default class Footer extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        const oThis = this;
        return <footer className="footer">
            <div className="img-row">
                <img src={footer1} />
                <img src={footer2} />
                <img src={footer3} />
                <img src={footer4} />
            </div>
            <span>Copyright © 2018. Developed By Jamaica Ministry of Tourism & Powered By The Jamaica Tourism Linkages Network</span>
        </footer>
    }
}