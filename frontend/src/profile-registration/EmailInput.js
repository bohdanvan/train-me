import React from 'react'

const EmailInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <input
            className="profile-reg__input"
            id="email-input"
            type="email"
            name="email"
            value={value}
            required
            onChange={e => onChange(e.currentTarget.value)} />
        <label
            className="profile-reg__label"
            htmlFor="email-input">
            Email
        </label>
    </div>
)

export default EmailInput
