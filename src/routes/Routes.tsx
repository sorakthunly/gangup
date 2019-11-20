import React from 'react';
import { Route, Switch } from 'react-router-native';

import Login from '../authentication/Login';
import MyEvent from '../events/myEvents/MyEvents';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/my-events" component={MyEvent} />
    </Switch>
);

export default Routes;
