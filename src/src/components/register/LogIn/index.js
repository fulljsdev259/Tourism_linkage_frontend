import React from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { receiveLogin } from '../../../action/auth';

import { Modal as Modal1, Button } from 'antd';


const form = reduxForm( {
    form: 'login',
    enableReinitialize: true,
    //validate

} )



export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
        <input { ...input } placeholder={ label } type={ type } />

        <span style={ { color: 'red', texAlign: 'center' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)



const mutation = gql`mutation login($email:String,$password:String){
    login(email:$email,password:$password){
        user{
            email
            role
        }
        errors
        token
    }
}`


class Login extends React.Component {
    state = { visible: false, errors: [] }

    showModal = () => {
        this.setState( {
            visible: true,
        } );
    }



    handleOk = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        this.props.history.push( '/admin' )
    }

    handleCancel = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        this.props.history.push( '/admin' )
    }

    render() {
        const { mutate, history, handleSubmit } = this.props;

        return <div className="login">
            <div className="arrow-up"></div>


            <Field name='email' component={ renderField } type="text" label="Email" />

            <Field name='password' component={ renderField } type="password" label="Password" />

            <div className="remember-me">
                <input type="checkbox" id="RememberMe" name="RememberMe" value="Remember Me" />
                <label htmlFor="RememberMe">Remember Me</label>
            </div>
            <div className="remeber-section">
                <button className="button" onClick={ handleSubmit( async ( data ) => {

                    try {
                        const result = await mutate( {
                            variables: {
                                email: data.email, password: data.password,
                            }
                        } )

                        if ( result.data.login.errors.length > 0 ) {

                            this.setState( { errors: result.data.login.errors, } )
                            this.showModal()
                            //commonError()
                        }
                        else {
                            localStorage.setItem( "token", result.data.login.token )
                            receiveLogin();
                            if ( result.data.login.user.role === 'admin' ) {
                                history.push( '/admin' )
                                this.setState( { loading: false } )
                                this.props.closeModal();
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
                                history.push( `/` )
                                this.setState( { loading: false } )
                                this.props.closeModal();
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

                <span className="forgot-password">Forgot Password?</span>
            </div>
        </div>
    }
}


export default withRouter( form( graphql( mutation )( Login ) ) )