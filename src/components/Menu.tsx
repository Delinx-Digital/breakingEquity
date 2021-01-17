import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';

const useStyles = makeStyles({
    sideBar: {
        background: '#fff',
        height: '100%',
        paddingTop: 40,
    },
});

//TODO: Adding interface here
const Menu = ({ onMenuClick }: any) => {
    const classes = useStyles();
    //TODO: Adding interface here
    const {sidebarOpen} = useSelector((state: any) => state.admin.ui);
    const resources = useSelector(getResources);

    return (
        <div className={classes.sideBar}>
            {resources.map(({ name, options, icon: Icon }: any) => (
                <MenuItemLink
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
