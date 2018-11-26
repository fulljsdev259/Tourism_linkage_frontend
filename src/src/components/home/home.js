import React from 'react';
import './home.scss'
import Pic from '../../images/picture.png'
import Logo from '../../images/logo.png'
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '0%',
        left: '0%',
        right: '0%',
        bottom: '0%',
        borderTopLeftRadius: 30,

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
            modalIsOpen: false
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
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState( { modalIsOpen: false } );
    }
    render() {
        return <div className="App">
            <div className="menu">
                <div className="logoDiv">
                    <img className="logo" src={ Logo } />
                </div>
                <div className="itemDiv">
                    <div className="item">
                        <div className="normal">ABOUT</div>
                        <div className="normal">NEWS</div>
                        <div className="normal">EVENT</div>
                        <div className="normal">CONTACT US</div>
                        <div className="getStarted">GET COMPANY LISTED</div>

                    </div>
                </div>
                <div className="registerDiv">REGISTER/LOGIN</div>
            </div>
            <div className="home">
                <div className="divBanner"><img className="img" src={ Pic } /></div>
                <div className="divMiddle">
                    <h3>Discover local manufactures</h3>

                    <button onClick={ this.openModal }>Open Modal</button>
                    <Modal
                        isOpen={ this.state.modalIsOpen }
                        onAfterOpen={ this.afterOpenModal }
                        onRequestClose={ this.closeModal }
                        style={ customStyles }
                        contentLabel="Example Modal"
                        overlayClassName="Overlay"
                    >

                        <h2 ref={ subtitle => this.subtitle = subtitle }>Hello</h2>
                        <button onClick={ this.closeModal }>close</button>
                        <div>I am a modal</div>
                        <form>
                            <input />
                            <button>tab navigation</button>
                            <button>stays</button>
                            <button>inside</button>
                            <button>the modal</button>
                        </form>
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
        </div>
    }
}