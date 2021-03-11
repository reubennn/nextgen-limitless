/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { Image } from "./general";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~ Website Logo ~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Logo Image Component to style the website logo.
*
* @param {String} height height of the image
* @param {String} width width of the image
*/
export const LogoImage = styled(Image)`
    width: auto;

    &.homepage-top {
        margin: 0;
        margin-top: 2rem;
    }
`;
