import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
import Wizard from '../wizard/wizard';
import { Modal as Modal1, Button } from 'antd';





export default class GetListed extends React.Component {
    constructor() {
        super();
        this.state = {
            generalInfo: true,
            companyInfo: false,
            contactInfo: false,
            companyListedStatus: false
        }
    }

    onSuccessCompanyListed = () => {
        this.setState({
            companyListedStatus: true
        })
    }

    renderSuccessBlock = () => {
        return (
            <div className="content">
                <div className="heading">Thank you for submitting you company.</div>
                <p>You will be contacted by one of our agent with 2 working days to verify your submission</p>
                <div className="heading">
                    <button type="button" className="button" onClick={() => this.props.closeModal()}> OK</button>
                </div>
            </div>
        )
    }

    render() {
        const { closeModal } = this.props;
        return <div className="getListed">
            <div className="header">
                <div>
                    <span>GET COMPANY LISTED</span>
                    <hr />
                </div>
                <img src={ Close } onClick={ () => closeModal() } />
            </div>
            {
                this.state.companyListedStatus 
                ? 
                this.renderSuccessBlock()
                :
                <div className="content">
                    <div className="heading">Become a part of our directory</div>
                    <p>Please fill the form below :</p>
                    <Wizard onSuccessCompanyListed={this.onSuccessCompanyListed} onSubmit={ ( data ) => {
                        console.log( data ) 
                    }} />
                </div>
            }
            
        </div>
    }
}