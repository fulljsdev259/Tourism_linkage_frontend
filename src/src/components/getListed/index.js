import React from 'react';
import Close from '../../images/icon/cross.svg';
import './index.scss'
import Wizard from '../wizard/wizard';

export default class GetListed extends React.Component {
    constructor() {
        super();
        this.state = {
            generalInfo: true,
            companyInfo: false,
            contactInfo: false,
        }
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
            <div className="content">
                <div className="heading">Become a part of our directory</div>
                <p>Please fill the form below :</p>
                <Wizard onSubmit={ ( data ) => console.log( data ) } />


            </div>
        </div>
    }
}