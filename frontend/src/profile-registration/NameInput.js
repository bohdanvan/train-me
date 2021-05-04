import React from 'react'

const NameInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <input
            className="profile-reg__input"
            id="name-input"
            type="text"
            name="name"
            value={value}
            required
            onChange={e => onChange(e.currentTarget.value)} />
        <label
            className="profile-reg__label"
            htmlFor="name-input">
            Name
        </label>
    </div>
)

export default NameInput
