import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderSelect, renderTag } from './renderField'
import './index.scss';

const renderError = ( { meta: { touched, error } } ) =>
    touched && error ? <span>{ error }</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <div className="form">
            <div className="header">
                <div className="number">1</div>
                <div className="subHeading">General information</div>
            </div>
            <div className="header">
                <div className="number">2</div>
                <div className="subHeading">About your comany</div>
            </div>
            <form onSubmit={ handleSubmit }>
                <Field name="email" type="email" component={ renderSelect } label="Email" />
                <Field name="email" type="email" component={ renderTag } label="Email" />
                <div>
                    <button type="button" className="previous" onClick={ previousPage }>
                        Previous
        </button>
                    <button type="submit" className="next">
                        Next
        </button>
                </div>
            </form>

            <div className="header">
                <div className="number">3</div>
                <div className="subHeading">Contact information</div>
            </div>
        </div>
    )
}

export default reduxForm( {
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
} )( WizardFormSecondPage )