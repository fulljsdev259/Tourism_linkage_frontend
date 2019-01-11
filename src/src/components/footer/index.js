import React from 'react';
import './footer.scss'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import Close from '../../images/icon/cross.svg';
import footer1 from '../../images/footer1.png'
import footer2 from '../../images/footer2.png'
import footer3 from '../../images/footer3.png'
import footer4 from '../../images/footer4.png'
import footer5 from '../../images/footer5.png'
import fb from '../../images/icon/fb.svg'
import twitter from '../../images/icon/twitter.svg'
import insta from '../../images/icon/insta.svg'
export default class Footer extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        const oThis = this;
        let d = new Date();
        let currentYear = d.getFullYear();
        return <footer className="footer">
            <div>
                <a href="https://www.mot.gov.jm/" target="_BLANK">
                    <img src={footer1} />
                </a>
                <a href="https://www.instagram.com/thejmea_/" target="_BLANK">
                    <img src={footer2} />
                </a>
                <a href="https://www.jbdc.net/" target="_BLANK">
                    <img src={footer3} />
                </a>
                <a href="https://www.mot.gov.jm/agency/tourism-enhancement-fund" target="_BLANK">
                    <img src={footer4} />
                </a>
                <a href="http://www.jhta.org/" target="_BLANK">
                    <img src={footer5} />
                </a>
            </div>
            <div className="copyright">
                <span>Copyright © {currentYear}. Developed By Jamaica Ministry of Tourism & Powered By The Jamaica Tourism Linkages Network</span>
                <div className="social-icons">
                    <a href="https://www.facebook.com/tefjamaica/" target="_BLANK">
                        <img src={fb} />
                    </a>
                    {/*
                        <a href="https://www.mot.gov.jm/" target="_BLANK">
                            <img src={twitter} />
                        </a>
                    */}
                    <a href="https://www.instagram.com/tourismenhancementfundja/" target="_BLANK">
                        <img src={insta} />
                    </a>
                </div>
            </div>
        </footer>
    }
}