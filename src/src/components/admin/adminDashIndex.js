import React from 'react';
import SpicyDatatable from 'spicy-datatable';
import { withRouter } from 'react-router-dom'

import { Modal, Button } from 'antd';
import './datatable.scss';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

export const query = gql`{
   
        party{
            _id
             name
             region
             categories
        }
        
   
  }
  `

export const mutation = gql` mutation deleteVendor($dataId:String){
   
        deleteVendor(dataId:$dataId){
               party{
                   name
               }
               errors
        }
        
   
  }
  `




class AdminDash extends React.Component {
    state = { visible: false, dataId: '' }

    showModal = () => {

        this.setState( {
            visible: true,
        } );
    }



    handleOk = async ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        const deleteVendor = await this.props.mutate( {
            variables: { dataId: this.state.dataId },
            refetchQueries: [{ query: query }]
        } )

           this.props.history.push( '/admin' )
    }

    handleCancel = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        // this.props.history.push( '/admin' )
    }

    render() {
        const { data, match, history } = this.props;
        if ( data.loading ) {
            return <span>Loading ..</span>
        }
        console.log( data )
        let row1 = [];


        let partyData = data.party.reverse();

        partyData.map( ( data, i ) => {
            //const c=data.passPercentage;
            //console.log( data )



            row1.push( ...[{
                id: i + 1, name: data.name, region: data.region, categories: data.categories,
                action: <div style={ { display: 'flex', justifyContent: 'center' } }>
                    <button onClick={ () => history.push( `${ match.url }/editSupplier/${ data._id }` ) }
                        style={ {
                            fontSize: 17, border: 'none', borderRadius: 5,
                            backgroundColor: '#1289A7', color: '#fff', padding: "7px 15px"
                        } }>Edit</button>
                    <button
                        onClick={ () => {
                            // alert( 'hello' )
                            this.setState( { dataId: data._id, visible: true } )
                            //this.showModal();
                        } }
                        style={ { fontSize: 17, border: 'none', borderRadius: 5, marginLeft: 10, color: '#fff', backgroundColor: '#006266', padding: "7px 15px" } }>Delete</button>
                </div>
            }] )
            return row1;
        } )

        const columns = [
            {
                key: 'id',
                label: 'Sr No',
            }, {
                key: 'name',
                label: 'Name',
            },
            {
                key: "region",
                label: "Region"
            },
            {
                key: "categories",
                label: "Category"
            },

            {
                key: 'action',
                label: 'Degree',
            },


        ];

        const customOptions = {
            itemsPerPageOptions: [6, 15, 20, 25, 30],
            itemsPerPageLabel: 'Page :',
            nextPageLabel: '>',
            previousPageLabel: '<',
            searchLabel: ' ',
            searchPlaceholder: 'Search here…',
            noEntriesLabel: 'No Entries Found',
            entryCountLabels: ['Showing: ', 'to', 'of', ''],
            showDownloadCSVButton: true,
            downloadCSVButtonLabel: 'Download CSV',

        };


        return <div style={ { maxHeight: '100%', overflowY: "scroll" } }>
            <h2>Suppliers</h2>
            <button onClick={ () => history.push( `${ match.url }/addSupplier` ) }
                style={ {
                    fontSize: 17, border: 'none', borderRadius: 5,
                    backgroundColor: '#1289A7', color: '#fff', padding: "7px 15px"
                } }>Add New Record</button>
            
            <SpicyDatatable
                tableKey="demo-table-genral"
                // see below for prop documentation
                columns={ columns }
                rows={ row1 }
                // optional, used to override chosen default settings/labels
                config={ customOptions }
            />
  <Modal
                title="Notification"
                visible={ this.state.visible }
                onOk={ this.handleOk }
                onCancel={ this.handleCancel }
            >
Are You Sure to delete this record ?
                
            </Modal>
        </div>
    }
}

export default withRouter( graphql( query )( graphql( mutation )( AdminDash ) ) );
