import authApi from 'api/AuthApi'
import { useAuth } from 'context/Auth'
import React from 'react'
import { Redirect, useHistory } from 'react-router'
import SignInForm from './SignInForm'

const SignInFormContainer = () => {
    const [auth, setAuth] = useAuth()
    const history = useHistory()

    if (auth) {
        return (
            <Redirect to='/' />
        )
    }

    const handleSubmit = async ({ email, password }) => {
        const authData = await authApi.signInAsync(email, password)
        setAuth(authData)
        history.replace('/')
    }

    return (
        <SignInForm onSubmit={handleSubmit} />
    )
}

export default SignInFormContainer

