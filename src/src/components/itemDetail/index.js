import React from 'react';
import ContactSectionPic from '../../images/photo.png'
import ContactSectionPic1 from '../../images/photo1.png'
import ContactSectionPic2 from '../../images/photo2.png'
import ContactSectionPic3 from '../../images/photo3.png'
import ContactSectionPic4 from '../../images/photo4.png'
import location from '../../images/icon/location.svg'
import phone from '../../images/icon/phone.svg'
import rating from '../../images/icon/rating.svg'
import arrowBack from '../../images/icon/arrowback.svg'
import fav from '../../images/icon/favorites.svg'
import share from '../../images/icon/share.svg'
import furniture3 from '../../images/icon/furniture3.svg'
import facebook from '../../images/Bitmap.png'
import tweet from '../../images/tweet.png'
import Textile from '../../images/icon/textile.svg'
import Close from '../../images/icon/cross.svg';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

import Modal from 'react-modal';
import About from '../about';
import Contact from '../contact';
import Event from '../events';
import GetListed from '../getListed';
import News from '../news'
import Register from '../register';
import './detail.scss'


import { withRouter } from 'react-router-dom';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`query singleParty($name:String)
{
    singleParty(name:$name){
        name
        region
        categories
        latitude
        longitude
        tags
        address
        phoneNumber
    }
}
`



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

class ItemDetail extends React.Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            about: false, contact: false, event: false, getListed: false,
            news: false, register: false, itemDetail: false, mobileMenu: false
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
        const { data, history } = this.props;
        if ( data.loading ) {
            return <span>loading</span>
        }
        console.log( data )

        return <div>
            <div className="detail">
                <div className="itemDetail-Map">
                    <Map
                        style="mapbox://styles/mapbox/streets-v8"
                        containerStyle={ {
                            height: "100%",
                            width: "100%"
                        } } >
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={ { "icon-image": "marker-15" } }>
                            <Feature coordinates={ [-0.481747846041145, 51.3233379650232] } />
                        </Layer>
                    </Map>
                </div>
                <div className="item-detail">
                    <div className="back-arrow" onClick={ () => history.push( '/' ) }>
                        <img src={ arrowBack } />
                    </div>
                    <div className="content-section">
                        <div className="item-info">
                            <span className="back-link" onClick={ () => history.push( '/' ) }>Back to list</span>

                            <h3>{ data.singleParty.name }</h3>
                            <div className="item-reviews">
                                <span>Fabric</span>
                                <span className="seperator"></span>
                                <img src={ rating }></img>
                                <span>2 Reviews</span>
                            </div>
                            <div className="item-category ">
                                <img src={ furniture3 } />
                                <span>{ data.singleParty.categories }</span>
                            </div>
                            <div className="tags">
                                {
                                    data.singleParty.tags.split( ',' ).map( ( data, i ) => {
                                        if ( i < 4 ) {

                                            return <span>{ data }</span>
                                        }
                                    } )
                                }
                            </div>
                            <div className="item-description">
                                <p>
                                    Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula odio. Vestibulum interdum vestibulum felis ac molestie. Praesent aliquet quam et libero dictum, vitae dignissim leo eleifend. In in turpis turpis. Quisque justo turpis, vestibulum non enim nec, tempor mollis mi. Sed vel tristique quam.
                            </p>
                            </div>
                            <div className="social-icons">
                                <div className="left">
                                    <img src={ facebook } />
                                    <img src={ tweet } />
                                </div>
                                <div className="right">
                                    <img src={ fav } />
                                    <img src={ share } />
                                </div>
                            </div>
                        </div>
                        <div className="hr">
                        </div>
                        <div className="review-section">
                            <h3>Reviews</h3>
                            <div className="user">
                                <span>Sandra</span>
                                <img src={ rating }></img>
                            </div>
                            <div className="user-comments" >
                                <p>Exelent! We often order shirts for our hotel stuff here. Very good quality. Highly recommended. </p>
                            </div>
                            <div className="user">
                                <span>Viktoria</span>
                                <img src={ rating }></img>
                            </div>
                            <div className="user-comments" >
                                <p>Love them. </p>
                            </div>
                            <div className="Leave-review">
                                <a href="#">Leave review</a>
                            </div>

                        </div>


                    </div>

                </div>
                <div className="itemDetail-contact">
                    <div className="contact-section">

                        <h4>
                            Contacts
                        </h4>

                        <div className="item-contact">
                            <img src={ location } />
                            <span>{ data.singleParty.address }</span>
                        </div>
                        <div className="item-contact">
                            <img src={ phone } />
                            <span>{ data.singleParty.phoneNumber }</span>
                        </div>
                    </div>
                    <div className="open-hour">
                        <h4>Open Hours</h4>
                        <div className="schedule">
                            <span className="day">Monday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Tuesday</span>
                            <span className="time">10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Wednesday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Thursday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day">Friday</span>
                            <span>10:00 a.m. - 5:00 p.m. </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Saturday</span>
                            <span>Closed </span>
                        </div>
                        <div className="schedule">
                            <span className="day"> Sunday</span>
                            <span>Closed </span>
                        </div>
                    </div>
                    {/* <div className="image-section">
                        <div>
                            <img className="img" src={ContactSectionPic1} />
                        </div>
                        <div className="image-row">
                            <img className="image" src={ContactSectionPic2} />
                            <img className="image" src={ContactSectionPic3} />
                            <img className="image" src={ContactSectionPic4} />
                            <img className="image" src={ContactSectionPic} />

                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    }
}



export default withRouter( graphql( query, {
    options: ( { match } ) => ( { variables: { name: match.params.name } } )
} )( ItemDetail ) )