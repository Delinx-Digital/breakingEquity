import * as React from 'react';
import { useSelector } from 'react-redux';
import { MenuItemLink, getResources } from 'react-admin';


const Menu = ({ onMenuClick }: any) => {
    const open = useSelector((state: any) => state.admin.ui.sidebarOpen);
    const resources = useSelector(getResources);

    return (
        <div style={{ background: '#fff', height: '100%' }}>
            {resources.map((resource: any) => (
                <>
                    <MenuItemLink
                        key={resource.name}
                        to={`/${resource.name}`}
                        primaryText={resource?.options?.label ?? resource?.name}
                        onClick={onMenuClick}
                        sidebarIsOpen={open}
                    />
                </>
            ))}
        </div>
    );
}

export default Menu;
