import React from 'react'

const BioInput = ({ value, onChange }) => (
    <div className="profile-reg__input-block">
        <textarea
            className="profile-reg__input"
            id="bio-input"
            name="bio"
            placeholder="Tell about you"
            value={value}
            onChange={e => onChange(e.currentTarget.value)} />
        <label
            className="profile-reg__label"
            htmlFor="bio-input">
            Bio
        </label>
    </div>
)

export default BioInput
