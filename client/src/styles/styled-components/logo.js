/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import {
    theme,
    fontFamily,
    handleColor,
} from "./config";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~ Website Logo ~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

export const LogoContainer = styled.div.attrs((props) => ({
    /** Viewport type used for responsive design */
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
    background-color: ${theme.color.dark};
    border-radius: 0.4rem;
    }

    &.large {
        flex-direction: column;
        background-color: ${theme.color.dark};
        border-radius: 0.4rem;
        margin: 5rem auto;

        /** Responsive Design Styling */
        padding: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "0.1rem 0.8rem 0.4rem";
            default:
                return "0.1rem 1rem 0.4rem";
        }
    }};
        margin: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "3rem auto";
            default:
                return "5rem auto";
        }
    }};
    }
`;

export const LogoTextContainer = styled(LogoContainer)`
    flex-direction: column;
    padding: 0;
    background-color: transparent;
    border-radius: 0;

    &.large {
        margin: 0;
    }
`;

export const LogoIconContainer = styled.span.attrs((props) => ({
    /** Viewport type used for responsive design */
    viewport: {
        type: props.type || "default",
    },
}))`
    &.small {
        /* Keep the Logo size consistent */
        width: 2.7rem;
        height:2.7rem;
    }

    &.large {
        margin: 0;

        /** Responsive Design Styling */
        width: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "5rem";
            default:
                return "7rem";
        }
    }};
        height: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "5rem";
            default:
                return "7rem";
        }
    }};
    }
`;

export const LogoText = styled.span.attrs((props) => ({
    /** Viewport type used for responsive design */
    viewport: {
        type: props.type || "default",
    },
}))`
    font-family: ${fontFamily.logo};
    color: #fff;
    white-space: nowrap;

    &.small {
        line-height: 1.2rem;

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
        line-height: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "2.5rem";
            default:
                return "2.9rem";
        }
    }};

        &.first-line {
            /** Responsive Design Styling */
            font-size: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "2.9rem";
            default:
                return "3.5rem";
        }
    }};
        }

        &.second-line {
            font-weight: 600;

            /** Responsive Design Styling */
            font-size: ${(props) => {
        switch (props.viewport.type) {
            case ("super-small"):
                return "2.6rem";
            default:
                return "3.1rem";
        }
    }};
        }
    }
`;
