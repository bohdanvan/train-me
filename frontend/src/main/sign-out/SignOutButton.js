import { Button } from '@material-ui/core'
import { useAuth } from 'context/Auth'
import React from 'react'
import authApi from 'api/AuthApi'

const SignOutButton = (props) => {
    const [auth, setAuth] = useAuth()

    const handleClick = async () => {
        // @ts-ignore
        await authApi.signOutAsync(auth.token)
        setAuth(null)
    }

    return (
        <Button {...props} onClick={handleClick}>Sign out</Button>
    )
}

export default SignOutButton
