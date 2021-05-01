import React from 'react'

const SummarySection = ({ profile }) => (
    <div className="profile-reg__section">
        <h2 className="profile-reg__header">Summary</h2>
        <pre className="profile-reg__code">{JSON.stringify(profile, null, 2)}</pre>
    </div>
)

export default SummarySection
