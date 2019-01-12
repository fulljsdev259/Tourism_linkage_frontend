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
import Printing from '../../images/icon/printing.svg'
import Printing2 from '../../images/icon/printing2.svg'
import Metal from '../../images/icon/metal.svg'
import arrowDown from '../../images/icon/white.svg'
import Electricity from '../../images/icon/electicity.svg'
import chemical from '../../images/icon/furniture3.svg'
import furniture2 from '../../images/icon/furniture.svg'
import furniture from '../../images/icon/furniture.svg'
import Textile from '../../images/icon/textile.svg'
import Close from '../../images/icon/cross.svg';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import { url } from '../../config/constant'

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


import { Field, reset, reduxForm } from 'redux-form';
import { renderField, renderFieldTextArea } from '../admin/inputComponent'

import { Modal as Modal1, Button } from 'antd';

import StarRatingComponent from 'react-star-rating-component';
import { connect } from 'react-redux';


const mutation = gql`mutation comment(
  $rating:Int
    $comment:String
   
    $partyId:String
){
        comment(
          rating:$rating,
    comment:$comment,
    partyId:$partyId

        
        ){
           comment{
                name
            }
            errors

                
            
        }
    }

`


const form = reduxForm( {
    form: 'addRating',
    enableReinitialize: true,
    //validate

} )



export const renderFieldRating = ( { input: { onChange, value }, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', maxWidth: 70, flexDirection: 'column' } }>

        <StarRatingComponent
            name="rate2"
            editing={ true }
            //renderStarIcon={ () => <span></span> }
            starCount={ 5 }
            value={ value ? value : 0 }
            onStarClick={ ( nextValue, prevValue, name ) => {
                onChange( nextValue )
            }
            }
        />

        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)


const query = gql`query singleParty($name:String)
{
    singleParty(name:$name){
        _id
        name
        region
        categories
        latitude
        longitude
        description
        tags
        address
        comment{
            name
            rating
            comment
        }
        photo{
            filename
        }
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
            news: false, register: false, itemDetail: false, mobileMenu: false,
            leaveReview: false
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
        const { data, history, handleSubmit, mutate, authenticated } = this.props;
        if ( data.loading ) {
            return <span>loading</span>
        }
        const partyId = data.singleParty._id
        return <div>
            <div className="detail">
                <div className="itemDetail-Map">
                    <Map
                        center={ [data.singleParty.longitude, data.singleParty.latitude] }
                        zoom={ [9] }
                        style="mapbox://styles/mapbox/streets-v8"
                        containerStyle={ {
                            height: "100%",
                            width: "100%"
                        } } >
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={ { "icon-image": "marker-15" } }>
                            <Feature coordinates={ [data.singleParty.longitude, data.singleParty.latitude] } />
                        </Layer>
                    </Map>
                </div>
                <div className="item-detail">
                    <div className="back-arrow" onClick={ () => history.push( '/' ) }>
                        <img src={ arrowBack } />   <span className="back-link" onClick={ () => history.push( '/' ) }>Back to list</span>
                    </div>
                    <div className="content-section">
                        <div className="item-info">


                            <h3>{ data.singleParty.name }</h3>
                            <div className="item-reviews">
                                <span>Fabric</span>
                                <span className="seperator"></span>
                                {/*<img src={ rating }></img>*/}
                                <span>2 Reviews</span>
                            </div>
                            <div className="item-category ">
                                <img
                                    style={ {
                                        marginRight: 5,
                                        height: 22
                                    } }
                                    src={ data.singleParty.categories === 'Food and Agro' ? Printing :
                                        data.singleParty.categories === 'Printing, Packaging and Paper' ? Printing2 :
                                            data.singleParty.categories === 'Minerals and Metal' ? Metal :
                                                data.singleParty.categories === 'Food and Agro' ? Metal :
                                                    data.singleParty.categories === 'Electrical, Electronics and Automotive' ? Electricity :
                                                        data.singleParty.categories === 'Chemicals, Cosmetics and Pharmaceuticals' ? chemical :
                                                            data.singleParty.categories === 'Furniture, Wooden and Bedding' ? furniture :
                                                                data.singleParty.categories === 'Textile and Sewn' ? Textile : ''



                                    } />
                                <span>{ data.singleParty.categories }</span>
                            </div>
                            <div className="tags">
                                {
                                    data.singleParty.tags && data.singleParty.tags.length > 0 ? data.singleParty.tags.split( ',' ).map( ( data, i ) => {
                                        if ( i < 4 ) {

                                            return <span key={ i }>{ data }</span>
                                        }
                                    } )
                                        : '' }
                            </div>
                            <div className="item-description">
                                <p>
                                    { data.singleParty.description }
                                </p>
                            </div>
                            {/*
                            <div className="social-icons">
                                <div className="left">
                                    <img src={ facebook } />
                                    <img src={ tweet } />
                                </div>
                                <div className="right">
                                    <img src={ fav } />
                                    <img src={ share } />
                                </div>
                            </div>*/}
                        </div>
                        <h3>Reviews</h3>

                        <div onClick={ () => this.setState( { leaveReview: true },() => {
                            if( !authenticated ){
                                this.props.modalStateHandler( false, false, false, false, false, true, true )    
                            }
                        }) } className="Leave-review">
                            <a href="#" onClick={ e => e.preventDefault() }>Leave review</a>
                        </div>
                        <div className="hr">
                        </div>
                        <div className="review-section">

                            { authenticated ?
                                <div>
                                    { this.state.leaveReview ?
                                        <div style={ { padding: 10 } }>
                                            <Field name='rating' component={ renderFieldRating } type="text" label="Full Name" />
                                            <Field name='comment' component={ renderFieldTextArea } type="text" label="Comment" className="inputBox" />
                                            <button className="button" onClick={ handleSubmit( async ( data1 ) => {

                                                const editData = await mutate( {
                                                    variables: {
                                                        rating: data1.rating ? data1.rating : 0,
                                                        comment: data1.comment,
                                                        partyId: partyId
                                                    },
                                                    refetchQueries: [{ query: query }]
                                                } )

                                                this.setState( { leaveReview: false } );

                                            } ) }>Submit</button>
                                        </div>
                                        : '' }
                                </div> : 'Please login to give review and comment' }
                            { data.singleParty.comment ? data.singleParty.comment.map( ( data2, i ) => {

                                return <div key={ i }>
                                    <div className="user">                                        

                                        <StarRatingComponent
                                            name="rate2"
                                            editing={ false }
                                            //renderStarIcon={ () => <span></span> }
                                            starCount={ 5 }
                                            value={ data2.rating }
                                        />

                                        <span style={{marginLeft:'5px'}}>{ data2.name }</span>

                                    </div>
                                    <div className="user-comments" >
                                        <p>
                                            { data2.comment }
                                        </p>
                                    </div>
                                </div>

                            } ) : '' }

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
                    <div className="image-section">

                        <div className="image-row">
                            { data.singleParty.photo ? data.singleParty.photo.map( ( data, i ) => {
                                return <img key={ i } className="image" src={ `${ url }/static/${ data.filename }` } />
                            } ) : '' }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}



function mapStateToProps( state ) {
    return { authenticated: state.auth.isAuthenticated }
}

export default withRouter( connect( mapStateToProps, null )( graphql( query, {
    options: ( { match } ) => ( { variables: { name: match.params.name } } )
} )( form( graphql( mutation )( ItemDetail ) ) ) ) )