import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { grey, blue } from '@material-ui/core/colors';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';

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

//TODO: Adding interface here
const Menu = ({ onMenuClick }: any) => {
    const classes = useStyles();
    //TODO: Adding interface here
    const {sidebarOpen} = useSelector((state: any) => state.admin.ui);
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
