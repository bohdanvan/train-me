import React from 'react'

const BirthDateInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <input
            className="profile-reg__input"
            id="bio-input"
            type="date"
            name="birthDate"
            value={value}
            onChange={e => onChange(e.currentTarget.value)} />
        <label
            className="profile-reg__label"
            htmlFor="bio-input">
            Email
        </label>
    </div>
)

export default BirthDateInput
