import React from 'react';
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { renderField, renderFieldTextArea } from './inputComponent'
import './editrecord.scss'

const form = reduxForm( {
    form: 'editSupplier',
    enableReinitialize: true,
    //validate

} )

const query = gql` query singleParty($name:String){
   
        singleParty(name:$name){
         
             name
             region
             categories
             address
        }
        
   
  }
  `












const EditRecord = ( { match } ) => {
    return <div className="editRecord">

        <h2>Edit Record</h2>

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



    </div>
}

const EditRecordForm = form( EditRecord )

const EditRecordWrapper = ( { match, data } ) => {
    if ( data.loading ) {
        return <span>Loading ....</span>
    }
    const initialValues = {
        name: data.singleParty.name, categories: data.singleParty.categories, address: data.singleParty.address,
        region: data.singleParty.region
    }
    console.log( data )
    return <EditRecordForm initialValues={ initialValues } />


}





export default withRouter( graphql( query, {
    options: ( { match } ) => {
        return { variables: { name: match.params.name } }
    }

} )( form( EditRecordWrapper ) ) );