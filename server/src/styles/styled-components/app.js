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
 */
export const Container = styled.div`
    min-height: 100vh;
    width: 100%;
    margin: 0;
    overflow: hidden;
    color: ${color.white};
    background: linear-gradient(30deg,
                                ${color.blue.light} 5%,
                                ${color.purple.light} 150%);

    /* Ensures the Footer does not go above the bottom of the screen */
    display: flex;
    flex-direction: column;
`;
