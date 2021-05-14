import { Paper } from '@material-ui/core'
import React from 'react'
import Background from './img/background.jpg'

const MainPaper = ({ children }) => (
    <Paper style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundImage: `url(${Background})`,
        backgroundPositionX: 'center',
        backgroundPositionY: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        backgroundSize: 'cover'
    }}>
        {children}
    </Paper>
)

export default MainPaper

