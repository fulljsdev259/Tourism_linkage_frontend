import Moment from "moment";

export const validate = values => {
    const errors = {}
    if ( !values.saluation ) {
        errors.saluation = "Salutation is Required"
    }

    if ( !values.password ) {
        errors.password = "Password is Required"
    }

    if ( !values.retype ) {
        errors.retype = "Retype Password is Required"
    }

    if ( !values.email ) {
        errors.email = 'Email is Required'
    } else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test( values.email ) ) {
        errors.email = 'Invalid email address'
    }


    if ( !values.name ) {
        errors.name = "Full Name is  Required"
    }

    if ( values.password && values.retype ) {
        if ( values.password !== values.retype ) {
            errors.retype = "Password and Retype password should be same"
        }

    }
    return errors
}

//export default validate