import React, { Component } from 'react'
import SummarySection from './SummarySection'
import GeneralInfoSection, { DEFAULT_GENERAL_INFO } from './GeneralInfoSection'

export class ProfileRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            profileData: {
                generalInfo: DEFAULT_GENERAL_INFO
            }
        }
    }

    handleGeneralInfoChange(generalInfo) {
        this.setState(s => ({ profileData: { ...s.profileData, generalInfo } }))
    }

    render() {
        return (
            <div className="section">
                <GeneralInfoSection onChange={this.handleGeneralInfoChange.bind(this)} />
                <SummarySection profile={this.state.profileData} />
            </div>
        )
    }
}

export default ProfileRegistration
