import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class UsernameInput extends Component {
    render() {
        const { onChange } = this.props
        const id = uuidv4()
        return (
            <fieldset>
                <input
                    id={id}
                    type="text"
                    name="username"
                    required
                    onChange={e => onChange(e.currentTarget.value)} />
                <label htmlFor={id}>Username</label>
            </fieldset>
        )
    }
}

export default UsernameInput
