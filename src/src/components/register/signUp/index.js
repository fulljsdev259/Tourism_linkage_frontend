import React from 'react';
import './index.scss'
import { withRouter } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Field, reset, reduxForm } from 'redux-form';
import { receiveLogin } from '../../../action/auth';
import { validate } from '../validate';
import { query } from '../../index/index';

import { Modal as Modal1, Button } from 'antd';
import Loader from '../../loader';

const form = reduxForm( {
    form: 'signup',
    enableReinitialize: true,
    validate

} )



export const renderField = ( { input, label, type, meta: { touched, error } } ) => (
    <div style={ { display: 'flex', flexDirection: 'column' } }>
        <input { ...input } placeholder={ label } type={ type } />

        <span style={ { color: '#fff', texAlign: 'center', marginTop: '-15px', marginBottom: '15px' } }>{ touched && error && <span>{ error }</span> }</span>
    </div>
)



const mutation = gql`mutation signup($email:String,$password:String,$name:String){
    signUp(email:$email,password:$password,name:$name){
        user{
            email
            role
        }
        errors

    }
}`



class Signup extends React.Component {
    state = { visible: false, errors: [], apiCall: false }

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
        //      this.props.history.push( '/admin' )
    }

    handleCancel = ( e ) => {
        console.log( e );
        this.setState( {
            visible: false,
        } );
        //        this.props.history.push( '/admin' )
    }

    render() {
        const { mutate, history, handleSubmit } = this.props;

        return <div className="signup">
            { this.state.apiCall ? <Loader /> : '' }
            <Modal1
                title="Notification"
                visible={ this.state.visible }
                onOk={ this.handleOk }
                onCancel={ this.handleCancel }
            >
                { this.state.errors.map( ( d, i ) => <div key={ i }>{ d }</div> ) }

            </Modal1>

            <div className="arrow-up"></div>

            <Field name='name' component={ renderField } type="text" label="Full Name" />
            <Field name='email' component={ renderField } type="text" label="Email" />

            <Field name='password' component={ renderField } type="password" label="Password" />


            <Field name='retype' component={ renderField } type="password" label="Retype password" />
            <button className="button"

                onClick={ handleSubmit( async ( data ) => {

                    try {
                        this.setState( { apiCall: true } );
                        const result = await mutate( {
                            variables: {
                                email: data.email, password: data.password, name: data.name
                            },
                            refetchQueries: () => [{ query: query }]
                        } )
                        this.setState( { apiCall: false } );

                        if ( result.data.signUp.errors.length > 0 ) {

                            this.setState( { errors: result.data.signUp.errors, } )
                            this.showModal()
                            //commonError()
                        }
                        else {


                            this.setState( { errors: ["You have successfully regitered"] } )
                            this.showModal()
                        }
                    }
                    catch ( err ) {
                        console.log( err );
                    }



                } ) }
            >
                Register
        </button>
        </div>
    }
}


export default withRouter( form( graphql( mutation )( Signup ) ) )