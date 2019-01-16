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

    componentDidMount(){
        // this.props.data.refetch()
    }

    showModal = () => {

        this.setState( {
            visible: true,
        } );
    }



    handleOk = async ( e ) => {
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
        this.setState( {
            visible: false,
        } );
        // this.props.history.push( '/admin' )
    }

    render() {

        const { data, match, history, parties } = this.props;

        let dbParties = this.props.data.party || [];

        let partiesToShow = [];
        if( dbParties.length > 0 && parties.length > 0 ){
            dbParties.map(i => {
                parties.map(j => {
                    if( i._id == j._id ){
                        partiesToShow.push( i )
                    }
                })
            })
        }



        if ( data.loading ) {
            return <span>Loading ..</span>
        }
        let row1 = [];
        partiesToShow.map( ( data, i ) => {
            //const c=data.passPercentage;
            //console.log( data )



            row1.push( ...[{
                id: i + 1, name: data.name, region: data.region, categories: data.categories,
                action: <div style={ { display: 'flex', justifyContent: 'center' } }>
                    <button onClick={ () => history.push( `${ match.url }/editSupplier/${ data._id }` ) }
                        style={ {
                            fontSize: 17, border: 'none', borderRadius: 5,
                            backgroundColor: '#1289A7', color: '#fff', padding: "7px 15px"
                        } }>Manage</button>
                        
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
                label: 'Manage',
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
            showDownloadCSVButton: false,
            downloadCSVButtonLabel: 'Download CSV'
        };


        return <div style={ { maxHeight: '100%', overflowY: "scroll" } }>
            <h2>My Suppliers</h2>
            
            
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
