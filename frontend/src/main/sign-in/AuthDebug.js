import { useAuth } from 'context/Auth'
import React from 'react'

const AuthDebug = () => {
    const [auth] = useAuth()
    return (
        <h1 style={{ color: 'white' }}>
            {`Auth = ${JSON.stringify(auth)}`}
        </h1>
    )
}

export default AuthDebug
