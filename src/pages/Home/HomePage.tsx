import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import CountryList from '../../components/CountryList/CountryList';

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
            <Navbar onClick={handleDrawerState} drawerState={drawerState} />
            {/* SIDEBAR COMPONENT */}
            <Sidebar onClick={handleDrawerState} drawerState={drawerState} />
            {/* COUNTRIES CONTENT COMPONENT */}
            <div className="home__container__content">
                <CountryList />
            </div>
        </div>
    )
}

export default HomePage;
