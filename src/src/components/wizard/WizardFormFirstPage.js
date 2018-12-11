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
                <div className="form-1">
                    <div className="form-header">
                        <div className="number">1</div>
                        <div className="subHeading">General information</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Field
                            name="fullname"
                            type="text"
                            component={renderField}
                            label="Your full name"
                        />
                        <Field
                            name="companyname"
                            type="text"
                            component={renderField}
                            label="Your company name"
                            placeholder=""
                        />
                        <Field
                            name="email"
                            type="email"
                            component={renderField}
                            label="Email"
                        />
                        <div>
                            <button type="submit" className="next">
                            CONTINUE
                     </button>
                        </div>
                    </form>
                </div>
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

export default reduxForm({
    form: 'wizard', // <------ same form name
    destroyOnUnmount: false, // <------ preserve form data
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormFirstPage)