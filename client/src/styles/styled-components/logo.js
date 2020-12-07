/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { fontFamily } from "./fonts";

import { color } from "./colors";

import {
    handleLargeLogoMargin,
    handleLargeLogoSize,
    /** Legacy website logo handlers (below) */
    handleLogoContainerPadding,
    handleLogoContainerMargin,
    handleLogoIconWidthHeight,
    handleLogoTextLineHeight,
    handleLogoTextFontSize,
} from "./responsive";

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
* @param {Object} viewport viewport object used for responsive design
*      - @property {String} type type classification
*/
export const LogoImage = styled(Image).attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    width: auto;

    &.small {
        margin: 0.25rem;
    }

    &.large {
        margin: 3rem auto;

        &.header-home {
            margin-bottom: 3rem;
            ${(props) => handleLargeLogoMargin(props.viewport.type)};
            ${(props) => handleLargeLogoSize(props.viewport.type)};
        }
    }
`;

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~ Legacy Website Logo ~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Logo Container Component.
 *
 * Container for the entire logo.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const LogoContainer = styled.div.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    &.small {
    padding: 0.1rem 0.25rem;
    background-color: ${color.grey.shade.dark};
    border-radius: 0.4rem;
    }

    &.large {
        flex-direction: column;
        background-color: ${color.grey.shade.dark};
        border-radius: 0.4rem;
        margin: 5rem auto;

        /** Responsive Design Styling */
        padding: ${(props) => handleLogoContainerPadding(props.viewport.type)};
        margin: ${(props) => handleLogoContainerMargin(props.viewport.type)};
    }
`;

/**
 * Logo Text Container.
 *
 * Container for the logo text.
 */
export const LogoTextContainer = styled(LogoContainer)`
    flex-direction: column;
    padding: 0;
    background-color: transparent;
    border-radius: 0;

    &.large {
        margin: 0;
    }
`;

/**
 * Logo Icon Container.
 *
 * Container for the logo icon.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const LogoIconContainer = styled.span.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    &.small {
        /* Keep the Logo size consistent */
        width: 2.7rem;
        height:2.7rem;
        padding: 0.1rem;
    }

    &.large {
        margin: 0;

        /** Responsive Design Styling */
        width: ${(props) => handleLogoIconWidthHeight(props.viewport.type)};
        height: ${(props) => handleLogoIconWidthHeight(props.viewport.type)};
    }
`;

/**
 * Logo Text Component.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const LogoText = styled.span.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    font-family: ${fontFamily.logo};
    color: ${color.white};
    white-space: nowrap;

    &.small {
        line-height: 1.2;

        &.first-line {
            font-size: 1.2rem;
        }

        &.second-line {
            font-size: 1.07rem;
            font-weight: 600;
        }
    }

    &.large {
        margin: 0;

        /** Responsive Design Styling */
        line-height: ${(props) =>
        handleLogoTextLineHeight(props.viewport.type)};

        &.first-line {
            /** Responsive Design Styling */
            font-size:
            ${(props) => handleLogoTextFontSize("first", props.viewport.type)};
        }

        &.second-line {
            font-weight: 600;

            /** Responsive Design Styling */
            font-size:
            ${(props) => handleLogoTextFontSize("second", props.viewport.type)};
        }
    }
`;
