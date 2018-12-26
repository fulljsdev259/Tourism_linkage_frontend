import React from 'react';
import SpicyDatatable from 'spicy-datatable';
import { withRouter } from 'react-router-dom'

import './datatable.scss';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`{
   
        party{
         
             name
             region
             categories
        }
        
   
  }
  `


const AdminDash = ( { data, match, history } ) => {

    if ( data.loading ) {
        return <span>Loading ..</span>
    }
    console.log( data )
    let row1 = [];
    data.party.map( ( data, i ) => {
        //const c=data.passPercentage;
        //console.log( data )



        row1.push( ...[{
            id: i + 1, name: data.name, region: data.region, categories: data.categories,
            action: <div style={ { display: 'flex', justifyContent: 'center' } }>
                <button onClick={ () => history.push( `${ match.url }/editSupplier/${ data.name }` ) }
                    style={ {
                        fontSize: 17, border: 'none', borderRadius: 5,
                        backgroundColor: '#1289A7', color: '#fff', padding: "7px 15px"
                    } }>Edit</button>
                <button
                    onClick={ () => history.push( `${ match.url }/english/${ data.name }` ) }
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
        <SpicyDatatable
            tableKey="demo-table-genral"
            // see below for prop documentation
            columns={ columns }
            rows={ row1 }
            // optional, used to override chosen default settings/labels
            config={ customOptions }
        />

    </div>
}


export default withRouter( graphql( query )( AdminDash ) );
