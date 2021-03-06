import React from 'react';
import './header.scss'
import Logo from '../../images/Tourism_Linkages_Network_Logo.gif'
import Menu from '../../images/icon/menu.svg'
import profile from '../../images/oval.png'
import Close from '../../images/icon/cross.svg';
import { Link, withRouter } from 'react-router-dom';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { connect } from 'react-redux';
import { receiveLogout } from '../../action/auth'
import Loader from '../loader';



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

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openClass: '',
            auth: false,
            showLoading: false,
        }
        this.ToggleBody = () => {
            //this.props.setMobileMenu();
            var currentClass = document.getElementsByTagName('body')[0];
            var isAlreadyOpened = currentClass.classList.contains('open');

            if (!isAlreadyOpened) {
                currentClass.classList.add('open');
            }
            else {
                currentClass.classList.remove('open');
            }
        }
    }
    componentWillReceiveProps(nextProps) {
        const oThis = this;
        if (oThis.props.authenticated !== nextProps.authenticated)  // Check if it's a new user, you can also use some unique property, like the ID
        {
            this.setState({ auth: nextProps.authenticated })
        }
    }

    render() {
        const oThis = this;
        let { loggedUserData } = this.props;

        let linkDashboard = "/admin";
        if (loggedUserData && loggedUserData.role !== 'admin') {
            linkDashboard = "/user";
        }

        return <div style={{ borderBottom: "1px solid #ebebeb" }} className="fix-header">
            {this.state.apiCall ? <Loader /> : ''}
            <div className="menuMobile">
                <Link to="/">
                    <div className="logoDiv">
                        <img className="logo" src={Logo} />
                    </div>
                </Link>
                <div className="itemDiv">
                    {
                        oThis.props.authenticated ?
                            <span style={{ marginRight: "66px", marginTop: "9px" }}>
                                {loggedUserData && loggedUserData.name ? loggedUserData.name + ', ' : null}

                                <br />
                                <span onClick={() => {
                                    this.setState({
                                        apiCall: true
                                    })
                                    oThis.props.modalStateHandler(false, false, false, false, false, false, false)
                                    localStorage.removeItem('token')
                                    localStorage.removeItem('token_user')
                                    oThis.props.receiveLogout()

                                    oThis.props.history.push('/')
                                    setTimeout(() => {
                                        this.setState({
                                            apiCall: false
                                        })
                                    }, 1000)

                                }}>LOGOUT</span>
                            </span>
                            :
                            null

                    }

                    <button className="menu-toggle" onClick={this.ToggleBody}></button>
                    <nav>
                        <Link to="/"> <img onClick={this.ToggleBody} className="logo" src={Logo} /></Link>

                        <ul className="menu">

                            <li data-text="ABOUT" onClick={() => {
                                oThis.props.modalStateHandler(true, false, false, false, false, false, true)
                            }}>ABOUT</li>
                            <li data-text="CONTACT" onClick={() => {
                                oThis.props.modalStateHandler(false, true, false, false, false, false, true)
                            }}>CONTACT US</li>


                            <li data-text="Event" onClick={() => {
                                oThis.props.modalStateHandler(false, false, true, false, false, false, true)
                            }}>EVENTS</li>

                            <li data-text="Christmas in July" onClick={() => {
                                oThis.props.modalStateHandler(false, false, false, false, false, false, true, true)
                            }}>CHRISTMAS IN JULY</li>

                            <li style={{
                                marginTop: "10px"
                            }} data-text="GET COMPANY LISTED" onClick={() => {
                                oThis.props.modalStateHandler(false, false, false, true, false, false, true)
                            }}><span className="blueBtn">GET COMPANY LISTED </span></li>

                            {
                                !oThis.props.authenticated ?
                                    <li data-text="GET COMPANY LISTED" className="registerLi" onClick={() => {
                                        this.ToggleBody()
                                        oThis.props.modalStateHandler(false, false, false, false, false, true, true)
                                    }}>
                                        <div className="lower-section" >
                                            <div className="registerDiv"

                                            >REGISTER / LOGIN
                                         </div>
                                        </div>
                                    </li>
                                    :
                                    <li data-text="GET COMPANY LISTED" className="registerLi">

                                    </li>
                            }

                        </ul>
                    </nav>
                </div>
            </div>
            {
                <div className={this.props.mobileMenu ? "menuItemMobile" : "menuItemMobileNone"}>
                    <div className="headerMobileMenu">
                        <div></div>
                        <img onClick={this.props.setMobileMenu} src={Close} />
                    </div>
                    <div className="contentMobileMenu">
                        <div className="upper-section">
                            <div className="item" onClick={() => {
                                oThis.props.modalStateHandler(true, false, false, false, false, false, true)
                            }}><a>ABOUT</a></div>

                            <div className="item">Events</div>

                            <div className="item" onClick={() => {
                                oThis.props.modalStateHandler(false, true, false, false, false, false, true)
                            }}><a>CONTACT US</a></div>
                            <div className="getStarted" onClick={() => {

                                oThis.props.modalStateHandler(false, false, false, true, false, false, true)
                            }}><a>GET COMPANY LISTED</a></div>
                        </div>


                    </div>
                    <div className="lower-section" >
                        <div className="registerDiv"
                            onClick={() => {
                                oThis.props.modalStateHandler(false, false, false, false, false, true, true)
                            }}
                        >REGISTER / LOGIN</div>
                    </div>
                </div>
            }
            <div className="menu">
                <Link to="/"> <div className="logoDiv">
                    <img className="logo" src={Logo} />
                </div>
                </Link>
                <div className="itemDiv">
                    <div className="item">
                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(true, false, false, false, false, false, true)
                        }}><a>ABOUT</a></div>

                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false, false, true, false, false, false, true)
                        }}><a>EVENTS</a></div>
                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false, true, false, false, false, false, true)
                        }}><a>CONTACT US</a></div>

                        <div className="normal" onClick={() => {
                            oThis.props.modalStateHandler(false, false, false, false, false, false, true, true)
                        }}><a>CHRISTMAS IN JULY</a></div>

                        <div className="getStarted" onClick={() => {

                            oThis.props.modalStateHandler(false, false, false, true, false, false, true)
                        }}><a>GET COMPANY LISTED</a></div>

                    </div>
                </div>
                {oThis.props.authenticated ?


                    <div className="registerDiv">

                        <span className="user-name" >
                            <span style={{ marginRight: '20px' }}>
                                <Link to={linkDashboard}>
                                    My Dashboard
                            </Link>
                            </span>

                            {loggedUserData && loggedUserData.name ? loggedUserData.name + ', ' : null}
                            <a onClick={() => {
                                this.setState({
                                    apiCall: true
                                })
                                oThis.props.modalStateHandler(false, false, false, false, false, false, false)
                                localStorage.removeItem('token')
                                localStorage.removeItem('token_user')
                                oThis.props.receiveLogout()

                                oThis.props.history.push('/')
                                setTimeout(() => {
                                    this.setState({
                                        apiCall: false
                                    })
                                }, 1000)

                            }}>LOGOUT</a>
                        </span>
                    </div>

                    :
                    <div className="registerDiv"
                        onClick={() => {
                            oThis.props.modalStateHandler(false, false, false, false, false, true, true)
                        }}
                    ><a>REGISTER / LOGIN</a>
                    </div>
                }

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



function mapStateToProps(state) {
    return { authenticated: state.auth.isAuthenticated, loggedUserData: state.auth.loggedUserData }
}


export default connect(mapStateToProps, { receiveLogout })(withRouter(Header))