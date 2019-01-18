import React from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { receiveLogin } from '../../../action/auth';
import { connect } from 'react-redux';

import { Modal as Modal1, Button } from 'antd';
import Loader from '../../loader';
import { query } from '../../index/index';
import { validate } from '../validate';

const form = reduxForm( {
    form: 'forgot',
    enableReinitialize: true,
    validate

} )



export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
        <input { ...input } placeholder={ label } type={ type } />

        <span style={ { color: '#fff', texAlign: 'center', marginTop: '-15px', marginBottom: '15px' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)



const mutation = gql`mutation resetPassword($email:String){
    resetPassword(email:$email){
        errors
    }
}`


class Forgot extends React.Component {
    state = { visible: false, errors: [], apiCall: false, successForgotPassoword: false  }

    showModal = () => {
        this.setState( {
            visible: true,
        } );
    }

    handleOk = ( e ) => {
        this.setState( {
            visible: false,
        } );
        this.props.history.push( '/admin' )
    }

    handleCancel = ( e ) => {
        this.setState( {
            visible: false,
        } );
        this.props.history.push( '/admin' )
    }

    renderErrors = () => {

        console.log( this.state )

        if( this.state.errors.length > 0 ){
            return (
                <div className="register-login-error-message">
                    {
                        this.state.errors.map((error, i ) => {
                            return ( <div key={i}>*{error}</div>)
                        })
                    }
                </div>
            )
        }
        if( this.state.successForgotPassoword ){
            return (
                <div className="register-login-error-message" style={{fontSize:"14px", color:"green", fontWeight:"bold"}}>
                    Please check your email for new Password!
                </div>
            )
        }
    }

    render() {
        const { mutate, history, handleSubmit, receiveLogin } = this.props;
        return <div className="login">
            { this.state.apiCall ? <Loader /> : '' }
            <div className="arrow-up"></div>


            <Field name='email' component={ renderField } type="text" label="Email" />

            {this.renderErrors()}
            <div className="remeber-section">
                <button className="button" onClick={ handleSubmit( async ( data ) => {
                    try {
                        this.setState( { apiCall: true } );
                        const result = await mutate( {
                            variables: {
                                email: data.email,
                            },
                            refetchQueries: () => [{ query: query }]
                        } )
                        this.setState( { apiCall: false } );
                        if ( result.data.resetPassword.errors.length > 0 ) {
                            this.setState( { errors: result.data.resetPassword.errors, successForgotPassoword: false } )
                        }
                        else {
                            this.setState({successForgotPassoword: true, errors: []})
                        }
                    }
                    catch ( err ) {
                        console.log( err );
                    }



                } ) }>
                    Submit
        </button>

                <Modal1
                    title="Notification"
                    visible={ this.state.visible }
                    onOk={ this.handleOk }
                    onCancel={ this.handleCancel }
                >
                    { this.state.errors.map( ( d, i ) => <div key={ i }>{ d }</div> ) }

                </Modal1>

                <span className="forgot-password" onClick={this.props.showLogin}>Login</span>
            </div>
        </div>
    }
}


export default withRouter( connect( null, { receiveLogin } )( form( graphql( mutation )( Forgot ) ) ) )