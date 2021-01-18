import React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources, ReduxState } from 'react-admin';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';

const useStyles = makeStyles({
    sideBar: {
        background: '#fff',
        height: '100%',
        paddingTop: 40,
        borderRight: `1px solid ${grey[300]}`,
    },
});

const MenuItem = withStyles({
    root: {
        fontWeight: 600,
        color: grey[600],
        paddingTop: 12,
        paddingBottom: 12,
    },
    icon: {
        color: grey[600],
    },
    active: {
        color: blue[500],
        '& svg': {
            color: blue[500],
        }
    }
})(MenuItemLink);

const Menu = ({ onMenuClick }: any) => {
    const classes = useStyles();
    const {sidebarOpen} = useSelector((state: ReduxState) => state.admin.ui);
    const resources = useSelector(getResources);

    return (
        <div className={classes.sideBar}>
            {resources.map(({ name, options, icon: Icon }: any) => (
                <MenuItem
                    key={name}
                    to={`/${name}`}
                    primaryText={options?.label ?? name}
                    leftIcon={<Icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={sidebarOpen}
                />
            ))}
        </div>
    );
}

export default Menu;
