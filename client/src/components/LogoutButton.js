import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an Auth0 log out button.
 *
 * - When clicked, the user is logged out of their Auth0 account.
 *
 * @return {Component} Auth0 log out button.
 */
const LogoutButton = ({ className = "", noStyle = false }) => {
    const { logout } = useAuth0();

    /**
     * onClick handler function which redirects the user back to the
     * home page when they log out.
     */
    const handleOnClick = () => {
        logout({
            returnTo: window.location.origin,
        });
    };

    return (
        noStyle ?
            (
                <a onClick={() => handleOnClick()}>
                    Log out
                </a>
            ) :
            (
                <S.Button
                    className={`auth logout uppercase ${className}`}
                    $radius="0.4rem"
                    onClick={handleOnClick}>
                    Log out
                </S.Button>
            )
    );
};

export default LogoutButton;
