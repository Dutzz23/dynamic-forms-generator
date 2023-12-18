import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import AuthConfig from "../../connection/AuthConfig";

const PrivateRoute = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                AuthConfig.isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    <Navigate to="/login"/>
                )
            }
        />
    );
}
export default PrivateRoute;