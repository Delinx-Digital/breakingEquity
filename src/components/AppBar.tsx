import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Chip } from '@material-ui/core';
import { BarChart2, Layers, Zap, User, Menu } from 'react-feather';
import Logo from './Logo';

const useStyles = makeStyles({
    headerWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
    },
    column: {
        display: 'flex',
        alignItems: 'center',
    },
    logo: {
        marginLeft: 20,
        display: 'block',
    },
    notifications: {
        marginRight: 10,

        '& > div': {
            marginRight: 10,

            '&:last-child': {
                marginRight: 0,
            }
        }
    }
});

const Notification = withStyles({
    root: {
        backgroundColor: 'transparent',
    },
    icon: {
        marginRight: 0,
    }
})(Chip);

const AccountButton = withStyles({
    root: {
        backgroundColor: 'transparent',
    },
    icon: {
        marginRight: 0,
    }
})(Chip);

const notifications = [
    {
        name: 'test',
        icon: BarChart2,
        value: 1,
        to: '/',
    },
    {
        name: 'test',
        icon: Layers,
        value: 2,
        to: '/',
    },
    {
        name: 'test',
        icon: Zap,
        value: 3,
        to: '/',
    }
];

const AppBarComponent = ()=> {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar color="default">
            <Toolbar>
                <div className={classes.headerWrapper}>
                    <div className={classes.column}>
                        <IconButton>
                            <Menu />
                        </IconButton>
                        <Link to="/" className={classes.logo}>
                            <Logo />
                        </Link>
                    </div>

                    <div className={classes.column}>
                        <div className={classes.notifications}>
                            {notifications.map(({ name, icon: Icon, value, to }, key)=> (
                                <Notification
                                    key={`${name}-${key}`}
                                    size="small"
                                    label={value}
                                    icon={<Icon />}
                                    onClick={()=> history.push(to)}
                                />
                            ))}
                        </div>

                        <AccountButton
                            size="small"
                            icon={<User/>}
                            label="Morgan Smith"
                            onClick={()=> history.push('/')}
                        />
                    </div>
                </div>
            </Toolbar>
        </AppBar>
    )
};

export default AppBarComponent;