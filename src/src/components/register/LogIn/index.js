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
    form: 'login',
    enableReinitialize: true,
    validate

} )



export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
        <input { ...input } placeholder={ label } type={ type } />

        <span style={ { color: '#fff', texAlign: 'center', marginTop: '-15px', marginBottom: '15px' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)



const mutation = gql`mutation login($email:String,$password:String){
    login(email:$email,password:$password){
        user{
            email
            role
            name
            _id
            userParties {
                _id
                name
                region
                categories
            }
        }
        errors
        token
    }
}`


class Login extends React.Component {
    state = { visible: false, errors: [], apiCall: false }

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
    }

    render() {
        const { mutate, history, handleSubmit, receiveLogin } = this.props;
        return <div className="login">
            { this.state.apiCall ? <Loader /> : '' }
            <div className="arrow-up"></div>


            <Field name='email' component={ renderField } type="text" label="Email" />

            <Field name='password' component={ renderField } type="password" label="Password" />

            <div className="remember-me">
                <input type="checkbox" id="RememberMe" name="RememberMe" value="Remember Me" />
                <label htmlFor="RememberMe">Remember Me</label>
            </div>
            {this.renderErrors()}
            <div className="remeber-section">
                <button className="button" onClick={ handleSubmit( async ( data ) => {

                    try {
                        this.setState( { apiCall: true } );
                        const result = await mutate( {
                            variables: {
                                email: data.email, password: data.password,
                            },
                            refetchQueries: () => [{ query: query }]
                        } )
                        this.setState( { apiCall: false } );
                        if ( result.data.login.errors.length > 0 ) {

                            this.setState( { errors: result.data.login.errors, } )
                            // this.showModal()
                            //commonError()
                        }
                        else {
                            localStorage.setItem( "token", result.data.login.token )
                            localStorage.setItem( "token_user", JSON.stringify(result.data.login.user))
                            receiveLogin();
                            if ( result.data.login.user.role === 'admin' ) {
                                this.setState( { loading: false } )
                                this.props.closeModal();
                                history.push( '/admin' )

                            }
                            else {
                                // if ( result.data.login.user.submit ) {
                                //     console.log( result )
                                //     history.push( `/user/admitCard/${ result.data.login.user.regNumber }` )
                                //     this.setState( { loading: false } )

                                // }
                                // else {
                                //     alert( 'Registration has been closed' )
                                //     this.setState( { loading: false } )
                                // }
                                receiveLogin();
                                this.setState( { loading: false } )
                                this.props.closeModal();
                                // history.push( `/` ) // no need to push, now logged user will remain on the same page after login

                                //this.setState( { loading: false } )

                            }

                            //this.props.openSignUpConfirm();
                            //router.push('/adminsignupConfirm')
                        }
                    }
                    catch ( err ) {
                        console.log( err );
                    }



                } ) }>
                    Login
        </button>

                <Modal1
                    title="Notification"
                    visible={ this.state.visible }
                    onOk={ this.handleOk }
                    onCancel={ this.handleCancel }
                >
                    { this.state.errors.map( ( d, i ) => <div key={ i }>{ d }</div> ) }

                </Modal1>

                {/*<span className="forgot-password">Forgot Password?</span>*/}
            </div>
        </div>
    }
}


export default withRouter( connect( null, { receiveLogin } )( form( graphql( mutation )( Login ) ) ) )