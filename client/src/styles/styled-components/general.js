/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import {
    color,
    transparency,
    handleColor,
} from "./colors";

import { gradientTransition } from "./mixins";

import { TinyRouterLink } from "./pages";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~ General Components ~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Paragraph Component
*
* @param {String} color text color
*/
export const Paragraph = styled.p.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
}))`
    color: ${(props) => handleColor(props.color)};

    &.author-date {
        margin: 0 0.15rem;
    }

    &.description {
        padding: 1rem 2rem;
    }
`;

/**
 * Small Text Component
 *
 * @param {String} color text color
 * @param {String} margin the top and bottom margin
 * @param {Boolean} superTiny flag to make text very small
 */
export const TinyText = styled.p.attrs((props) => ({
    color: props.color || color.grey.tint.darkest,
    margin: props.margin || "1rem",
}))`
    margin: ${(props) => props.margin} 0;
    color: ${(props) => handleColor(props.color)};
    font-size: ${(props) => props.superTiny ? "0.75rem" : "0.85rem"};

    & > span {
        color: ${color.grey.tint.neutral};
    }
`;

/**
 * Anchor Component
 *
 * @param {String} color text color
 */
export const Anchor = styled.a.attrs((props) => ({
    color: props.color || color.grey.shade.dark,
}))`
    text-decoration: none;
    color: ${(props) => handleColor(props.color)};
    transition: ease-in-out 0.75s;

    &:hover {
        border-bottom: 1px solid ${(props) => handleColor(props.color)};
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Inline Anchor Component
 *
 * @param {String} bgColor background color
 */
export const InlineAnchor = styled(Anchor)`
    transition: none;
    -webkit-transition: none;

    &:hover {
        transition: none;
        -webkit-transition: none;
    }

    &::before {
        content: " ";
    }

    &:hover::before {
        text-decoration: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)};
    }

    &::after {
        content: " ";
    }

    &:hover::after {
        border-bottom: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)};
    }
`;

/**
 * Header Component
 *
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 */
export const Header = styled.h1.attrs((props) => ({
    color: props.color || color.white,
    bgColor: props.bgColor || color.grey.shade.dark,
    textAlign: props.textAlign || "left",
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    padding: 0.5rem;
    padding-left: 0.75rem;
    border-radius: 0.2rem;
    font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
    margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
    text-align: ${(props) => props.textAlign};

    &.no-background {
        color: ${color.grey.shade.dark};
        background-color: transparent;
        padding: 0;
    }
`;

/**
 * Secondary Header Component
 *
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 * @param {Boolean} small flag to indicate slightly smaller text
 */
