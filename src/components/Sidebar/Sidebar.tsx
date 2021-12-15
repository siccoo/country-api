import React from 'react';
import { Drawer } from '@material-ui/core';

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
                <p>Drawer Items</p>
                <p>Drawer Items</p>
                <p>Drawer Items</p>
            </Drawer>
        </div>
    )
}

export default Sidebar
