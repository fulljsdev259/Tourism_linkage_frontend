import React from 'react';
import './home.scss'
import Pic from '../../images/picture.png'
import Logo from '../../images/logo.png'
import Menu from '../../images/icon/menu.svg'
import Printing from '../../images/icon/printing.svg'
import Printing2 from '../../images/icon/printing2.svg'
import Metal from '../../images/icon/metal.svg'
import Electricity from '../../images/icon/electicity.svg'
import furniture from '../../images/icon/furniture.svg'
import furniture2 from '../../images/icon/furniture2.svg'
import Textile from '../../images/icon/textile.svg'


import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


import Modal from 'react-modal';
import About from '../about';
import Contact from '../contact';
import Event from '../events';
import GetListed from '../getListed';
import News from '../news'
import Register from '../register';

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
Modal.setAppElement( '#root' )




const Map = ReactMapboxGl( {
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
} );

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            about: false, contact: false, event: false, getListed: false,
            news: false, register: false
        };

        this.openModal = this.openModal.bind( this );
        this.afterOpenModal = this.afterOpenModal.bind( this );
        this.closeModal = this.closeModal.bind( this );
    }

    openModal() {
        this.setState( { modalIsOpen: true } );
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState( { modalIsOpen: false } );
    }
    render() {
        return <div className="App">
            <div className="menuMobile">
                <div className="logoDiv">
                    <img className="logo" src={ Logo } />
                </div>
                <div className="itemDiv">
                    <img className="logo" src={ Menu } />
                </div>
            </div>
            <div className="menu">
                <div className="logoDiv">
                    <img className="logo" src={ Logo } />
                </div>
                <div className="itemDiv">
                    <div className="item">
                        <div className="normal" onClick={ () => {
                            this.setState( {
                                about: true, contact: false, event: false, getListed: false,
                                news: false, register: false, modalIsOpen: true
                            } )
                        } }>ABOUT</div>
                        <div className="normal" onClick={ () => {
                            this.setState( {
                                about: false, contact: false, event: false, getListed: false,
                                news: true, register: false, modalIsOpen: true
                            } )
                        } }>NEWS</div>
                        <div className="normal" onClick={ () => {
                            this.setState( {
                                about: false, contact: false, event: true, getListed: false,
                                news: false, register: false, modalIsOpen: true
                            } )
                        } }>EVENT</div>
                        <div className="normal" onClick={ () => {
                            this.setState( {
                                about: false, contact: true, event: false, getListed: false,
                                news: false, register: false, modalIsOpen: true
                            } )
                        } }>CONTACT US</div>
                        <div className="getStarted" onClick={ () => {
                            this.setState( {
                                about: false, contact: false, event: false, getListed: true,
                                news: false, register: false, modalIsOpen: true
                            } )
                        } }>GET COMPANY LISTED</div>

                    </div>
                </div>
                <div className="registerDiv"
                    onClick={ () => {
                        this.setState( {
                            about: false, contact: false, event: false, getListed: false,
                            news: false, register: true, modalIsOpen: true
                        } );


                    } }
                >REGISTER/LOGIN</div>
            </div>
            <div className="home">
                <div className="divBanner"><img className="img" src={ Pic } /></div>
                <div className="divMiddle">
                    <h3>Discover local manufactures</h3>
                    <select>
                        <option value="Western Jamica">Western Jamica</option>
                        <option value="Western Jamica">Western Jamica</option>
                    </select>
                    <div className="contentItems">
                        <div className="icon"><img src={ Printing } /></div>
                        <div className="content">Food & Agro</div>
                        <div className="value">21</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ Printing2 } /></div>
                        <div className="content">Printing & Packaging</div>
                        <div className="value">117</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ Metal } /></div>
                        <div className="content">Minerals & Metals</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ Electricity } /></div>
                        <div className="content">Electrical,Electronics & <br />automative</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ furniture } /></div>
                        <div className="content">Chemical, Cosmetics & <br />Pharmaceuticals</div>
                        <div className="value">256</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ furniture2 } /></div>
                        <div className="content">Furniture, Wooden & <br />Bedding</div>
                        <div className="value">202</div>
                    </div>
                    <div className="contentItems">
                        <div className="icon"><img src={ Textile } /></div>
                        <div className="content">Textile & Sewn</div>
                        <div className="value">202</div>
                    </div>

                    <Modal
                        isOpen={ this.state.modalIsOpen }
                        onAfterOpen={ this.afterOpenModal }
                        onRequestClose={ this.closeModal }
                        style={ this.state.register ? customStylesRegister : customStyles }
                        contentLabel="Example Modal"
                        overlayClassName="Overlay"

                    >



                        { this.state.about ? <About closeModal={ () => this.closeModal() } /> : '' }
                        { this.state.contact ? <Contact closeModal={ () => this.closeModal() } /> : '' }
                        { this.state.event ? <Event closeModal={ () => this.closeModal() } /> : '' }
                        { this.state.getListed ? <GetListed closeModal={ () => this.closeModal() } /> : '' }
                        { this.state.news ? <News closeModal={ () => this.closeModal() } /> : '' }
                        { this.state.register ? <Register closeModal={ () => this.closeModal() } /> : '' }

                    </Modal>




                </div>
                <div className="divMap">
                    <Map
                        style="mapbox://styles/mapbox/streets-v8"
                        containerStyle={ {
                            height: "100vh",
                            width: "100%"
                        } }>
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={ { "icon-image": "marker-15" } }>
                            <Feature coordinates={ [-0.481747846041145, 51.3233379650232] } />
                        </Layer>
                    </Map>
                </div>
            </div>
        </div >
    }
}