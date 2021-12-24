import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import CountryList from '../../components/CountryList/CountryList';
import { fetchAllCountries } from '../../redux/actions';

import "./homepage.scss";

const HomePage = () => {
    const [drawerState, setDrawerState] = useState(false);

    // INITIALIZE DISPATCH
    const dispatch = useDispatch()

    // DISPATCH fetchAllCountries 
    useEffect(() => {
        dispatch(fetchAllCountries())
    }, [dispatch])

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
            {/* <div className="home__container__content"> */}
                <CountryList />
            {/* </div> */}
        </div>
    )
}

export default HomePage;
