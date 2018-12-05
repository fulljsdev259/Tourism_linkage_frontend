import React from 'react';
import Modal from 'react-modal';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import ItemDetail from '../itemDetail';
import Header from '../header';
import Index from '../index/index';
import { Route, Switch } from 'react-router';
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
Modal.setAppElement('#root')

const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            about: false, contact: false, event: false, getListed: false,
            news: false, register: false, mobileMenu: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleModalState = this.handleModalState.bind(this);
    }
    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //        this.subtitle.style.color = '#f00';
    }

    handleModalState(about, contact, event, getListed, news, register, modalIsOpen = true) {
        this.setState({
            about, contact, event, getListed,
            news, register, modalIsOpen
        })
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }
    render() {
        return (
            <div className="App">
                <Header {...this.state} modalStateHandler={this.handleModalState} />
                <Switch>
                    <Route {...this.state} exact path="/" component={Index} />
                    <Route {...this.state} path="/detail" component={ItemDetail} />
                </Switch>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.state.register ? customStylesRegister : customStyles}
                    contentLabel="Example Modal"
                    overlayClassName="Overlay"

                >

                    {this.state.about ? <About closeModal={() => this.closeModal()} /> : ''}
                    {this.state.contact ? <Contact closeModal={() => this.closeModal()} /> : ''}
                    {this.state.event ? <Event closeModal={() => this.closeModal()} /> : ''}
                    {this.state.getListed ? <GetListed closeModal={() => this.closeModal()} /> : ''}
                    {this.state.news ? <News closeModal={() => this.closeModal()} /> : ''}
                    {this.state.register ? <Register closeModal={() => this.closeModal()} /> : ''}

                </Modal>
            </div>
        );
    }
}