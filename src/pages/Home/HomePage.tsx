import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

import "./homepage.scss";

const HomePage = () => {
    const [drawerState, setDrawerState] = useState(false);

    // HANDLE DRAWER STATE FUNCTION
    const handleDrawerState = (state: boolean) => {
        setDrawerState(state);
    };

    return (
        <div className="home__container">
            {/* NAVBAR COMPONENT */}
            <Navbar />
            {/* SIDEBAR COMPONENT */}
            <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
        </div>
    )
}

export default HomePage;
