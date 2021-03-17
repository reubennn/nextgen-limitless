/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import { withAuthenticationRequired } from "@auth0/auth0-react";

import Loading from "../pages/Loading";

/**
 * React Router Component used to protect a router endpoint so that
 * it is only accessible if the user is authenticated with Auth0.
 *
 * @return {Component} React Router protected endpoint
 */
const ProtectedRoute = ({ component, ...args }) => {
    return (
        <Route
            component={withAuthenticationRequired(component, {
                /**
                 * Function which displays a blank loading screen
                 * while loading.
                 *
                 * @return {Component} loading page
                 */
                onRedirecting: () => <Loading />,
            })}
            {...args}
        />
    );
};

ProtectedRoute.propTypes = {
    /**
     * The React Component to be passed to the protected route.
     */
    component:
        PropTypes.oneOfType([
            PropTypes.func,
            /** For React Lazy Loading */
            PropTypes.object,
        ]),
    /**
     * Any additional arguments for the component.
     */
    args: PropTypes.object,
};

export default ProtectedRoute;
