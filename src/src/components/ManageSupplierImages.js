import React from 'react'
import { Field, reduxForm, FieldArray, } from 'redux-form'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { url } from '../config/constant'

const mutation = gql`mutation addVendorPhoto($file:Upload!, $id: String){
        addVendorPhoto(file:$file, id: $id){
            filename
        }
    }

`

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
             latitude
             longitude
             photo {
                filename
             }
        }
        
   
  }
  `

class ManageSupplierImages extends React.Component {

    render(){

        console.log('***************')
        console.log( this.props )

        const { mutate, handleSubmit, previousPage, id } = this.props
        console.log('id::---'+ id )
        return (
            <div>
                <div>
                {
                    this.props.data.singleParty && this.props.data.singleParty.photo && this.props.data.singleParty.photo.length > 0 ?
                    this.props.data.singleParty.photo.map( (img) => {
                        return(
                            <div>
                                <input type="button" value="Delete" />
                                <img src={`${url}/static/${img.filename}`} style={{height:'50px', marginLeft:'5px'}} />
                            </div>
                        )
                    }) 
                    :
                    null
                }
                </div>
                <br/>

                <input
                    type="file"
                    onChange={  (async  ({ target: { validity, files:[file] } }) => {
                        console.log( file )
                      //validity.valid && uploadFile({ variables: { file } });
                      mutate({
                        variables: { 
                            file:file,
                            id: id
                        }
                      })

                    }  )}
                />
            </div>
        )
    }
}


const form = reduxForm( {
    form: 'editSupplier',
    enableReinitialize: true,
    multipartForm : true,
    //validate

} )


const EditRecordForm = form( graphql( mutation )( ManageSupplierImages ) )


export default withRouter( graphql( query, {
    options: ( { match } ) => {
        return { variables: { name: match.params.name } }
    }

} )( EditRecordForm ) );