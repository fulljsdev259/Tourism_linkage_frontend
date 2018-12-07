import React from 'react';
import './header.scss'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import profile from '../../images/oval.png'
import Close from '../../images/icon/cross.svg';

import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


import Modal from 'react-modal';
import About from '../about';
import Contact from '../contact';
import Event from '../events';
import GetListed from '../getListed';
import News from '../news'
import Register from '../register';
import ItemDetail from '../itemDetail';
import Router from 'react-router';
import Home from '../home';
const customStyles = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        borderTopLeftRadius: 30,

        border: 'none',
        marginLeft: '35%',
        transform: 'translate(0%, 0%)'
    }
};

const customStylesRegister = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        border: 'none',
        borderTopLeftRadius: 30,
        backgroundColor: '#5165FF',

        marginLeft: '35%',
        transform: 'translate(0%, 0%)'
    }
};
// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export default class Header extends React.Component {
    constructor(props) {
        super(props);


    }


    render() {
        const oThis = this;
        return <div style={{ borderBottom: "1px solid #ebebeb" }}>
            <div className="menuMobile">
                <div className="logoDiv">
                    <img className="logo" src={Logo} />
                </div>
                <div className="itemDiv">
                    <img onClick={this.props.setMobileMenu} className="logo" src={Menu} />
                </div>
            </div>
            {
                <div className={this.props.mobileMenu ? "menuItemMobile" : "menuItemMobileNone"}>
                    <div className="headerMobileMenu">
                        <div></div>
                        <img onClick={this.props.setMobileMenu} src={Close} />
                    </div>
                    <div className="contentMobileMenu">
                        <div className="item">About</div>
                        {/* <div className="item">News</div>
                        <div className="item">Events</div> */}
                        <div className="item">Contact Us</div>
                        <div className="getStarted">About</div>

                    </div>

                </div>
            }
            <div className="menu">
                <div className="logoDiv">
                    <img className="logo" src={Logo} />
                </div>
                <div className="itemDiv">
                    <div className="item">
                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(true, false, false, false, false, false, true)
                        }}>ABOUT</div>
                        {/* <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false,false,false,false,true,false,true)
                        }}>NEWS</div>
                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false,false,true,false,false,false,true)
                        }}>EVENT</div> */}
                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false, true, false, false, false, false, true)
                        }}>CONTACT US</div>
                        <div className="getStarted" onClick={() => {

                            oThis.props.modalStateHandler(false, false, false, true, false, false, true)
                        }}>GET COMPANY LISTED</div>

                    </div>
                </div>
                <div className="registerDiv"
                    onClick={() => {
                        oThis.props.modalStateHandler(false, false, false, false, false, true, true)
                    }}
                >REGISTER/LOGIN</div>
                {/* <div className="profileDiv">
                    <div class="dropdown">
                    <img  class="dropbtn" src={profile}/>
                        <div class="dropdown-content">
                            <a href="#">Link 1</a>
                            <a href="#">Link 2</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>
                </div> */}
            </div>

        </div >
    }
}