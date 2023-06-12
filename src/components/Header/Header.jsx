import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import headerStyles from './Styles'

const Header = () => {
    const classes = headerStyles

  return (
    <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.title}>
                Encantado's Map
            </Typography>
        </Toolbar>
    </AppBar>
  )
}

export default Header