import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { renderField, renderFieldTextArea, renderSelectBox } from './inputComponent'
import './editrecord.scss'

import { Modal, Button } from 'antd';

import { query as query1} from './adminDashIndex';
import ManageSupplierImages from '../ManageSupplierImages';

const form = reduxForm( {
    form: 'editSupplier',
    enableReinitialize: true,
    //validate

} )

export const query = gql` query singleParty($name:String){
   
        singleParty(name:$name){
         _id
             name
             region
             categories
             address
             phoneNumber
             website
             tags
             latitude
             longitude
             status
             description
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

const mutation = gql`mutation editVendor1($dataId:String,$name:String,$tags: String,
, $categories: String, $region: String, $description: String, ,$password:String,
$address: String,
$phoneNumber: String, $website: String, $latitude:String, $longitude:String, $status: String
){
        editVendor(name:$name,dataId:$dataId,password:$password,
        categories:$categories,description:$description,phoneNumber:$phoneNumber,tags:$tags,
    region:$region,website:$website,address:$address, latitude:$latitude, longitude:$longitude,
    status:$status
        
        ){
            party{
                name
            }
            errors
                
            
        }
    }

`











class EditRecord extends React.Component {
    state = { visible: false }

    showModal = () => {
        this.setState( {
            visible: true,
        } );
    }

    componentWillMount() {
        this.props.refetch()
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
        return <div className="editRecord">

            <h2>Edit Record</h2>

            <div className="row">
                <div className="col1">
                    <div className="label">Status</div>
                    <div className="input">
                        <Field 
                            name="status" 
                            type="select" 
                            data={ ["Published", "Unpublished"] } 
                            component={ renderSelectBox } label="Set Status" 
                        />
                    </div>
                </div>
                <div className="col2">
                    <div className="label">Password</div>
                    <div className="input">
                        <Field name='password' component={renderField} type="text" label="Password" />

                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col1">
                    <div className="label">Name</div>
                    <div className="input">
                        <Field name='name' component={ renderField } type="text" label="Name" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Region</div>
                    <div className="input">
                        {/*<Field name='region' component={ renderField } type="text" label="Region" />*/}
                        <Field 
                            name="region" 
                            type="select" 
                            data={ ["Western Jamaica", "Central Jamaica", "Eastern Jamaica"] } 
                            component={ renderSelectBox } label="Select Region" />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Category</div>
                    <div className="input">
                        {/*<Field name='categories' component={ renderField } type="text" label="Category" />*/}
                        <Field name="categories" type="select"
                            data={ ['Food and Agro', 'Printing, Packaging and Paper', 'Minerals and Metal',
                                'Electrical, Electronics and Automotive', 'Chemicals, Cosmetics and Pharmaceuticals',
                                'Furniture, Wooden and Bedding', 'Textile and Sewn'] }



                            component={ renderSelectBox } label="Select Manufacturer Type" />

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
                        <Field name='website' component={ renderField } type="text" label="Website" />

                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col1">
                    <div className="label">Latitude</div>
                    <div className="input">
                        <Field name='latitude' component={ renderField } type="text" label="Latitude" />

                    </div>
                </div>
                <div className="col2">
                    <div className="label">Longitude</div>
                    <div className="input">
                        <Field name='longitude' component={ renderField } type="text" label="Longitude" />

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
             //   console.log( mutate )
                const editData = await mutate( {
                    variables: {
                        password:data.password?data.password:'',
                        name: data.name, dataId: id, tags: data.tags, address: data.address, phoneNumber: data.phoneNumber,
                        region: data.region, categories: data.categories, website: data.website, description: data.description,
                        latitude: data.latitude, longitude:data.longitude,
                        status: data.status
                    },
                    refetchQueries: [{query:query1}]
                } )

                this.showModal();


            } ) }>Save</button>
            {/*<button className="buttonBack">Back</button>*/}

            <div className="row">
                <div className="col1">
                    <ManageSupplierImages id={id}/>
                </div>
                <div className="col2">
                </div>
            </div>




        </div>
    }
}
const EditRecordForm = form( graphql( mutation )( EditRecord ) )

const EditRecordWrapper = ( {  data,history } ) => {
    if ( data.loading ) {
        return <span>Loading ....</span>
    }
    const initialValues = {
        name: data.singleParty.name, categories: data.singleParty.categories, address: data.singleParty.address,
        region: data.singleParty.region, phoneNumber: data.singleParty.phoneNumber, website: data.singleParty.website,
        description: data.singleParty.description, tags: data.singleParty.tags,
        latitude: data.singleParty.latitude, longitude: data.singleParty.longitude,
        status: data.singleParty.status
    }
    return <EditRecordForm refetch={data.refetch} initialValues={ initialValues } id={ data.singleParty._id } history={ history} />


}





export default withRouter( graphql( query, {
    options: ( { match } ) => {
        return { variables: { name: match.params.name } }
    }

} )( EditRecordWrapper ) );