import React, { Component } from 'react'
import EmailInput from './EmailInput'
import NameInput from './NameInput'
import UsernameInput from './UsernameInput'

export const DEFAULT_GENERAL_INFO = Object.freeze({
    name: "",
    username: "",
    email: ""
})

export class GeneralInfoSection extends Component {

    constructor(props) {
        super(props)
        this.state = DEFAULT_GENERAL_INFO
    }

    handleNameChange(name) {
        this.setState({ name }, () => this.onStateChange())
    }

    handleUsernameChange(username) {
        this.setState({ username }, () => this.onStateChange())
    }

    handleEmailChange(email) {
        this.setState({ email }, () => this.onStateChange())
    }

    onStateChange() {
        this.props.onChange({ ...this.state })
    }

    render() {
        return (
            <div className="profile-reg__section">
                <h2 className="profile-reg__header">General info</h2>
                <form className="profile-reg__form">
                    <NameInput
                        value={this.state.name}
                        onChange={name => this.handleNameChange(name)} />
                    <UsernameInput
                        value={this.state.username}
                        onChange={username => this.handleUsernameChange(username)} />
                    <EmailInput
                        value={this.state.email}
                        onChange={email => this.handleEmailChange(email)} />
                </form>
            </div>
        )
    }
}

export default GeneralInfoSection
