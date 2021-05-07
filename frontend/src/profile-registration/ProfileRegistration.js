import React, { Component } from 'react'
import SummarySection from './SummarySection'
import GeneralInfoSection, { DEFAULT_GENERAL_INFO } from './GeneralInfoSection'
import AboutMeSection from './AboutMeSection'
import './style.scss'

export class ProfileRegistration extends Component {

    constructor(props) {
        super(props)
        this.state = {
            generalInfo: DEFAULT_GENERAL_INFO,
            aboutMe: null
        }
    }

    handleGeneralInfoChange(generalInfo) {
        this.setState({ generalInfo })
    }

    handleAboutMeSumbit(aboutMe) {
        this.setState({ aboutMe })
    }

    render() {
        return (
            <div className="profile-reg">
                <GeneralInfoSection onChange={generalInfo => this.handleGeneralInfoChange(generalInfo)} />
                <AboutMeSection onSumbit={aboutMe => this.handleAboutMeSumbit(aboutMe)} />
                <SummarySection profile={{ ...this.state }} />
            </div>
        )
    }
}

export default ProfileRegistration
