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
                    <div className="sidebar__drawer-content-navigation">
                        <h3>Theme</h3>
                        <ul>
                            <li>
                                <h2>Blue</h2>
                                <span className="sidebar__color-box blue"></span>
                            </li>
                            <li>
                                <h2>Green</h2>
                                <span className="sidebar__color-box green"></span>
                            </li>
                            <li>
                                <h2>Red</h2>
                                <span className="sidebar__color-box red"></span>
                            </li>
                        </ul>
                    </div>
                </div>
            </Drawer>
        </div>
    )
}

export default Sidebar
