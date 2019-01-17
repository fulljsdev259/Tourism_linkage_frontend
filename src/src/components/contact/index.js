import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Field, reduxForm } from 'redux-form'
import Close from '../../images/icon/cross.svg';
import phone from '../../images/icon/phone.svg';
import fax from '../../images/icon/fax.svg';
import email from '../../images/icon/email.svg';
import './index.scss';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1Ijoia2VjaGVhbGV4cHJ0MiIsImEiOiJjam94azh4OHcyODByM3FqeHd1Nm43NWl6In0.0w8_b3fwLMXf8a1zSGgC2w"
});

export const renderField = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className="renderField">
        <label>{label}</label>
        <div>
            <input {...input} placeholder={placeholder} type={type} className="input" />
        </div>
        <div>
            {touched && error && <span><sup>*</sup>{error}</span>}
        </div>
    </div>
)

export const renderTextarea = ({ input, label, placeholder, type, meta: { touched, error } }) => (
    <div className="renderField">
        <label>{label}</label>
        <div>
            <textarea style={ {height: 100 } } { ...input } placeholder={ placeholder } type={ type } className="textArea" />
            {touched && error && <span><sup>*</sup>{error}</span>}
        </div>
    </div>
)

const validate = values => {
    const errors = {}

    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address'
    }
    if (!values.message) {
        errors.message = 'Required'
    }
    return errors
}

const mutation = gql`mutation sendEmail($name:String,$email:String,$message:String){
    sendEmail(name:$name,email:$email,message:$message){
        errors
    }
}`

class ContactUs extends React.Component {

    state = { errors: [], showMessage: false }

     renderSuccessBlock = () => {
        return (
            <div className="content-one">
                <div className="heading-one">Thank you for getting in touch!</div>
                <br/>
                <p>One of our staff at Tourism Linkages Network will be getting back to you shortly.</p>
                <div className="heading-one">
                    <button type="button" className="button" onClick={() => this.props.closeModal()}> OK</button>
                </div>
            </div>
        )
    }

    render() {
        return <div className="contact">
            <div className="header">
                <div>
                    <span>CONTACT US</span>
                    <hr />
                </div>
                <img src={Close} onClick={() => this.props.closeModal()} />
            </div>

            {
                this.state.showMessage ? 
                this.renderSuccessBlock()
                :


            <div className="content">
                <div className="contact1">
                    <div className="heading">
                        Tourism Linkages Network
                    </div>
                    <p>
                        Ministry of Tourism<br />
                        Jamaica Tourism Centre<br />
                        64 Knutsford Boulevard<br />
                        Kingston 5<br />
                        Jamaica W.I.<br />
                    </p>
                    {/* <Map
                        style="mapbox://styles/mapbox/streets-v8"
                        className="mobile-map"
                    >
                        <Layer
                            type="symbol"
                            id="marker"
                            layout={{ "icon-image": "marker-15" }}>
                            <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                        </Layer>
                    </Map>*/}
                    <p style={{ marginTop: 40 }}>
                        <img src={phone} /> (876) 920-4926-30<br />
                        <img src={fax} /> (876) 920-4944<br />
                        {/*<img src={email} /> info@tourismlinkages.net<br />*/}
                    </p>

                </div>



                <div className="input">
                    <div className="heading">
                        Leave us message
                    </div>

                    <form onSubmit={() => { return false }} >
                        <Field
                            name="name"
                            type="text"
                            component={renderField}
                            label="Your full name"
                        />
                        <Field
                            name="email"
                            type="email"
                            component={renderField}
                            label="Email Address"
                            placeholder=""
                        />
                        <Field
                            name="message"
                            type="textarea"
                            component={renderTextarea}
                            label="Message Box"
                        />
                        
                        <div>
                            <button className="button" onClick={this.props.handleSubmit(async (data) => {

                                const result = await this.props.mutate({
                                    variables: {
                                        name: data.name,
                                        email: data.email,
                                        message: data.message,
                                    },
                                    // refetchQueries: () => [{ query: query }]
                                })

                                this.setState({
                                    showMessage: true
                                })

                            })}>Send</button>
                        </div>
                    </form>
                </div>
            </div>


            }




            {/* <Map
                style="mapbox://styles/kechealexprt2/cjq7f3fqf1h4q2rqdcz44o8j7"
                className="desktop-map">
                <Layer
                    type="symbol"
                    id="marker"
                    layout={{ "icon-image": "marker-15" }}>
                    <Feature coordinates={[-76.7897505, 18.0064986]} />
                </Layer>
            </Map> */}
        </div>
    }
}

const contactForm = reduxForm({
    form: 'contactus',
    enableReinitialize: true,
    validate

})

export default withRouter((contactForm(graphql(mutation)(ContactUs))))