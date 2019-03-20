import React from 'react'
import { Field, reduxForm, FieldArray, } from 'redux-form'
import gql from 'graphql-tag'
import { withRouter } from 'react-router-dom';
import { graphql, compose } from 'react-apollo';
import { url } from '../config/constant'
import { query as query1 } from './admin/editParty'
const mutation = gql` 
    mutation addVendorPhoto($file:[Upload]!, $id: String, $deletePhotoName: String){
        addVendorPhoto(file:$file, id: $id, deletePhotoName: $deletePhotoName ){
            filename
        }
    }

   
`

// mutation deleteVendorPhoto($name: String){
//        deleteVendorPhoto(name:$name){
//          errors
//        }
//    }



// const mutationDeleteVendorPhoto = gql`mutation 
//     deleteVendorPhoto($name: String){
//         deleteVendorPhoto(name:$name){
//           errors
//         }
//     }
// `



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

    render() {
        const { mutate, handleSubmit, previousPage, id } = this.props
        console.log(id)
        return (
            <div style={{ marginBottom: "30px", marginTop: "30px" }}>
                <h2>Manage Images</h2>
                <div>
                    {
                        this.props.data.singleParty && this.props.data.singleParty.photo && this.props.data.singleParty.photo.length > 0 ?
                            this.props.data.singleParty.photo.map((img, i) => {
                                return (
                                    <div key={i}>
                                        <input style={{
                                            fontSize: "10px",
                                            color: "#fff",
                                            background: "red",
                                            border: "none"
                                        }} type="button" value="Delete" onClick={(async () => {
                                            await mutate({
                                                variables: {
                                                    file: {},
                                                    id: id,
                                                    deletePhotoName: img.filename
                                                }
                                            })
                                            this.props.data.refetch()
                                        })} />
                                        <img src={`${url}/static/${img.filename}`} style={{ height: '50px', marginLeft: '5px' }} />
                                    </div>
                                )
                            })
                            :
                            null
                    }
                </div>
                <br />

                <input
                    type="file"
                    multiple={true}
                    onChange={(async ({ target: { validity, files } }) => {
                        console.log(files)
                        await mutate({
                            variables: {
                                file: files,
                                id: id,
                                deletePhotoName: ""
                            }
                        })
                        this.props.reset('manageSupplierImages')
                        this.props.data.refetch()
                    })}
                />
            </div>
        )
    }
}


const form = reduxForm({
    form: 'manageSupplierImages',
    enableReinitialize: true,
    multipartForm: true,
    //validate

})


const EditRecordForm = form(graphql(mutation)(ManageSupplierImages))


export default withRouter(graphql(query, {
    options: ({ match }) => {
        return { variables: { name: match.params.name } }
    }

})(EditRecordForm));