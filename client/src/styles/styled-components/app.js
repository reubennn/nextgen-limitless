/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { color } from "./colors";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ App Container ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Main container for the React App.
 */
export const Container = styled.div`
    margin: 1rem;
    color: ${color.grey.shade.dark};
    width: auto;
    height: 100vh;
    min-height: 100vh;
    margin: 0;

    /* Ensures the Footer does not go above the bottom of the screen */
    display: flex;
    flex-direction: column;
`;
