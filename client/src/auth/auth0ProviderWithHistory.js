import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

/**
 * Gives the Auth0Provider access to React Router history so that
 * we can redirect the user back to the page they were on before
 * logging or signing up to Auth0.
 *
 * @return {Component} the Auth0Provider with access to history
 */
const Auth0ProviderWithHistory = ({ children }) => {
    const domain = process.env.REACT_APP_AUTH0_DOMAIN;
    const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
    const audience = process.env.REACT_APP_AUTH0_AUDIENCE;

    /** Get the history object from React Router */
    const history = useHistory();

    /**
     * Callback function when redirected back from Auth0 which sends the user
     * back to url they were on before being redirected to Auth0.
     *
     * - If appState is defined, use the returnTo property to go back to the
     * url before being redirected to Auth0, otherwise go back to the origin.
     *
     * @param {*} appState app state before doing the redirect
     */
    const onRedirectCallback = (appState) => {
        /** Use React Router's history module to replace the url */
        history.replace(appState?.returnTo || window.location.pathname);
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
            onRedirectCallback={onRedirectCallback}
            audience={audience}>
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
