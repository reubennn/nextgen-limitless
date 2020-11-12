/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import {
    theme,
    handleColor,
} from "./config";

import { TinyRouterLink } from "./pages";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~ General Components ~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Paragraph Component
*
* @param {String} props.color text color
*/
export const Paragraph = styled.p.attrs((props) => ({
    color: props.color || theme.color.dark,
}))`
    color: ${(props) => handleColor(props.color)};

    &.author-date {
        margin: 0 0.15rem;
    }
`;

/**
 * Small Text Component
 *
 * @param {String} props.color text color
 */
export const TinyText = styled.p.attrs((props) => ({
    color: props.color || theme.color.grey,
}))`
    margin: ${(props) => props.margin ? props.margin : "1rem"} 0;
    color: ${(props) => handleColor(props.color)};
    font-size: ${(props) => props.superTiny ? "0.75rem" : "0.85rem"};

    & > span {
        color: ${theme.color.light};
    }
`;

/**
 * Anchor Component
 *
 * @param {String} props.color text color
 */
export const Anchor = styled.a.attrs((props) => ({
    color: props.color || theme.color.dark,
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
 */
export const InlineAnchor = styled(Anchor)`
    &::before {
        content: " ";
    }

    &:hover::before {
        text-decoration: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)}
    }

    &::after {
        content: " ";
    }

    &:hover::after {
        border-bottom: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)}
    }
`;

/**
 * Header Component
 *
 * @param {String} props.color text color
 * @param {String} props.bgColor background color for background-color
 * @param {String} props.textAlign text align style for text-align
 */
export const Header = styled.h1.attrs((props) => ({
    color: props.color || "#fff",
    bgColor: props.bgColor || theme.color.dark,
    textAlign: props.textAlign || "left",
}))`
    & {
        color: ${(props) => handleColor(props.color)};
        background-color: ${(props) => handleColor(props.bgColor)};
        padding: 0.5rem;
        padding-left: 0.75rem;
        border-radius: 0.2rem;
        font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
        margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
        text-align: ${(props) => props.textAlign}
    }

    &.no-background {
        color: ${theme.color.dark};
        background-color: transparent;
        padding: 0;
    }
`;

/**
 * Secondary Header Component
 *
 * @param {String} props.color text color
 * @param {String} props.bgColor background color for background-color
 * @param {String} props.textAlign text align style for text-align
 */
export const HeaderSecondary = styled(Header).attrs((props) => ({
    color: props.color || "#fff",
    bgColor: props.bgColor || theme.color.dark,
    textAlign: props.textAlign || "left",
}))`
    & {
        color: ${(props) => handleColor(props.color)};
        background-color: ${(props) => handleColor(props.bgColor)};
        padding: 0.5rem;
        padding-left: 0.75rem;
        border-radius: 0.2rem;
        font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
        margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
        text-align: ${(props) => props.textAlign}
    }

    &.no-background {
        color: ${theme.color.dark};
        background-color: transparent;
    }
`;

/**
 * Footer Component
 */
export const ListItem = styled.li`
    color: inherit;
    margin: 0.3rem 0;

    &.nav-item {
        margin: auto 0.3rem;
    }

    &.align-left {
        margin-right: auto;
    }
`;

/**
 * Image Component
 *
 * @param {String} props.height height of the image
 * @param {String} props.width width of the image
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
 * Social Media Button Link Component
 */
export const Icon = styled.svg.attrs((props) => ({
    height: props.height || "3.5rem",
    width: props.width || "3.5rem",
    fill: props.fill || theme.color.whiteGrey,
}))`
    fill: ${(props) => handleColor(props.color)};
    text-decoration: none;
    margin: auto;

    /* Required to limit the icon size */
    max-height: ${(props) => props.height};
    max-width: ${(props) => props.width};

    transition: ease-in-out 0.3s;

    & > use > svg {
        /* Component inline props override */
        width: 100%;
        height: 100%;
        max-height: ${(props) => props.height};
        max-width: ${(props) => props.width};
    }

    &:hover {
        fill: #fff;
        transition: ease-in-out 0.4s;
    }

    &.home {
        fill: ${theme.color.dark};

        &:hover {
        fill: #000;
        }
    }

    &.footer-icon {
        fill: ${theme.color.grey};
        transition: ease-in-out 0.4s;
    }

    &.footer-icon:hover {
        fill: #fff;
        transition: ease-in-out 0.4s;
    }

    &.nav-item {
        margin: auto 0;
    }

    &.align-left {
        margin-right: auto;
    }

    &.align-right {
        margin-left: auto;
    }
`;

/**
 * Button Component
 */
export const Button = styled.button`
    color: #fff;
    background-color: ${theme.color.dark};
    padding: 0.6rem 1.2rem;
    padding-top: 0.6rem;
    margin: auto;
    border-radius: 1.5rem;
    transition-duration: 0.4s;
    display: block;

    &:hover {
        background-color: #000;
    }

    &.upvote-button {
        padding: 0.35rem;
        padding-top: 0.25rem;
        margin: 0;
        border-radius: 0.6rem;
    }
`;

/**
 * HorizontalRuler Component
 */
export const HorizontalRuler = styled.hr`
    border: 0;
    height: 0;
    width: ${(props) => props.width};
    border-top: ${(props) => props.thin ? "0.05rem" : "0.1rem"}
                solid
                ${(props) => handleColor(props.color)};
    margin-bottom: ${(props) => props.smallMargin ? "1rem" : "2rem"};
    margin-top: ${(props) => props.smallMargin ? "0.8rem" : "1.5rem"};

    &.footer-hr {
        border-top: 0.05rem solid ${theme.color.grey};
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }
`;

/**
 * Define HorizontalRuler Component default props
 *
 * A method for defining default props.
 *
 * Alternative approach:
 *  ... = styled.hr.attrs((props) => ({
 *   width: props.width || "100%",
 *  }))
 */
HorizontalRuler.defaultProps = {
    width: "100%",
};

/**
 * Flex-box Container
 *
 * @param {String} props.justifyContent justify-content styling
 * @param {Boolean} props.wrapContent
 * @param {Boolean} props.column
 * @param {Boolean} props.smallMargin
 */
export const FlexContainer = styled.ul.attrs((props) => ({
    justifyContent: props.justifyContent || "center",
}))`
    color: inherit;
    display: flex;
    flex-wrap: ${(props) => props.wrapContent ? "wrap" : "nowrap"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.smallMargin ? "0.25rem" : "1rem"};

    & .footer-nav {
        margin: 1rem 3rem;
    }

    & ~ ${TinyRouterLink} {
        margin-top: 0;
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
    border: 0.05rem solid ${theme.color.dark};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid #4195fc;
        box-shadow: 0 0 0.3rem #4195fc;
        transition: box-shadow linear 0.2s
    }
`;

/**
 * Input Component
 */
export const TextArea = styled.textarea`
    resize: none;
    outline: 0;
    border: 0.05rem solid ${theme.color.dark};
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
        border: 0.05rem solid #4195fc;
        box-shadow: 0 0 0.3rem #4195fc;
        transition: box-shadow linear 0.2s
    }
`;
