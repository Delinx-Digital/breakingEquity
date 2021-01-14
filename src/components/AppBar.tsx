import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Logo from './Logo'

const AppBarComponent = ()=> {
    return (
        <AppBar color="default">
            <Toolbar>
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Logo />
            </Toolbar>
        </AppBar>
    )
};

export default AppBarComponent;
