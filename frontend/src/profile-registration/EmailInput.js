import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class EmailInput extends Component {
    render() {
        const { onChange } = this.props
        const id = uuidv4()
        return (
            <fieldset>
                <input
                    id={id}
                    type="email"
                    name="email"
                    required
                    onChange={e => onChange(e.currentTarget.value)} />
                <label htmlFor={id}>Email</label>
            </fieldset>
        )
    }
}

export default EmailInput
