/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";

import { Icon } from "./general";
import { fontFamily } from "./fonts";
import {
    color,
    handleColor,
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
* -> props.$atTop must be a transient prop (using $ prefix),
* to avoid passing it to the underlying React node or rendering
* it to the DOM element.
*   - Required to remove not recognized warning/error.
*
* @param {Boolean} $atTop indicates if browser is at the top of the page
*/
export const NavbarLink = styled(NavLink).attrs((props) => ({
    $atTop: props.$atTop,
}))`
    font-family: ${fontFamily.secondary};
    color: ${(props) =>
        props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
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
            ${props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
            color:
            ${props.$atTop ? color.white : color.grey.shade.dark};
        `}
        padding: 0.25rem 0.75rem;
        margin: 0;
    }

    &.active {
        background-color: ${(props) =>
        props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.$atTop ? color.white : color.grey.shade.dark};
        opacity: 0.85;
        padding: 0.25rem 0.4rem;
        margin: 0 0.35rem;

        /** Dynamic transitioning */
        ${(props) => props.$atTop ?
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
                ${props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
                color:
                ${props.$atTop ? color.white : color.grey.shade.dark};
            `}
        }
    }

    &.dark-background.active {
        background-color: ${(props) =>
        props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.$atTop ? color.white : color.grey.shade.dark};
    }
`;

/**
 * Navigation bar Component.
 *
 * -> props.$atTop must be a transient prop (using $ prefix),
* to avoid passing it to the underlying React node or rendering
* it to the DOM element.
*   - Required to remove not recognized warning/error.
 *
 * @param {Boolean} scrolledUp indicates if user scrolled up or not
 * @param {Boolean} $atTop indicates if browser is at the top of the page
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const Navbar = styled.nav.attrs((props) => ({
    scrolledUp: props.scrolledUp,
    $atTop: props.$atTop,
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
        props.$atTop ? color.grey.shade.dark : color.grey.tint.light};
    background-color: ${(props) =>
        props.$atTop ? "transparent" : color.grey.shade.dark};
    position: fixed;

    /** Dynamic transitioning */
    ${(props) => props.$atTop ?
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
        /* color: ${color.grey.tint.light};
        background-color: ${color.grey.shade.dark}; */
    }

    &.dark-background {
        color: ${(props) =>
        props.$atTop ? color.grey.tint.neutral : color.grey.tint.light};
        background-color: ${(props) =>
        props.$atTop ? "transparent" : color.grey.shade.dark};
        position: fixed;
    }
`;

/**
 * Navigation Bar Icon Component displayed from a SVG image file.
 *
 * -> props.$atTop must be a transient prop (using $ prefix),
* to avoid passing it to the underlying React node or rendering
* it to the DOM element.
*   - Required to remove not recognized warning/error.
 *
 * @param {String} height the height of the icon
 * @param {String} width the width of the icon
 * @param {Number} fill the fill color
 * @param {String} bgColor the background color for color invert
 * @param {Boolean} $atTop indicates if browser is at the top of the page
 */
export const NavIcon = styled(Icon).attrs((props) => ({
    $atTop: props.$atTop,
}))`
    margin: auto 0;
    fill: ${(props) =>
        props.$atTop ? color.grey.shade.dark : color.grey.tint.light};

    &:hover {
        fill: ${(props) => props.$atTop ? color.black : color.white};
    }

    &.dark-background {
        fill: ${color.grey.tint.light};

        &:hover {
            fill: ${color.white};
        }
    }
`;
