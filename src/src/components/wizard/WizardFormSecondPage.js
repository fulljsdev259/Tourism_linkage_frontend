import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderSelect,renderTextarea, renderTag } from './renderField'
import './index.scss';
import checkMark from '../../images/icon/checkmark-green.svg'

const renderError = ({ meta: { touched, error } }) =>
    touched && error ? <span>{error}</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <div>
            <div className="inActiveHeader">
                <div className="number">1</div>
                <div className="subHeading">General information</div>
                <img src={checkMark} />
            </div>
            <div className="form">

                <div className="form-1">

                    <div className="form-header">
                        <div className="number">2</div>
                        <div className="subHeading">About your comany</div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Field name="category" type="select" component={renderSelect} label="Select Category" />
                        <Field name="type" type="text" component={renderField} label="Type of your company" />
                        <Field name="category" type="textarea" component={renderTextarea} label="Describe your company" />
                        <Field name="email" type="email" component={renderTag} label="Email" />
                        <a href>Add Photo</a>
                        <div>
                            <button type="submit" className="next">
                            CONTINUE
                            </button>
                        </div>
                    </form>
                </div>

                {/* <div className="header">
                    <div className="number">3</div>
                    <div className="subHeading">Contact information</div>
                </div> */}
            </div>
        </div>
    )
}

export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormSecondPage)