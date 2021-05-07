import React from 'react'

const GenderInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <select
            className="profile-reg__input"
            id="gender-input"
            name="geneder"
            value={value}
            onChange={e => onChange(trimToNull(e.currentTarget.value))}>
            <option value="">Not selected</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
        </select>
        <label
            className="profile-reg__label"
            htmlFor="gender-input">Gender</label>
    </div>
)

function trimToNull(str) {
    return str === '' ? null : str
}

export default GenderInput
