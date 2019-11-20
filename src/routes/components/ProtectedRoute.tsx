import React, { useEffect, useState } from 'react';
import { Redirect, Route } from 'react-router-native';
import { Spinner } from 'react-native-ui-kitten';

import { checkIsAuthenticated } from '../../authentication/authenticationHelpers';
import { LOGIN_URL } from '../urlMap';

const ProtectedComponentWrapper = ({ protectedComponent: ProtectedComponent, ...rest }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    
    useEffect(() => {
        checkIsAuthenticated().then(result => setIsAuthenticated(result));
    }, []);

    if (isAuthenticated === null) return <Spinner size='giant'/>;

    if (isAuthenticated) return <ProtectedComponent {...rest} />;

    return <Redirect to={LOGIN_URL} />;
};

const ProtectedRoute = ({ component: ProtectedComponent, ...rest }) => (
    <Route
        {...rest}
        render={routeProps => (
            <ProtectedComponentWrapper
                {...routeProps}
                protectedComponent={ProtectedComponent}
            />
        )}
    />
);

export default ProtectedRoute;
