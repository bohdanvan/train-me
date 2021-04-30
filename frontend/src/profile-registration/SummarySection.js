import React, { Component } from 'react'

export class SummarySection extends Component {
    render() {
        const { profile } = this.props
        return (
            <div>
                <h2>Summary</h2>
                <pre>{JSON.stringify(profile, null, 2)}</pre>
            </div>
        )
    }
}

export default SummarySection
