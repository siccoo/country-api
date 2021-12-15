import React from 'react';
import { Drawer } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import "./sidebar.scss";
interface SidebarProps {
    onClick: Function,
    drawerState: boolean
}

const Sidebar = (props: SidebarProps) => {

    const {onClick, drawerState} = props

    // ON DRAWER CLOSE FUNCTION
    const onDrawerClose = () => {
        // CLOSING THE DRAWER FUNCTION
        onClick(!drawerState)
    }
    return (
        <div className="sidebar">
            {/* DRAWER COMPONENT */}
            <Drawer anchor="right" open={drawerState} onClick={onDrawerClose} className="sidebar__drawer">
                <div className="sidebar__drawer-content">
                    <CloseIcon onClick={onDrawerClose} className="sidebar__drawer-close-menu" />
                    {/* THEME COMPONENTS */}
                    <div className="sidebar__drawer-navigation">
                        <h5>Theme</h5>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Sidebar
