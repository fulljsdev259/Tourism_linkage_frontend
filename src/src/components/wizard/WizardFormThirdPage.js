import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import { renderField, renderSelect, renderTextarea, renderTag } from './renderField'
import './index.scss';
import checkMark from '../../images/icon/checkmark-green.svg'
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']


const renderColorSelector = ({ input, meta: { touched, error } }) => (
    <div>
        <select { ...input }>
            <option value="">Select a color...</option>
            {colors.map(val => (
                <option value={val} key={val}>
                    {val}
                </option>
            ))}
        </select>
        {touched && error && <span>{error}</span>}
    </div>
)

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
    return (
        <div>
            <div className="inActiveHeader">
                <div className="number">1</div>
                <div className="subHeading">General information</div>
                <img src={checkMark} />
            </div>
            <div className="inActiveHeader">
                <div className="number">2</div>
                <div className="subHeading">About your company</div>
                <img src={checkMark} />
            </div>
            <div className="form">
                <div className="form-1">
                    <div className="form-header">
                        <div className="number">3</div>
                        <div className="subHeading">Contact information</div>
                    </div>

                    <form onSubmit={handleSubmit}>

                        <Field
                            name="address"
                            type="text"
                            component={renderField}
                            label="Full address"
                        />  <Field
                            name="phone"
                            type="text"
                            component={renderField}
                            label="Phone number"
                        />  <Field
                            name="fax"
                            type="text"
                            component={renderField}
                            label="Fax"
                        />  <Field
                            name="website"
                            type="text"
                            component={renderField}
                            label="Company website"
                        />
                        <Field name="hours" type="textarea" component={renderTextarea} label="Open hours" />

                        <button type="submit" className="next" disabled={pristine || submitting}>
                            CONTINUE
                             </button>

                    </form>
                </div>
            </div>


        </div>
    )
}
export default reduxForm({
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
})(WizardFormThirdPage)
