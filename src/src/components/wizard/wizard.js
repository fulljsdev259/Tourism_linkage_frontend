
import React, { Component } from 'react'

import PropTypes from 'prop-types'
import WizardFormFirstPage from './WizardFormFirstPage'
import WizardFormSecondPage from './WizardFormSecondPage'
import WizardFormThirdPage from './WizardFormThirdPage'





class WizardForm extends Component {
    constructor(props) {
        super(props)
        this.nextPage = this.nextPage.bind(this)
        this.previousPage = this.previousPage.bind(this)
        this.state = {
            page: 1
        }
    }
    nextPage() {
        this.setState({ page: this.state.page + 1 })
    }

    previousPage() {
        this.setState({ page: this.state.page - 1 })
    }

    render() {
        const { onSubmit } = this.props
        const { page } = this.state
        const initialValues = {
            workingDay: [
                { day: "Monday", openClose: "Open", fromHour: "10:00 AM", toHour: "5:00 PM" },
                { day: "Tuesday", openClose: "Open", fromHour: "10:00 AM", toHour: "5:00 PM"},
                { day: "Wednesday", openClose: "Open", fromHour: "10:00 AM", toHour: "5:00 PM" },
                { day: "Thrusday", openClose: "Open",fromHour: "10:00 AM", toHour: "5:00 PM"},
                { day: "Friday", openClose: "Open", fromHour: "10:00 AM", toHour: "5:00 PM" },
                { day: "Saturday", openClose: "Closed", fromHour: "10:00 AM", toHour: "5:00 PM" },
                { day: "Sunday", openClose: "Closed", fromHour: "10:00 AM", toHour: "5:00 PM" },


            ]
        };
        return (
            <div>
                {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
                {page === 2 && (
                    <WizardFormSecondPage
                        previousPage={this.previousPage}
                        onSubmit={this.nextPage}

                    />
                )}
                {page === 3 && (
                    <WizardFormThirdPage
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                        initialValues={initialValues}
                        onSuccessCompanyListed={this.props.onSuccessCompanyListed}
                    />
                )}
            </div>
        )
    }
}

WizardForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default WizardForm