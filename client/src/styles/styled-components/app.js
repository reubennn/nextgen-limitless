/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { color } from "./colors";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ App Container ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Main container for the React App.
 *
 * @param {Boolean} sidenav flag indicates sidebar nav is active
 */
export const Container = styled.div`
    color: ${color.grey.shade.dark};
    min-height: 100vh;
    width: 100%;
    margin: 0;
    overflow: hidden;
    /* Push to right when sidebar nav is active */
    margin-left: ${(props) => props.sidenav ? "100%" : 0};
    transition: 0.5s;

    /* Ensures the Footer does not go above the bottom of the screen */
    display: flex;
    flex-direction: column;
`;
