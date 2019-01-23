import React from 'react';
import Modal from 'react-modal';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import ItemDetail from '../itemDetail';
import Header from '../header';
import Footer from '../footer';
import Index from '../index/index';
import { Route, Switch } from 'react-router';
import About from '../about';
import Contact from '../contact';
import Event from '../events';
import GetListed from '../getListed';
import News from '../news'
import Register from '../register';
import MobileMap from '../mobileMap';
import Admin from '../admin/adminDash';
import User from '../user/userDash';
import { withRouter } from 'react-router'
import requireAuth from '../../config/require_auth';
import requireAdminAuth from '../../config/require_admin_auth';
import { connect } from 'react-redux';
import Loader from '../loader';
import Publications from '../publications';

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

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            modalIsOpen: false,
            about: false, contact: false, event: false, getListed: false,
            news: false, register: false, mobileMenu: false, showListing: false, showMap: true, width: 0,
            height: 0,
            windowResized: false, loader: false,
            isMobileScreen: false,
            modalPublications: false
        };

        this.openModal = this.openModal.bind( this );
        this.afterOpenModal = this.afterOpenModal.bind( this );
        this.closeModal = this.closeModal.bind( this );
        this.handleModalState = this.handleModalState.bind( this );
        this.toggleMobileMenu = this.toggleMobileMenu.bind( this );
        this.toggleListing = this.toggleListing.bind( this );
        this.toggleMap = this.toggleMap.bind( this );
    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }
    resize() {
        if( window.innerWidth < 576 ){
            this.setState({
                isMobileScreen: true,
                showMap: false,
                showListing: true
            })    
        } else {
            this.setState({
                isMobileScreen: false,
                showMap: true,
                showListing: false
            })    
        }
    }

    toggleMobileMenu = () => {
        this.setState( { mobileMenu: !this.state.mobileMenu } )
    }

    openModal() {
        this.setState( { modalIsOpen: true } );
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        //        this.subtitle.style.color = '#f00';
    }

    handleModalState( about, contact, event, getListed, news, register, modalIsOpen = true, modalPublications = false ) {
        this.setState( {
            about, contact, event, getListed,
            news, register, modalIsOpen, modalPublications
        } )
    }

    closeModal() {
        this.setState( { modalIsOpen: false } );
    }
    toggleListing = () => {
        this.setState( {
            showListing: !this.state.showListing
        } );
    }
    toggleMap = () => {
        this.setState( {
            showMap: this.state.showMap
        } )
    }
    toggleLoader = ( value ) => {
        this.setState( {
            loader: value
        } )
    }
    render() {
        const { match } = this.props;
        return (
            <div className="App">
                <Header authenticated={ this.props.authenticated } { ...this.state } setMobileMenu={ this.toggleMobileMenu } modalStateHandler={ this.handleModalState } />
                <div className="body-top">
                <Switch>
                    <Route exact path="/" render={ props => ( <Index toggleListing={ this.toggleListing } toggleMap={ this.toggleMap } { ...this.state } /> ) } />
                    <Route { ...this.state } path="/supplier/:name" render={ props => ( <ItemDetail { ...this.state } modalStateHandler={ this.handleModalState } /> ) }  />
                    <Route path="/mobilemap" render={ props => ( <MobileMap toggleListing={ this.toggleListing } toggleMap={ this.toggleMap } { ...this.state } /> ) } />
                    <Route path="/admin" component={ requireAdminAuth( Admin ) } />
                    <Route path="/user" component={ requireAuth( User ) } />


                </Switch>
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
                    { this.state.modalPublications ? <Publications closeModal={ () => this.closeModal() } /> : '' }


                </Modal>
                </div>
                <Footer />
            </div>
        );
    }
}


function mapStateToProps( state ) {
    return { authenticated: state.auth.isAuthenticated }
}


export default withRouter( connect( mapStateToProps, null )( Home ) );