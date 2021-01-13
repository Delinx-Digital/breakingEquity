import * as React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';


const Menu = ({ onMenuClick }: any) => {
    const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);

    return (
        <div style={{ background: '#fff', height: '100%' }}>
            {resources.map(({ name, options, icon: Icon }: any) => (
                <MenuItemLink
                    key={name}
                    to={`/${name}`}
                    primaryText={options?.label ?? name}
                    leftIcon={<Icon />}
                    onClick={onMenuClick}
                    sidebarIsOpen={open}
                />
            ))}
        </div>
    );
}

export default Menu;
