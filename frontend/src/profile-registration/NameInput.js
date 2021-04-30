import React, { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'

export class NameInput extends Component {
    render() {
        const { onChange } = this.props
        const id = uuidv4()
        return (
            <fieldset>
                <input
                    id={id}
                    type="text"
                    name="name"
                    required
                    onChange={e => onChange(e.currentTarget.value)} />
                <label htmlFor={id}>Name</label>
            </fieldset>
        )
    }
}

export default NameInput
