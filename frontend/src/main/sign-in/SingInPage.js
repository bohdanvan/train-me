import { makeStyles, Paper, Typography } from '@material-ui/core'
import MainPaper from 'main/MainPaper'
import React from 'react'
import { Link } from 'react-router-dom'
import SignInFormContainer from './SignInFormContainer'

const useStyles = makeStyles((theme) => ({
    paper: {
        width: 'auto',
        marginLeft: theme.spacing(3),
        marginRight: theme.spacing(3),
        [theme.breakpoints.up(620 + theme.spacing(6))]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
    }
}))

const SingInPage = () => {
    const classes = useStyles()
    return (
        <MainPaper>
            <Paper className={classes.paper} elevation={6}>
                <div className={classes.container}>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <SignInFormContainer />
                    <Link to="/register">Register</Link>
                </div>
            </Paper>
        </MainPaper>
    )
}

export default SingInPage
