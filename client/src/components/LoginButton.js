import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an Auth0 log in button.
 *
 * - When clicked, the user is redirected to Auth0 to log in.
 *
 * @return {Component} Auth0 log in button.
 */
const LoginButton = ({ className = "", noStyle = false }) => {
    const { loginWithRedirect } = useAuth0();
    return (
        noStyle ?
            (
                <a onClick={() => loginWithRedirect()}>
                    Log in
                </a>
            ) :
            (
                <S.Button
                    className={`auth login uppercase ${className}`}
                    $radius="0.4rem"
                    onClick={() => loginWithRedirect()}>
                    Log in
                </S.Button>
            )
    );
};

export default LoginButton;
