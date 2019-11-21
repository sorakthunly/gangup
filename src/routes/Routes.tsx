import React from 'react';
import { Redirect, Route, Switch } from 'react-router-native';

import Login from '../authentication/Login';
import MyEvents from '../events/myEvents/MyEvents';
import NewEvent from '../events/newEvent/NewEvent';
import ProtectedRoute from './components/ProtectedRoute';
import PublicEvents from '../events/publicEvents/publicEvents';
import {
    LOGIN_URL,
    MY_EVENTS_URL,
    NEW_EVENT_URL,
    PUBLIC_EVENTS_URL,
} from './urlMap';

const Routes = () => (
    <Switch>
        <Route exact path={LOGIN_URL} component={Login} />
        <ProtectedRoute path={MY_EVENTS_URL} component={MyEvents} />
        <ProtectedRoute path={PUBLIC_EVENTS_URL} component={PublicEvents} />
        <ProtectedRoute path={NEW_EVENT_URL} component={NewEvent} />
        <Redirect from="/" to={LOGIN_URL} />
    </Switch>
);

export default Routes;
