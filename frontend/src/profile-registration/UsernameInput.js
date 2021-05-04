import React from 'react'

const UsernameInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <input
            className="profile-reg__input"
            id="username-input"
            type="text"
            name="username"
            value={value}
            required
            onChange={e => onChange(e.currentTarget.value)} />
        <label
            className="profile-reg__label"
            htmlFor="username-input">
            Username
        </label>
    </div>
)

export default UsernameInput
