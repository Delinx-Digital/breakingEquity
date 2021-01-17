import React from 'react';
import { AppBar } from 'react-admin';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import { Chip } from '@material-ui/core';
import { BarChart2, Layers, Zap, User, Menu } from 'react-feather';
import Logo from './Logo';

const useStyles = makeStyles({
    headerWrapper: {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px 0',
    },
    logo: {
        display: 'block',

        '& svg': {
            width: '132px',
            height: '50px',
        }
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
    },
    label: {
        fontWeight: 600,
    }
})(Chip);

const AccountButton = withStyles({
    root: {
        backgroundColor: 'transparent',
    },
    icon: {
        marginRight: 0,
    },
    label: {
        fontWeight: 600,
        color: grey[700],
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
        value: 0,
        to: '/',
    },
    {
        name: 'test',
        icon: Zap,
        value: 0,
        to: '/',
    }
];

const AppBarComponent = ()=> {
    const classes = useStyles();
    const history = useHistory();

    return (
        <AppBar color="default" userMenu={false}>
            <div className={classes.headerWrapper}>
                <Link to="/" className={classes.logo}><Logo /></Link>
                <div style={{ display: 'flex' }}>
                    <div className={classes.notifications}>
                        {notifications.map(({ name, icon: Icon, value, to }, key)=> {
                            const hasNotification = Boolean(value);

                            return (
                                <Notification
                                    key={`${name}-${key}`}
                                    size="small"
                                    label={value}
                                    icon={<Icon />}
                                    style={{ opacity: hasNotification ? 1 : 0.5}}
                                    onClick={()=> history.push(to)}
                                />
                            )
                        })}
                    </div>

                    <AccountButton
                        size="small"
                        icon={<User/>}
                        label="Morgan Smith"
                        onClick={()=> history.push('/')}
                    />
                </div>
            </div>
        </AppBar>
    )
};

export default AppBarComponent;
