import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router-dom'

const SignInButton = (props) => {
    const history = useHistory()
    return (
        <Button {...props} onClick={() => history.push('/sign-in')}>Sign in</Button>
    )
}

export default SignInButton
