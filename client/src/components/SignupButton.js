import React from "react";
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
const LoginButton = ({ className = "", noStyle = false }) => {
    const { loginWithRedirect } = useAuth0();

    /**
     * onClick handler function which redirects the user
     * to the account sign up page for Auth0.
     */
    const handleOnClick = () => {
        loginWithRedirect({
            screen_hint: "signup",
        });
    };

    return (
        noStyle ?
            (
                <a onClick={handleOnClick}>
                    Sign Up
                </a>
            ) :
            (
                <S.Button
                    className={`auth signup uppercase ${className}`}
                    $radius="0.4rem"
                    onClick={handleOnClick}>
                    Sign up
                </S.Button>
            )
    );
};

export default LoginButton;
