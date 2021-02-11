import React from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an Auth0 sign up button.
 *
 * - When clicked, the user is redirected to sign up for an account
 * using Auth0.
 *
 * @return {Component} Auth0 log in button.
 */
const SignupButton = ({
    className = "",
    noStyle = false,
    left = false,
    right = false,
}) => {
    const { loginWithRedirect } = useAuth0();

    /**
     * onClick handler function which redirects the user
     * to the account sign up page for Auth0.
     */
    const handleOnClick = () => {
        loginWithRedirect({
            screen_hint: "signup",
            /** Pass the current url so Auth0 knows what to redirect back to */
            appState: {
                returnTo: window.location.pathname,
            },
        });
    };

    const content = noStyle ?
        (
            <a onClick={handleOnClick}>
                Sign Up
            </a>
        ) :
        (
            <S.Button
                className={`auth signup uppercase ${className}`}
                $radius="0.4rem"
                onClick={handleOnClick}
                left={left}
                right={right}>
                Sign up
            </S.Button>
        );

    return (
        content
    );
};

SignupButton.propTypes = {
    /**
     * The class name to be passed onto styled-components Button.
     * - As the LoginButton React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
    /**
     * Flag indicating if the button should contain no CSS styling.
     * - Useful for things like putting it inside a DropdownMenu.
     */
    noStyle: PropTypes.bool,
    /**
     * Flag indicating if the button should be positioned to the left.
     */
    left: PropTypes.bool,
    /**
    * Flag indicating if the button should be positioned to the right.
    */
    right: PropTypes.bool,
};

export default SignupButton;
