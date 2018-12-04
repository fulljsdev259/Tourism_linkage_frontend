import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import './index.scss';
const colors = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']


const renderColorSelector = ( { input, meta: { touched, error } } ) => (
    <div>
        <select { ...input }>
            <option value="">Select a color...</option>
            { colors.map( val => (
                <option value={ val } key={ val }>
                    { val }
                </option>
            ) ) }
        </select>
        { touched && error && <span>{ error }</span> }
    </div>
)

const WizardFormThirdPage = props => {
    const { handleSubmit, pristine, previousPage, submitting } = props
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
            <div className="header">
                <div className="number">3</div>
                <div className="subHeading">Contact information</div>
            </div>

            <form onSubmit={ handleSubmit }>
                <div>
                    <label>Favorite Color</label>
                    <Field name="favoriteColor" component={ renderColorSelector } />
                </div>
                <div>
                    <label htmlFor="employed">Employed</label>
                    <div>
                        <Field
                            name="employed"
                            id="employed"
                            component="input"
                            type="checkbox"
                        />
                    </div>
                </div>
                <div>
                    <label>Notes</label>
                    <div>
                        <Field name="notes" component="textarea" placeholder="Notes" />
                    </div>
                </div>
                <div>
                    <button type="button" className="previous" onClick={ previousPage }>
                        Previous
        </button>
                    <button type="submit" disabled={ pristine || submitting }>
                        Submit
        </button>
                </div>
            </form>


        </div>
    )
}
export default reduxForm( {
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
} )( WizardFormThirdPage )
