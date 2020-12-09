/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { fontFamily } from "./fonts";
import {
    color,
} from "./colors";
import {
    handleNavbarPadding,
} from "./responsive";

/**
* Navbar Link Component.
*
* - Inherit React Router Link to style it.
* - Defaults to color contrast with a light background color.
*
* @param {Boolean} top indicates if browser is at the top of the page
*/
export const NavbarLink = styled(NavLink).attrs((props) => ({
    top: props.top || true,
}))`
    font-family: ${fontFamily.secondary};
    color: ${(props) =>
        props.top ? color.grey.shade.dark : color.grey.tint.light};
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 0;
    margin: 0 0.75rem;
    border-radius: 0.25rem;
    transition: ease-in-out 0.3s;

    &:hover {
        ${(props) => css` /* eslint indent enforce workaround */
            background-color:
            ${props.top ? color.grey.shade.dark : color.grey.tint.light};
            color:
            ${props.top ? color.white : color.grey.shade.dark};
        `}
        padding: 0.25rem 0.75rem;
        margin: 0;
    }

    &.active {
        background-color: ${(props) =>
        props.top ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.top ? color.white : color.grey.shade.dark};
        opacity: 0.85;
        padding: 0.25rem 0.4rem;
        margin: 0 0.35rem;

        /** Dynamic transitioning */
        ${(props) => props.top ?
        css`
            transition: background-color 0.3s ease-in-out 0s,
                        color 0.3s ease-in-out 0s,
                        padding 0.3s ease-in-out 0s,
                        margin 0.3s ease-in-out 0s,
                        opacity 0.3s ease-in-out 0s;
        ` :
        css`
            transition: background-color 0.3s ease-in-out 0.3s,
                        color 0.3s ease-in-out 0.3s,
                        padding 0.3s ease-in-out 0s,
                        margin 0.3s ease-in-out 0s,
                        opacity 0.3s ease-in-out 0s;
        `}

        &:hover {
            opacity: 1;
            padding: 0.25rem 0.75rem;
            margin: 0;
            border-radius: 0.25rem;
            transition: ease-in-out 0.25s;
        }
    }

    &.dark-background {
        color: ${color.grey.tint.lighter};

        &:hover {
            ${(props) => css` /* eslint indent enforce workaround */
                background-color:
                ${props.top ? color.grey.shade.dark : color.grey.tint.light};
                color:
                ${props.top ? color.white : color.grey.shade.dark};
            `}
        }
    }

    &.dark-background.active {
        background-color: ${(props) =>
        props.top ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.top ? color.white : color.grey.shade.dark};
    }
`;

/**
 * Navigation bar Component.
 *
 * @param {Boolean} scrolledUp indicates if user scrolled up or not
 * @param {Boolean} top indicates if browser is at the top of the page
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const Navbar = styled.nav.attrs((props) => ({
    scrolledUp: props.scrolledUp,
    top: props.top || true,
    viewport: {
        type: props.type || "default",
    },
}))`
    margin: 0;
    display: inline-block;
    width: 100%;
    z-index: 100;
    top: ${(props) => props.scrolledUp ? 0 : "-6rem"};
    transition: top 0.3s ease-in-out 0.3s;

    /** Responsive Design Styling */
    padding: ${(props) => handleNavbarPadding(props.viewport.type)};

    color: ${(props) =>
        props.top ? color.grey.shade.dark : color.grey.tint.light};
    background-color: ${(props) =>
        props.top ? "transparent" : color.grey.shade.dark};
    position: fixed;

    /** Dynamic transitioning */
    ${(props) => props.top ?
        css`
        transition: top 0.3s ease-in-out 0.3s,
                    background-color 0.3s ease-in-out 0s,
                    color 0.3s ease-in-out 0s;
    ` :
        css`
        transition: top 0.3s ease-in-out 0s,
                    background-color 0.3s ease-in-out 0.3s,
                    color 0.3s ease-in-out 0.3s;
    `}

    &.sidebar-nav {
        height: 100%;
        z-index: 100; /* Stay on top */
        position: fixed;
        overflow: hidden; /* Disable scroll */
        transition: 0.5s;
        top: 0;
        left: 0;
    }

    &.dark-background {
        color: ${(props) =>
        props.top ? color.grey.tint.neutral : color.grey.tint.light};
        background-color: ${(props) =>
        props.top ? "transparent" : color.grey.shade.dark};
        position: fixed;
    }
`;
