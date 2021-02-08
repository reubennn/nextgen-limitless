import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

/**
 * Gives the Auth0Provider access to React Router history.
 *
 * - from: https://auth0.com/blog/complete-guide-to-react-user-authentication/
 *
 * @return {Component} the Auth0Provider with access to history
 */
const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

    /** Get the history object from React Router */
    const history = useHistory();

    /**
     * Send user back to intended route.
     *
     * @param {*} appState app state before doing the redirect
     */
    const onRedirectCallback = (appState) => {
        history.push(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}>
            {children}
        </Auth0Provider>
    );
};

Auth0ProviderWithHistory.propTypes = {
    /**
     * The children of the Component.
     */
    children: PropTypes.object,
};

export default Auth0ProviderWithHistory;
