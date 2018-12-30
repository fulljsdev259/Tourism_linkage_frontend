import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { renderField, renderFieldTextArea } from './inputComponent'
import './editrecord.scss'
import { Input} from './inputComponent'

import { Modal, Button } from 'antd';

import { query as query1} from './adminDashIndex';

import Geocode from "react-geocode";
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";


const Map1 = ReactMapboxGl( {
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
} );

// set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
Geocode.setApiKey( "AIzaSyDr1I4GNAiIlQbtz72Ydg4527vvyhL-tdE" );

// Enable or disable logs. Its optional.
Geocode.enableDebug();



const form = reduxForm( {
    form: 'addSupplier',
    enableReinitialize: true,
    //validate

} )





const query = gql` query singleParty($name:String){
   
        singleParty(name:$name){
         _id
             name
             region
             categories
             address
             phoneNumber
             website
             tags
        }
        
   
  }
  `
/*$email:String,$tags: String,
, $categories: String, $region: String, $description: String, $email: String,
$address: String,
$phoneNumber: String, $website: String

categories:$categories,description:$description,phoneNumber:$phoneNumber,tags:$tags,
    region:$region,website:$website,address:$address,

*/
const mutation = gql`mutation addVendor1(
    $name:String,$tags: String,
, $categories: String, $region: String, $description: String, 
$address: String,
$phoneNumber: String, $website: String
    $latitude:Float,$longitude:Float,

$facebook:String,$profile:String
    $instagram:String,$typeOfCompany:String,$fax:String
    $email:String,$password:String,

   
){
        addVendor(
          name:$name,
        categories:$categories,description:$description,phoneNumber:$phoneNumber,tags:$tags,
        region:$region,website:$website,address:$address  
        latitude:$latitude,longitude:$longitude,
        facebook:$facebook,profile:$profile
        instagram:$instagram,typeOfCompany:$typeOfCompany,fax:$fax,
        email:$email,password:$password
        

        
        ){
            party{
                name
            }
            errors
                
            
        }
    }

`












class EditRecord extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: -77.319222,
            lng: 18,
            zoom: 7,
            map: '',
            visible:false
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



    showModal = () => {
        this.setState( {
            visible: true,
        } );
    }



    handleOk = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        this.props.history.push('/admin')
    }

    handleCancel = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        this.props.history.push( '/admin' )
    }
    render() {
        const { match, mutate, handleSubmit, id } = this.props;
        return <div className="editRecord" style={ {overflow:'scroll'} }>

            <h2>Add Record</h2>
            <div className="row">
                <div className="col1">
                    <div className="label">Full Name</div>
                    <div className="input">
                        <Field name='fullName' component={ renderField } type="text" label="Full Name" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Email</div>
                    <div className="input">
                        <Field name='email' component={ renderField } type="text" label="Email" />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Password</div>
                    <div className="input">
                        <Field name='password' component={ renderField } type="text" label="Password" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Facebook Url</div>
                    <div className="input">
                        <Field name='facebook' component={ renderField } type="text" label="Facebook Url" />

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <div className="label">Name</div>
                    <div className="input">
                        <Field name='name' component={ renderField } type="text" label="Company Name" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Region</div>
                    <div className="input">
                        <Field name='region' component={ renderField } type="text" label="Region" />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Category</div>
                    <div className="input">
                        <Field name='categories' component={ renderField } type="text" label="Category" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Address</div>
                    <div className="input">
                        <Field name='address' component={ renderFieldTextArea } type="text" label="Address" />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Phone Number</div>
                    <div className="input">
                        <Field name='phoneNumber' component={ renderField } type="text" label="Phone Number" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Website</div>
                    <div className="input">
                        <div style={ { display: 'flex', width: '100%', } }>
                            <div className="renderField" style={ { flex: 2, width: '100%' } }>

                                <Input  value={ this.state.map } onChange={ data => this.setState( { map: data.target.value } ) } placeholder="Locate Me" />
                                <button onClick={ () => this.getLang() } style={ {
                                    marginLeft: 10, border: 'none',
                                    backgroundColor: "#5165FF",
                                    color: "#fff", borderRadius: 5, padding: '4px 8px'
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

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Description</div>
                    <div className="input">
                        <Field name='description' component={ renderFieldTextArea } type="text" label="Description" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Tags(seprate by comma)</div>
                    <div className="input">
                        <Field name='tags' component={ renderFieldTextArea } type="text" label="tags" />

                    </div>
                </div>
            </div>

            <Modal
                title="Notification"
                visible={ this.state.visible }
                onOk={ this.handleOk }
                onCancel={ this.handleCancel }
            >
            Data has been edited successfully
                
            </Modal>
            <button className="buttonSave" onClick={ handleSubmit( async ( data ) => {
               console.log( data )
                const editData = await mutate( {
                    variables: {
                        name: data.name,
                        fullName: data.fullName,
                        categories: data.categories,
                        description: data.description,
                        phoneNumber: data.phoneNumber,
                        address: this.state.map,
                        tags:  data.tags,
                        region: data.region,
                        website: data.website,
                        address: data.address,
                        email: data.password,
                        password: data.password,
                        latitude: this.state.lat,
                        longitude: this.state.lng,
                        facebook: data.facebook,

                        instagram: data.instagram,
                        typeOfCompany: data.typeOfCompany,
                        fax: data.fax
                        
                 
                    },
                    refetchQueries: [{query:query1}]
                } )
console.log(editData)
                this.showModal();


            } ) }>Save</button>
            <button className="buttonBack">Back</button>



        </div>
    }
}
const EditRecordForm = form( graphql( mutation )( EditRecord ) )

const EditRecordWrapper = ( {  history } ) => {
   

    return <EditRecordForm  history={ history} />


}





export default withRouter(  EditRecordWrapper  );