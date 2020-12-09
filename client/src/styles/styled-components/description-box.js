/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import { fontFamily } from "./fonts";
import { FlexContainer } from "./general";
import {
    color,
    transparency,
    handleColor,
} from "./colors";

/**
 * Textbox container for the feature Description Box
 * header and text description.
 */
export const DescriptionBoxTextbox = styled.div`
    flex: 0 0 55%;
    min-height: 15rem;
`;

/**
 * The Description Box flex container for all feature description elements.
 *
 * @param {Boolean} column flag to indicate flex-box direction is column
 * @param {Boolean} reverse indicates if the contents should be reversed
 * @param {Boolean} last indicates it is the last element in the section
 */
export const DescriptionBox = styled(FlexContainer)`
    align-items: center;
    padding-top: 5rem;
    padding-bottom: 4rem;
    margin: 0;
    flex-basis: 50%;
    min-width: 20vw;

    &.secondary {
        padding-top: 0;
        padding-bottom: 0;
        margin: 0 5vw;
    }

    /* Do not display the separator border if it is the last element */
    ${(props) => {
        if (props.reverse && props.column) {
            return "flex-direction: column-reverse;";
        } else if (props.reverse) {
            return "flex-direction: row-reverse;";
        }
    }}

    /* Additional properties for Description Box displayed as row */
    ${(props) => {
        return !props.column &&
            css`
            padding-top: 2rem;
            padding-bottom: 1rem;

            & > ${DescriptionBoxTextbox} {
                margin: 0 5rem;
                ${(props) => css` /* eslint indent enforce workaround */
                    margin: ${props.reverse ? "0 5rem 0 0;" : "0 0 0 5rem;"}
                `}
                flex: 0 0 50vw;
            }

            & ${DescriptionBoxImage} {
                height: 20vw;
                flex: 0 0 20vw;
                margin: 7vw auto;

                &:hover {
                    transform: scale(1.05);
                }
        }`;
    }}
`;

/**
 * Container for the Description Box Image.
 *
 * Contains the image, and a span element for a gradient background.
 */
export const DescriptionBoxImage = styled.div`
    margin: 6vw auto 1vw auto;
    position: relative;
    height: 15rem;
    width: 15rem;
    overflow: hidden;
    background: ${color.grey.tint.lightest};
    border-radius: 50% 50%;
    box-shadow: 0 0 5rem 0 ${color.black + transparency.x50};
    flex: 0 0 15rem;
    transition: ease-in-out 0.25s;

    &:hover {
        transform: scale(1.1);
    }

    &.secondary {
        height: 11rem;
        width: 11rem;
        flex: 0 0 11rem;
    }

    &.min-shadow {
        box-shadow: 0 0 3rem 0 ${color.black + transparency.x20};
    }

    /** Gradient overlay */
    & span {
        position: absolute;
        top: 0;
        left: 0;
        background: ${css`
            linear-gradient(
            to bottom,
            ${color.pink.darkest} 0%,
            ${color.orange.neutral} 100%)`};
        width: 100%;
        height: 100%;
        opacity: 0.25;
    }

    &.grey-orange span {
        position: absolute;
        background: ${css`
            linear-gradient(
            to bottom,
            ${color.grey.tint.darkest} 0%,
            ${color.orange.darker} 100%)`};
        width: 100%;
        height: 100%;
        opacity: 0.2;
    }

    &.orange-purple span {
        position: absolute;
        background: ${css`
            linear-gradient(
            to bottom,
            ${color.orange.dark} 0%,
            ${color.purple.darker} 100%)`};
        width: 100%;
        height: 100%;
        opacity: 0.22;
    }

    &.orange-grey span {
        position: absolute;
        background: ${css`
            linear-gradient(
            to top,
            ${color.grey.tint.dark} 0%,
            ${color.orange.light} 100%)`};
        width: 100%;
        height: 100%;
        opacity: 0.2;
    }
`;

/**
 * Description Title Component for the Description Box.
 *
 * @param {String} color text color
 */
export const DescriptionTitle = styled.h3.attrs((props) => ({
    color: props.color || "inherit",
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: transparent;
    padding: 0.5rem;
    padding-left: 0.75rem;
    border-radius: 0.2rem;
    font-size: 1.9rem;
    margin: 2.5rem 0 1.5rem 0;
    text-align: center;
    transition: ease-in-out 0.25s;
    position: relative;
    z-index: 1; /* So we can still highlight / select the text on hover */

    &:hover {
        letter-spacing: 0.1rem;
        color: ${(props) => handleColor(props.color + "-x95")};
        padding-right: 0;
        padding-left: 0;
    }

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1; /* So we can still highlight / select the text on hover */
        border-top: 0.08rem solid
        ${(props) => handleColor(props.color + "-x15")};
        border-bottom: 0.08rem solid
        ${(props) => handleColor(props.color + "-x15")};
        opacity: 0;
        transform: scale(0.1, 1);
        transition: ease-in-out 0.3s;
    }

    &:hover::after {
        opacity: 1;
        transform: scale(1, 1);
    }
`;

/**
 * Text for the feature Description Textbox.
 *
 * @param {String} color text color
 */
export const DescriptionBoxText = styled.div.attrs((props) => ({
    color: props.color || "inherit",
}))`
    min-height: 10rem;

    & p {
        color: ${(props) => handleColor(props.color)};
        text-align: center;
        margin: 2rem 0;
        font-family: ${fontFamily.description};
        transition: ease-in-out 0.25s;

        &:hover {
            color: ${(props) => handleColor(props.color + "-x90")}
        }
    }
`;
