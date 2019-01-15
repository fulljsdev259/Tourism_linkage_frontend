import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

export default ( ComposedComponent ) => {
    class Authentication extends Component {

        componentWillMount() {
            if ( !this.props.authenticated || this.props.loggedUserData.role != 'admin' ) {

                this.props.history.push( `/` )
            }
        }
        componentWillUpdate( nextProps ) {
            if ( !nextProps.authenticated || this.props.loggedUserData.role != 'admin' ) {

                this.props.history.push( `/` )
            }
        }
        render() {
            return <ComposedComponent { ...this.props } />
        }
    }
    function mapStateToProps( state ) {
        return { authenticated: state.auth.isAuthenticated, loggedUserData: state.auth.loggedUserData }
    }

    return withRouter( connect( mapStateToProps )( Authentication ) );
}
