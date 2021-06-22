import React from 'react'
import MainTitle from './MainTitle'
import MainPaper from './MainPaper'
import { AppBar, Toolbar } from '@material-ui/core'
import AuthButton from './AuthButton'
import AuthDebug from './sign-in/AuthDebug'

const MainPage = () => {
    return (
        <MainPaper>
            <AppBar position="static">
                <Toolbar>
                    <AuthButton color="inherit" />
                </Toolbar>
            </AppBar>
            <AuthDebug />
            <MainTitle />
        </MainPaper>
    )
}

export default MainPage
