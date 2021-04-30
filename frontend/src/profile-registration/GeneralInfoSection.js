import React, { Component } from 'react'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import UsernameInput from './UsernameInput'

export const DEFAULT_GENERAL_INFO = {
    name: "",
    username: "",
    email: ""
}

export class GeneralInfoSection extends Component {

    constructor(props) {
        super(props)
        this.state = { generalInfo: DEFAULT_GENERAL_INFO }
    }

    handleNameChange(name) {
        this.setState(
            s => ({ generalInfo: { ...s.generalInfo, name } }),
            () => this.onStateChange()
        )
    }

    handleUsernameChange(username) {
        this.setState(
            s => ({ generalInfo: { ...s.generalInfo, username } }),
            () => this.onStateChange()
        )
    }

    handleEmailChange(email) {
        this.setState(
            s => ({ generalInfo: { ...s.generalInfo, email } }),
            () => this.onStateChange()
        )
    }

    onStateChange() {
        this.props.onChange(this.state.generalInfo)
    }

    render() {
        return (
            <div>
                <h2>General info</h2>
                <form className="form-label form-css-label">
                    <NameInput onChange={this.handleNameChange.bind(this)} />
                    <UsernameInput onChange={this.handleUsernameChange.bind(this)} />
                    <EmailInput onChange={this.handleEmailChange.bind(this)} />
                </form>
            </div>
        )
    }
}

export default GeneralInfoSection