export const HeaderSecondary = styled(Header).attrs((props) => ({
    color: props.color || color.white,
    bgColor: props.bgColor || color.grey.shade.dark,
    textAlign: props.textAlign || "left",
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    padding: 0.5rem;
    padding-left: 0.75rem;
    border-radius: 0.2rem;
    font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
    margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
    text-align: ${(props) => props.textAlign};

    &.no-background {
        color: ${(props) => handleColor(props.color)};
        background-color: transparent;
    }
`;

/**
 * Simple Header Component with minimal styling.
 *
 * Setting props.as will convert the html tag to the appropriate
 * header type (h1, h2, h3.. etc.)
 *
 * @param {String} as sets the html tag, h1, h2 etc.
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 */
export const HeaderSimple = styled.h1.attrs((props) => ({
    as: props.as || "h1",
    color: props.color || "inherit",
    bgColor: props.bgColor || "transparent",
    textAlign: props.textAlign || "center",
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    text-align: ${(props) => props.textAlign};
    margin: 2rem auto;
    font-family: inherit;
    font-weight: 500;
    line-height: 1.2;
    font-size: ${(props) => {
        switch (props.as) {
            case ("h1"): return "2.25rem";
            case ("h2"): return "1.8rem";
            case ("h3"): return "1.5rem";
            case ("h4"): return "1.2rem";
            case ("h5"): return "1rem";
            default: return "2.25rem";
        }
    }};

    &.feature-text {
        text-shadow: 0.05rem 0.05rem 0.25rem ${color.grey.shade.light};
    }

    &.header-home {
        margin:  0rem 11%;
    }
`;

/**
 * List Item Component
 */
export const ListItem = styled.li`
    color: inherit;
    margin: 0.3rem 0;

    &.nav-item {
        margin: auto 0.3rem;
    }

    &.sidebar-nav {
        margin: 5vh auto;
    }

    &.align-left {
        margin-right: auto;
    }
`;

/**
 * Image Component
 *
 * @param {String} height height of the image
 * @param {String} width width of the image
 */
export const Image = styled.img.attrs((props) => ({
    height: props.height || "auto",
    width: props.width || "100%",
}))`
    display: block;
    margin: auto;
    height: ${(props) => props.height};
    width: ${(props) => props.width};
`;

/**
 * Icon Component displayed from a SVG image file.
 *
 * @param {Number} height the height of the icon
 * @param {Number} width the width of the icon
 * @param {Number} fill the fill color
 */
export const Icon = styled.svg.attrs((props) => ({
    height: props.height || "50px",
    width: props.width || "50px",
    fill: props.fill || color.grey.tint.lighter,
    bgColor: props.bgColor || color.grey.shade.dark,
}))`
    fill: ${(props) => handleColor(props.fill)};
    text-decoration: none;
    margin: auto;

    /* Required to limit the icon size */
    max-height: ${(props) => props.height};
    max-width: ${(props) => props.width};

    transition: ease-in-out 0.3s;

    /* Make inner elements inverted */
    & > use {
        color: ${(props) => handleColor(props.bgColor)};
    }

    /* Close icon uses stroke for lines, not fill */
    &.close-icon > use {
        stroke: ${(props) => handleColor(props.fill)};
    }

    & > use > svg {
        /* Component inline props override */
        width: 100%;
        height: 100%;
        max-height: ${(props) => props.height};
        max-width: ${(props) => props.width};
    }

    &:hover {
        fill: ${color.white};
        transition: ease-in-out 0.4s;
    }

    &.home {
        fill: ${color.grey.tint.light};

        &:hover {
            fill: ${color.white};
        }

        &.at-top {
            fill: ${color.grey.shade.dark};

            &:hover {
                fill: ${color.black};
                }
        }
    }

    &.shrink-image {
        display: block;
        max-width: 65%;
    }

    &.footer-icon {
        fill: ${color.grey};
        transition: ease-in-out 0.4s;
    }

    &.footer-icon:hover {
        fill: ${color.white};
        transition: ease-in-out 0.4s;
    }

    &.nav-item {
        fill: ${color.grey.tint.light};
        margin: auto 0;

        &:hover {
            fill: ${color.white};
        }

        &.at-top {
            fill: ${color.grey.shade.dark};

            &:hover {
                fill: ${color.black};
            }
        }
    }

    &.align-left {
        margin-right: auto;
    }

    &.align-right {
        margin-left: auto;
    }

    &.logo-slider {
        margin: auto 1.5rem;
    }
`;

/**
 * Button Component
 */
const pseudoButtonProperties = css`
    border-radius: 1.5rem;
`;

export const Button = styled.button`
    color: ${color.white};
    background-color: ${color.grey.shade.dark};
    font-weight: 600;
    font-size: 1.2rem;
    text-shadow: 0.03rem 0.03rem
    ${color.grey.shade.darkest + transparency.x25};
    box-shadow: 0.1rem 0.15rem
    ${color.grey.shade.darker + transparency.x50};
    border-radius: 1.5rem;
    padding: 0.6rem 1.7rem;
    display: block;
    margin: 0 auto;

    &:hover {
        color: ${color.grey.tint.lighter};
    }

    &.secondary {
        padding: 0.6rem 1.2rem;
        padding-top: 0.6rem;
        border-radius: 1.2rem;
        transition: cubic-bezier(0.9, 0.75, 1, 1) 0.3s;

        &:hover {
        background-color: ${color.black};
        }
    }

    &.gradient {
        background: ${`linear-gradient(
        245deg,
        ${color.blue.neutral} -90%,
        ${color.purple.dark} 120%)`};
        color: ${color.grey.tint.lightest};

        ${() => { // Use function to avoid Prettier ugly formatting.
        return gradientTransition(
            color.blue.darker,
            color.purple.darker,
            pseudoButtonProperties,
        );
    }}
    }

    &.home {
        margin-top: 4rem;
        margin-bottom: 4rem;
    }

    &.upvote-button {
        padding: 0.35rem;
        padding-top: 0.25rem;
        margin: 0;
        border-radius: 0.6rem;
    }
`;

/**
 * Horizontal Ruler Component
 *
 * @param {String} width width of the horizontal ruler
 * @param {String} color color of the horizontal ruler
 * @param {Boolean} thin flag indicating horizontal ruler is thin
 * @param {Boolean} smallMargin flag indicating component has small margin
 */
export const HorizontalRuler = styled.hr.attrs((props) => ({
    width: props.width || "100%",
    color: props.color || color.grey.shade.dark,
}))`
    border: 0;
    height: 0;
    width: ${(props) => props.width};
    background-color: transparent;
    margin-bottom: ${(props) => props.smallMargin ? "1rem" : "2rem"};
    margin-top: ${(props) => props.smallMargin ? "0.8rem" : "1.5rem"};
    border-top: ${(props) => props.thin ? "0.05rem" : "0.1rem"}
                solid
                ${(props) => handleColor(props.color)};

    &.footer-hr {
        border-top: 0.05rem solid ${color.grey.shade.light};
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }

    &.sidebar-nav {
        border-top: 0.05rem solid ${color.grey.shade.light};
        margin: 0;
    }

    &.description-box {
        margin: auto;
        border-top: ${(props) =>
        props.last ?
            "none" :
            `0.05rem solid ${color.pink.darker + transparency.x18}`};
    }

    &.header-home {
        margin: 1.2rem auto 2rem auto;
        box-shadow: 0.01rem 0.01rem 0.04rem ${color.grey.shade.light};
    }
`;

/**
 * Flex-box Container
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
    margin: ${(props) => props.smallMargin ? "0.25rem" : "1rem"};

    &.footer-nav {
        margin: 1rem 3rem;
    }

    & ~ ${TinyRouterLink} {
        margin-top: 0;
    }

    &.items-margin > * {
        margin: 0.8rem auto;
    }
`;

/**
 * Label Component
 */
export const Label = styled.label`
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
`;

/**
 * Input Component
 */
export const Input = styled.input`
    outline: 0;
    border: 0.05rem solid ${color.grey.shade.dark};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid ${color.blue.neutral};
        box-shadow: 0 0 0.3rem ${color.blue.neutral};
        transition: box-shadow linear 0.2s
    }
`;

/**
 * Text Area Component
 */
export const TextArea = styled.textarea`
    resize: none;
    outline: 0;
    border: 0.05rem solid ${color.grey.shade.dark};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    resize: none;
    overflow: auto;
    height: auto;
    line-height: 1.2rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid ${color.blue.neutral};
        box-shadow: 0 0 0.3rem ${color.blue.neutral};
        transition: box-shadow linear 0.2s
    }
`;
