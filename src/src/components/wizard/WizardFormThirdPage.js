import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderSelect, renderTextarea, renderTag } from './renderField'
import './index.scss';
import checkMark from '../../images/icon/checkmark-green.svg'
import Geocode from "react-geocode";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import Loader from '../loader';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
const mutation = gql`mutation addVendor1(
    $name:String,$tags: String,
, $categories: String, $region: String, $description: String, 
$address: String,
$phoneNumber: String, $website: String
    $latitude:String,$longitude:String,
$photo:[fileUpload],

$facebook:String,$profile:String
    $instagram:String,$fax:String
    $email:String,$password:String,

   
){
        addVendor(
          name:$name,
        categories:$categories,description:$description,phoneNumber:$phoneNumber,tags:$tags,
        region:$region,website:$website,address:$address  
        latitude:$latitude,longitude:$longitude,
        facebook:$facebook,profile:$profile
        instagram:$instagram,fax:$fax,
        email:$email,password:$password,photo:$photo
        

        
        ){
            party{
                name
                region
                categories
            }
            errors
                
            
        }
    }

`



const Map1 = ReactMapboxGl( {
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
} );

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey( "AIzaSyDr1I4GNAiIlQbtz72Ydg4527vvyhL-tdE" );

// Enable or disable logs. Its optional.
Geocode.enableDebug();


const renderColorSelector = ( { input, meta: { touched, error } } ) => (
    <div>
        <select { ...input }>
            <option value="">Select a color...</option>
            { colors.map( val => (
                <option value={ val } key={ val }>
                    { val }
                </option>
            ) ) }
        </select>
        { touched && error && <span>{ error }</span> }
    </div>
)


class WizardFormThirdPage extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: "",
            lng: "",
            zoom: 7,
            map: '',
            apiCall: false,
            errors: []
        }

    }


    async getLang() {
        //     const data1 = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${data}&key=AIzaSyDr1I4GNAiIlQbtz72Ydg4527vvyhL-tdE`)
        //     console.log(data1)
        //    this.setState({lat:lat,lng:lng})   
        Geocode.fromAddress( this.state.map ).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState( { lat: lat, lng: lng } );

                console.log( lat, lng );
            },
            error => {
                console.error( error );
            }
        );

    }

    renderErrors = () => {
        if( this.state.errors.length > 0 ){
            return (
                <div className="company-list-error-message">
                    {
                        this.state.errors.map((error, i ) => {
                            return ( <div key={i}>*{error}</div>)
                        })
                    }
                </div>
            )
        }
    }

    render() {
        const { handleSubmit, pristine, previousPage, submitting, mutate } = this.props




        return (
            <div>
                { this.state.apiCall ? <Loader /> : '' }
                <div className="inActiveHeader">
                    <div className="number">1</div>
                    <div className="subHeading">General information</div>
                    <img src={ checkMark } />
                </div>
                <div className="inActiveHeader">
                    <div className="number">2</div>
                    <div className="subHeading">About your company</div>
                    <img src={ checkMark } />
                </div>
                <div className="form" >
                    <div className="form-1">
                        <div className="form-header">
                            <div className="number">3</div>
                            <div className="subHeading">Contact information</div>
                        </div>

                        <form onSubmit={ handleSubmit } encType="multipart/form-data">

                            <Field
                                name="address"
                                type="text"
                                component={ renderField }
                                label="Full address"
                            />
                            {/*

                            <div style={ { display: 'flex', width: '100%', marginTop: 25, } }>
                                <div className="renderField" style={ { flex: 2, width: '100%' } }>

                                    <input className="input" value={ this.state.map } onChange={ data => this.setState( { map: data.target.value } ) } placeholder="Locate Me" />
                                    <button onClick={ () => this.getLang() } style={ {
                                        marginLeft: 10, border: 'none',
                                        backgroundColor: "#5165FF",
                                        color: "#fff", borderRadius: 5, padding: '4px 8px',
                                        cursor: 'pointer'
                                    } } >Get Location</button>
                                </div>
                            </div>

                            <div style={ {
                                display: 'flex', width: '100%', marginTop: 25
                            } }>
                                <Map1



                                    style="mapbox://styles/kechealexprt2/cjq7f3fqf1h4q2rqdcz44o8j7"

                                    center={ [this.state.lng, this.state.lat] }
                                    zoom={ [this.state.zoom] }
                                    ref={ ( e ) => { this.map = e; } }
                                    containerStyle={ {
                                        height: "200px",
                                        width: "300px"
                                    } } >
                                    <Layer
                                        type="symbol"
                                        id="marker"
                                        layout={ { "icon-image": "marker-15" } }>
                                        <Feature coordinates={ [this.state.lng, this.state.lat] } />
                                    </Layer>
                                </Map1>

                            </div>
                        */}

                            <Field
                                name="phoneNumber"
                                type="text"
                                component={ renderField }
                                label="Phone number"
                            />

                            <Field
                                name="facebook"
                                type="text"
                                component={ renderField }
                                label="Facebook Url"
                            />

                            <Field
                                name="instagram"
                                type="text"
                                component={ renderField }
                                label="Instagram"
                            />
                            <Field
                                name="fax"
                                type="text"
                                component={ renderField }
                                label="Fax"
                            />  <Field
                                name="website"
                                type="text"
                                component={ renderField }
                                label="Company website"
                            />
                            {/*
                            <Field name="hours" type="textarea" component={ renderTextarea } label="Open hours" />
                            */}

                            {this.renderErrors()}

                            <button type="button"
                                onClick={ handleSubmit( async ( data ) => {
                                    this.setState( { apiCall: true } );
                                    const editData = await mutate( {
                                        variables: {
                                            name: data.name,
                                            fullName: data.fullName,
                                            categories: data.categories,
                                            description: data.description,
                                            phoneNumber: data.phoneNumber,
                                            // address: this.state.map,
                                            tags: data.tags ? ( data.tags ).toString() : '',
                                            region: data.region,
                                            website: data.website,
                                            address: data.address,
                                            email: data.email,
                                            password: data.password,
                                            latitude: this.state.lat.toString(),
                                            longitude: this.state.lng.toString,
                                            facebook: data.facebook,
                                            photo: data.photo,
                                            instagram: data.instagram,
                                            fax: data.fax


                                        },

                                        //   refetchQueries: [{ query: query1 }]
                                    } )
                                    this.setState( { apiCall: false } );
                                    //   this.showModal();

                                    if ( editData.data.addVendor.errors === null ) {
                                        this.props.onSuccessCompanyListed();
                                        // this.setState( { errors: result.data.signUp.errors, } )
                                        // this.showModal()
                                        //commonError()
                                    }
                                    else {
                                        this.setState( { errors: editData.data.addVendor.errors } )
                                        // this.showModal()
                                        // this.props.onSuccessRegister();
                                    }






                                } ) }

                                className="nextsignup" disabled={ pristine || submitting }>
                                CONTINUE
                             </button>

                        </form>
                    </div>
                </div>


            </div>
        )
    }


}
export default reduxForm( {
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
} )( graphql( mutation )( WizardFormThirdPage ) )
