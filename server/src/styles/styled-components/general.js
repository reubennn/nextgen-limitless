/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import {
    color,
    handleColor,
} from "./colors";

/**
 * Anchor Component.
 *
 * @param {String} color text color
 */
export const Anchor = styled.a.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
    noStyle: props.noStyle || false,
}))`
    text-decoration: none;
    color: ${(props) => handleColor(props.color)};
    transition: ease-in-out 0.75s;

    ${(props) => !props.noStyle &&
        css`
        &:hover {
            border-bottom: 1px solid ${(props) => handleColor(props.color)};
            transition: ease-in-out 0.25s;
        }
        `}
`;

/**
 * Inline Anchor Component.
 *
 * @param {String} thickUnderline flag indicating thicker underline on hover
 */
export const InlineAnchor = styled(Anchor)`
    position: relative;
    text-decoration: none;
    transition: ease-in-out 0.25s;
    padding-right: 0.25rem;
    padding-left: 0.25rem;

    &:hover {
        border-bottom: none;
    }

    &::after {
        content: " ";
        display: block;
        position: absolute;
        bottom: -0.15rem;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        width: 0%;
        border-bottom: ${(props) => props.thickUnderline ?
        `0.1rem solid ${handleColor(props.color)}` :
        `0.05rem solid ${handleColor(props.color)}`};
        transition: ease-in-out 0.25s;
    }

    &:hover::after {
        width: 94%;
    }
`;

/**
 * Helper Component when putting a fullstop directly after an
 * inline anchor, so that it can be the same color as the original
 * text.
 *
 * @param {String} color the color of the fullstop
 */
export const FullStop = styled.span.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
}))`
    &::after {
        content: ".";
        color: ${(props) => handleColor(props.color)};
    }
`;

/**
 * Simple Header Component for the homepage title.
 *
 */
export const HomepageHeader = styled.h1.attrs((props) => ({
}))`
    color: ${color.white};
    text-align: left;
    font-weight: 700;
    line-height: 1.2;
    padding: 0;
    margin: 2rem auto;
    margin-left: 8vw;
    transition: ease-in-out 0.25s;

    @media only screen and (max-width: 479px) {
        font-size: 3rem;
    }
    @media only screen and (min-width: 480px) and (max-width: 767px) {
        font-size: 4rem;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        font-size: 5rem;
    }
    @media only screen and (min-width: 1024px) and (max-width: 1365px) {
        font-size: 5rem;
    }
    @media only screen and (min-width: 1366px) and (max-width: 1921px) {
        font-size: 5rem;
    }
    @media only screen and (min-width: 1920px) {
        font-size: 6rem;
    }
`;

/**
 * Image Component.
 *
 * @param {String} height height of the image
 * @param {String} width width of the image
 */
export const Image = styled.img.attrs((props) => ({
    height: props.height || "auto",
    width: props.width || "100%",
    circle: props.circle || false,
}))`
    display: block;
    margin: auto;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
    border-radius: ${(props) => props.circle ? "50%" : ""};
`;

/**
 * Flex-box Container.
 *
 * @param {String} justifyContent justify-content styling
 * @param {Boolean} wrapContent flex-wrap direction
 * @param {Boolean} column flag to indicate flex-box direction
 * @param {Boolean} smallMargin flag indicating component has small margin
 */
export const FlexContainer = styled.div.attrs((props) => ({
    justifyContent: props.justifyContent || "center",
}))`
    color: inherit;
    display: flex;
    flex-wrap: ${(props) => props.wrapContent ? "wrap" : "nowrap"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    justify-content: ${(props) => props.justifyContent};
    align-items: center;
    margin: ${(props) => props.smallMargin ? "0.25rem" : "1rem"};

    &.fill-viewport {
        height: 100vh;
        width: 100%;
    }
`;

export const Footer = styled.footer`
    display: flex;
    align-items: center;
    background-color: transparent;
    color: ${color.white};
    height: 5rem;
    padding: auto;
    white-space: pre;
`;
