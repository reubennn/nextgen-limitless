import React from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an Auth0 log out button.
 *
 * - When clicked, the user is logged out of their Auth0 account.
 *
 * @return {Component} Auth0 log out button.
 */
const LogoutButton = ({
    className = "",
    noStyle = false,
    left = false,
    right = false,
}) => {
    /** Use below if only authenticating on client side */
    const { logout } = useAuth0();

    /**
     * onClick handler function which redirects the user back to the
     * home page when they log out.
     */
    const handleOnClick = () => {
        // window.location.href =
        //     `${process.env.REACT_APP_SERVER_URL}/auth/logout`;

        /** Use below if only authenticating on client side */
        logout({
            returnTo: window.location.origin,
        });
    };

    const content = noStyle ?
        (
            <a onClick={() => handleOnClick()}>
                Log out
            </a>
        ) :
        (
            <S.Button
                className={`auth logout uppercase ${className}`}
                $radius="0.4rem"
                onClick={handleOnClick}
                left={left}
                right={right}>
                Log out
            </S.Button>
        );

    return (
        content
    );
};

LogoutButton.propTypes = {
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

export default LogoutButton;
