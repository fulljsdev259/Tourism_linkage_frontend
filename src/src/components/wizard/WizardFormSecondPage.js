import React from 'react'
import { Field, reduxForm, FieldArray, } from 'redux-form'
import validate from './validate'
import { renderField, renderSelect, renderTextarea, renderTag } from './renderField'
import './index.scss';
import checkMark from '../../images/icon/checkmark-green.svg'

const adaptFileEventToValue = delegate => e => delegate( e.target.files[0] );

const adaptFileEventToValueMulti = delegate => e => delegate( e.target.files );

const FileInput = ( {
    input: { value: omitValue, multiple, onChange, onBlur, ...inputProps },
    meta: omitMeta,
    ...props
} ) => {
    return (

        <input

            onChange={ adaptFileEventToValue( onChange ) }
            onBlur={ adaptFileEventToValue( onBlur ) }
            type="file"
            { ...props.input }
            { ...props }
        />

    );
};


const renderMembers = ( { fields, meta: { error, submitFailed } } ) => (
    <div>
        <div>
            <a href="" onClick={ ( e ) => {
                e.preventDefault();
                fields.push( {} )
            } }>
                Add Photo
             </a>
            { submitFailed && error && <span>{ error }</span> }
        </div>
        { fields.map( ( member, index ) => (
            <div style={ { display: 'flex', width: 400, padding: 10 } } key={ index }>
                <Field
                    name={ `${ member }.firstName` }
                    type="file"
                    component={ FileInput }

                />
                <button
                    type="button"
                    title="Remove Member"
                    onClick={ () => fields.remove( index ) }
                >Remove</button>



            </div>
        ) ) }
    </div>
)








const renderError = ( { meta: { touched, error } } ) =>
    touched && error ? <span>{ error }</span> : false

const WizardFormSecondPage = props => {
    const { handleSubmit, previousPage } = props
    return (
        <div>
            <div className="inActiveHeader">
                <div className="number">1</div>
                <div className="subHeading">General information</div>
                <img src={ checkMark } />
            </div>
            <div className="form">

                <div className="form-1">

                    <div className="form-header">
                        <div className="number">2</div>
                        <div className="subHeading">About your company</div>
                    </div>
                    <form onSubmit={ handleSubmit } >
                        <Field name="region" type="select" data={ ["Western Jamaica", "Central Jamaica", "Eastern Jamaica"] } component={ renderSelect } label="Select Region" />
                        <Field name="categories" type="select"
                            data={ ['Food and Agro', 'Printing, Packaging and Paper', 'Minerals and Metal',
                                'Electrical, Electronics and Automotive', 'Chemicals, Cosmetics and Pharmaceuticals',
                                'Furniture, Wooden and Bedding', 'Textile and Sewn'] }



                            component={ renderSelect } label="Select Manufacturer Type" />
                        {/*<Field name="typeOfCompany" type="text" component={ renderField } label="Type of your company" />*/}
                        <Field name="description" type="textarea" component={ renderTextarea } label="Describe your company" />
                        <Field name="tags" type="text" component={ renderTag } label="Tags" />
                        <FieldArray name="photo" component={ renderMembers } />
                        {/*  <Field name="photo" type="file" component={ FileInput } label="Tags" />*/ }

                        <div>
                            <button type="submit" className="nextsignup">
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

export default reduxForm( {
    form: 'wizard', //Form name is same
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
    validate
} )( WizardFormSecondPage )