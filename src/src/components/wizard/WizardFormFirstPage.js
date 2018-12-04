import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField } from './renderField'
import './index.scss'

const WizardFormFirstPage = props => {
    const { handleSubmit } = props
    return (
        <div>
            <div className="form">
                <div className="header">
                    <div className="number">1</div>
                    <div className="subHeading">General information</div>
                </div>
                <form onSubmit={ handleSubmit }>
                    <Field
                        name="firstName"
                        type="text"
                        component={ renderField }
                        label="Your name"
                    />
                    <Field
                        name="lastName"
                        type="text"
                        component={ renderField }
                        label="Company Name"
                    />
                    <Field
                        name="email"
                        type="text"
                        component={ renderField }
                        label="email"
                    />
                    <div>
                        <button type="submit" className="next">
                            Continue
        </button>
                    </div>
                </form>

            </div>
            <div className="inActiveHeader">
                <div className="number">2</div>
                <div className="subHeading">About your comany</div>
            </div>
            <div className="inActiveHeader">
                <div className="number">3</div>
                <div className="subHeading">Contact information</div>
            </div>
        </div>
    )
}

export default reduxForm( {
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
} )( WizardFormFirstPage )