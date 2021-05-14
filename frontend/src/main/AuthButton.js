import { useAuth } from 'context/Auth'
import React from 'react'
import SignInButton from './sign-in/SignInButton'
import SignOutButton from './sign-out/SignOutButton'

const AuthButton = (props) => {
    const [auth] = useAuth()

    if (auth) {
        return <SignOutButton {...props} />
    } else {
        return <SignInButton {...props} />
    }
}

export default AuthButton
