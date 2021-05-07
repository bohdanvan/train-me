import React, { Component } from 'react'
import BioInput from './BioInput'
import BirthDateInput from './BirthDateInput'
import GenderInput from './GenderInput'

export class AboutMeSection extends Component {

    constructor(props) {
        super(props)
        this.state = {
            birthDate: null,
            gender: null,
            bio: null
        }
    }

    handleOnSumbit() {
        this.props.onSumbit(this.state)
    }

    render() {
        return (
            <div className="profile-reg__section">
                <h2 className="profile-reg__header">About Me</h2>
                <form className="profile-reg__form">
                    <BirthDateInput
                        value={this.state.name}
                        onChange={birthDate => this.setState({ birthDate })} />
                    <GenderInput
                        value={this.state.username}
                        onChange={gender => this.setState({ gender })} />
                    <BioInput
                        value={this.state.email}
                        onChange={bio => this.setState({ bio })} />
                    <input
                        className="profile-reg__submit-btn"
                        type="button" 
                        value="Submit"
                        onClick={() => this.handleOnSumbit()} />
                </form>
            </div>
        )
    }
}

export default AboutMeSection
