import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
        display: 'flex',
        height: '400px',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        textShadow: '0 0 4px #000',
        color: 'white'
    }
})

const MainTitle = () => {
    const classes = useStyles()
    return (
        <Box className={classes.root}>
            <Typography variant='h1' className={classes.title}>TrainMe</Typography>
        </Box>
    )
}

export default MainTitle
