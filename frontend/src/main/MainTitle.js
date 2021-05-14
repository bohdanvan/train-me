import { Box, Typography } from '@material-ui/core'
import React from 'react'

const MainTitle = () => (
    <Box display="flex"
        height="400px"
        alignItems="center"
        justifyContent="center">
        <Typography variant='h1' style={{
            color: 'white',
            textShadow: '0 0 4px #000'
        }}>TrainMe</Typography>
    </Box>
)

export default MainTitle
