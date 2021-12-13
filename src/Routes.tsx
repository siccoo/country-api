import React from 'react';
import HomePage from './pages/Home/HomePage';
import CountryPage from './pages/Country/CountryPage';
import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        {/* Render all page and component routes here */}
        <Route exact path="/" component={HomePage} />
        <Route path="/country/:id" component={CountryPage} />
    </Switch>
)

export default Routes;
