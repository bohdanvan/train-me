import { makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import Background from './img/background.jpg'

const useStyles = makeStyles({
    root: {
        top: 0,
        left: 0,
        position: 'absolute',
        height: '100%',
        width: '100%',
        
        backgroundImage: `url(${Background})`,
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    }
})

const MainPaper = ({ children }) => {
    const classes = useStyles()
    return (
        <Paper className={classes.root}>
            {children}
        </Paper>
    )
}

export default MainPaper
