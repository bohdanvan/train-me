import React, { Component } from 'react'
import SummarySection from './SummarySection'
import GeneralInfoSection, { DEFAULT_GENERAL_INFO } from './GeneralInfoSection'
import './style.scss'

export class ProfileRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            generalInfo: DEFAULT_GENERAL_INFO
        }
    }

    handleGeneralInfoChange(generalInfo) {
        this.setState({ generalInfo })
    }

    render() {
        return (
            <div className="profile-reg">
                <GeneralInfoSection onChange={generalInfo => this.handleGeneralInfoChange(generalInfo)} />
                <SummarySection profile={{ ...this.state }} />
            </div>
        )
    }
}

export default ProfileRegistration
