import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { url } from './constant';
const { createUploadLink } = require( 'apollo-upload-client' )
const httpLink = createUploadLink( {
    uri: `${ url }`,
} );

const authLink = setContext( ( _, { headers } ) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem( 'token' );
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? token : null,
        }
    }
} );

export const client = new ApolloClient( {
    link: authLink.concat( httpLink ),
    cache: new InMemoryCache()
} );