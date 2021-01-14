/* eslint-disable valid-jsdoc */
import styled from "styled-components";
import { Link } from "react-router-dom";

import {
    color,
    handleColor,
} from "./colors";

/**
 * Router Link Component.
 *
 * Inherits React Router Link functionality.
 * Allows the use of styled-components to style it.
 */
export const RouterLink = styled(Link)`
    color: ${(props) => handleColor(props.color)};
    margin: auto;
    transition: ease-in-out 0.25s;

    &:hover {
        color: ${color.grey.shade.dark};
    }
`;

/**
 * Router Link Button  Component.
 *
 * Inherits Router Link Component so it has React Router Link functionality.
 */
export const RouterLinkButton = styled(RouterLink)`
    & {
        font-size: 1.2rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        padding: 0.25rem 0.75rem;
    }
`;

/**
 * Tiny Router Link Component.
 *
 * Like the RouterLink component, but small.
 *
 * Inherits React Router Link functionality.
 * Allows the use of styled-components to style it.
 */
export const TinyRouterLink = styled(Link)`
    & {
        color: ${(props) => handleColor(props.color)};
        font-size: 0.75rem;
        margin: 0 0.85rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        color: #303030;
        padding: 0.25rem 0.75rem;
        margin: 0 0.2rem;
    }
`;
