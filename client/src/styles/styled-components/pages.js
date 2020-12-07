/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { fontFamily } from "./fonts";
import { rotate } from "./keyframes";
import {
    sliderAnimation,
    linearGradientBackground,
} from "./mixins";
import {
    color,
    transparency,
    handleColor,
} from "./colors";

import {
    handleNavbarPadding,
    handleFeatureTextFontSize,
} from "./responsive";

import { Header, FlexContainer } from "./general";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ Page Components ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Navbar Link Component.
*
* - Inherit React Router Link to style it.
* - Defaults to color contrast with a light background color.
*
* @param {Boolean} atTop indicates if browser is at the top of the page
*/
export const NavbarLink = styled(NavLink)`
    font-family: ${fontFamily.secondary};
    color: ${(props) =>
        props.atTop ? color.grey.shade.dark : color.grey.tint.light};
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 0;
    margin: 0 0.75rem;
    border-radius: 0.25rem;
    transition: ease-in-out 0.3s;

    &:hover {
        ${(props) => css` /* eslint indent enforce workaround */
            background-color:
            ${props.atTop ? color.grey.shade.dark : color.grey.tint.light};
            color:
            ${props.atTop ? color.white : color.grey.shade.dark};
        `}
        padding: 0.25rem 0.75rem;
        margin: 0;
    }

    &.active {
        background-color: ${(props) =>
        props.atTop ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.atTop ? color.white : color.grey.shade.dark};
        opacity: 0.85;
        padding: 0.25rem 0.4rem;
        margin: 0 0.35rem;

        /** Dynamic transitioning */
        ${(props) => props.atTop ?
        css`
            transition: background-color 0.3s ease-in-out 0s,
                        color 0.3s ease-in-out 0s,
                        padding 0.3s ease-in-out 0s,
                        margin 0.3s ease-in-out 0s,
                        opacity 0.3s ease-in-out 0s;
        ` :
        css`
            transition: background-color 0.3s ease-in-out 0.3s,
                        color 0.3s ease-in-out 0.3s,
                        padding 0.3s ease-in-out 0s,
                        margin 0.3s ease-in-out 0s,
                        opacity 0.3s ease-in-out 0s;
        `}

        &:hover {
            opacity: 1;
            padding: 0.25rem 0.75rem;
            margin: 0;
            border-radius: 0.25rem;
            transition: ease-in-out 0.25s;
        }
    }

    &.dark-background {
        color: ${color.grey.tint.light};

        &:hover {
            ${(props) => css` /* eslint indent enforce workaround */
                background-color:
                ${props.atTop ? color.grey.shade.dark : color.grey.tint.light};
                color:
                ${props.atTop ? color.white : color.grey.shade.dark};
            `}
        }
    }

    &.dark-background.active {
        background-color: ${(props) =>
        props.atTop ? color.grey.shade.dark : color.grey.tint.light};
        color: ${(props) =>
        props.atTop ? color.white : color.grey.shade.dark};
    }
`;

/**
 * Navigation bar Component.
 *
 * @param {Boolean} scrolledUp indicates if user scrolled up or not
 * @param {Boolean} atTop indicates if browser is at the top of the page
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const Navbar = styled.nav.attrs((props) => ({
    scrolledUp: props.scrolledUp,
    atTop: props.atTop,
    viewport: {
        type: props.type || "default",
    },
}))`
    margin: 0;
    display: inline-block;
    width: 100%;
    z-index: 100;
    top: ${(props) => props.scrolledUp ? 0 : "-6rem"};
    transition: top 0.3s ease-in-out 0.3s;

    /** Responsive Design Styling */
    padding: ${(props) => handleNavbarPadding(props.viewport.type)};

    color: ${(props) =>
        props.atTop ? color.grey.shade.dark : color.grey.tint.light};
    background-color: ${(props) =>
        props.atTop ? "transparent" : color.grey.shade.dark};
    position: fixed;

    /** Dynamic transitioning */
    ${(props) => props.atTop ?
        css`
        transition: top 0.3s ease-in-out 0.3s,
                    background-color 0.3s ease-in-out 0s,
                    color 0.3s ease-in-out 0s;
    ` :
        css`
        transition: top 0.3s ease-in-out 0s,
                    background-color 0.3s ease-in-out 0.3s,
                    color 0.3s ease-in-out 0.3s;
    `}

    &.sidebar-nav {
        height: 100%;
        z-index: 100; /* Stay on top */
        position: fixed;
        overflow: hidden; /* Disable scroll */
        transition: 0.5s;
        top: 0;
        left: 0;
    }

    &.dark-background {
        color: ${(props) =>
        props.atTop ? color.grey.tint.neutral : color.grey.tint.light};
        background-color: ${(props) =>
        props.atTop ? "transparent" : color.grey.shade.dark};
        position: fixed;
    }
`;

/**
 * Main page body.
 */
export const MainPageBody = styled.main.attrs({
    id: "MainPageBody",
})`
    text-align: left;
    width: 100%;
    /* equivalent to Section padding: 11%; */
    /* width: 79vw; */
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* position: relative; */
`;

/**
 * Homepage Header.
 *
 * @param
 */
export const TopHeader = styled.header.attrs((props) => ({
    url: props.url,
    pos: props.pos || "center",
    attachment: props.attachment || "fixed",
    height: props.height || "40vh",
}))`
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    ${(props) => {
        return linearGradientBackground(
            css`to top`,
            [
                color.grey.shade.dark + transparency.x35,
                color.grey.shade.dark + transparency.x45,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}


    &.home {
        min-height: 100vh;
        ${(props) => {
        return linearGradientBackground(
            css`to top`,
            [
                color.grey.shade.dark,
                color.grey.shade.dark + transparency.x75,
                color.red.light + transparency.x30,
                color.blue.darkest + transparency.x30,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }

    &.about {
        ${(props) => {
        return linearGradientBackground(
            css`to bottom`,
            [
                color.grey.shade.dark + transparency.x75,
                color.grey.shade.dark + transparency.x40,
                color.red.neutral + transparency.x15,
                color.grey.shade.dark + transparency.x60,
                color.grey.shade.dark + transparency.x70,
                color.grey.shade.dark + transparency.x80,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }
`;


/**
 * Feature Text Component.
 *
 * @param {String} color the color of the text
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const FeatureText = styled.p.attrs((props) => ({
    color: props.color || "inherit",
    fontWeight: props.fontWeight || "500",
    viewport: {
        type: props.type || "default",
    },
}))`
    color: ${(props) => handleColor(props.color)};
    font-family: ${fontFamily.secondary};
    font-weight: ${(props) => props.fontWeight};
    margin: auto;
    text-align: center;
    text-shadow: 0.05rem 0.05rem 0.25rem ${color.grey.shade.light};

    /** Responsive Design Styling */
    font-size: ${(props) => handleFeatureTextFontSize(props.viewport.type)};

    &.header-home {
        margin: auto 2.5rem;
    }
`;

/**
 * Page Section Component.
 *
 * @param {String} height height of the section
 * @param {String} color color of the text
 * @param {String} bgColor background color of the section
 */
export const Section = styled.section.attrs((props) => ({
    height: props.height || "40vh",
    color: props.color || color.grey.shade.dark,
    bgColor: props.bgColor || color.white,
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    /* height: ${(props) => props.height}; */
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 3rem 11%;
    width: 100%;
    overflow-x: hidden;
`;

/**
 * Page Section Component.
 *
 * @param {String} height height of the section
 * @param {String} color color of the text
 * @param {String} bgColor background color of the section
 * @param {String} url background image url
 * @param {String} pos background position
 * @param {String} attachment background image attachment
 */
export const SectionWithBackground = styled(Section).attrs((props) => ({
    url: props.url,
    pos: props.pos || "center",
    attachment: props.attachment || "fixed",
}))`
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: ${(props) => props.pos};
    background-attachment: ${(props) => props.attachment};

    &.primary-gradient {
        ${(props) => {
        return linearGradientBackground(
            css`to bottom`,
            [
                color.grey.shade.dark,
                color.red.neutral + transparency.x25,
                color.grey.shade.dark + transparency.x70,
                color.grey.shade.dark + transparency.x80,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }

    &.secondary-gradient {
        ${(props) => {
        return linearGradientBackground(
            css`to bottom`,
            [
                color.grey.shade.dark,
                color.orange.darkest + transparency.x40,
                color.grey.shade.dark + transparency.x80,
                color.orange.dark + transparency.x25,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }
`;

/**
 * Comments List Component.
 */
export const CommentsList = styled.div`
    & > *:not(${Header}) {
        padding-left: 2rem;
    }

    & > .no-comments {
        margin: 0.5rem auto 2rem auto;
        padding-left: 0rem;
        text-align: center;
    }

    h4 {
        color: ${color.grey.tint.neutral};
        font-size: 0.85rem;
        font-style: italic;
        font-weight: normal;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.5rem 0 1rem 0.5rem;
    }
`;

/**
 * Upvote Section Component.
 */
export const UpvoteSection = styled.div`
    color: ${color.grey.shade.light};
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    i:first-of-type {
        /* display: block; */
        margin: auto 0.6rem;
        text-align: right;
    }
`;

/**
 * Footer Padding Placeholder.
 *
 * Used as a placeholder so that the footer is always
 * positioned towards the bottom of the page if the page
 * does not have much content in it.
 */
export const FooterPaddingPlaceholder = styled.div`
    padding-bottom: calc(100vh - 38rem);
`;

/**
 * Not found page component.
 *
 * Match the background color to the background color of the image.
 */
export const NotFound = styled(FooterPaddingPlaceholder)`
    background-color: #f1f1f1;
`;

/**
 * Add Comment Form Component.
 */
export const AddCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

/**
 * Router Link Component.
 *
 * Inherits React Router Link functionality.
 * Allows the use of styled-components to style it.
 */
export const RouterLink = styled(Link)`
    color: ${(props) => handleColor(props.color)};
    margin: auto;
    transition: ease-in-out 0.25s;

    &:hover {
        color: ${color.grey.shade.dark};
    }
`;

/**
 * Router Link Button  Component.
 *
 * Inherits Router Link Component so it has React Router Link functionality.
 */
export const RouterLinkButton = styled(RouterLink)`
    & {
        font-size: 1.2rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        padding: 0.25rem 0.75rem;
    }
`;

/**
 * Tiny Router Link Component.
 *
 * Like the RouterLink component, but small.
 *
 * Inherits React Router Link functionality.
 * Allows the use of styled-components to style it.
 */
export const TinyRouterLink = styled(Link)`
    & {
        color: ${(props) => handleColor(props.color)};
        font-size: 0.75rem;
        margin: 0 0.85rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        color: #303030;
        padding: 0.25rem 0.75rem;
        margin: 0 0.2rem;
    }
`;

/**
 * Article Sample Component.
 *
 * For styling the small article sample previews,
 * like inside the articles list.
 */
export const ArticleSample = styled.div`
    margin: auto 0.1rem;
    padding: 0 0.5rem;
    transition: ease-in-out 0.25s;

    p {
        /* Stop word-wrap when hovering */
        /* max-width: 520px; */
    }

    /* &:hover {
        border-left: 0.1rem solid ${(props) => color.grey.shade.dark};
        border-right: 0.1rem solid ${(props) => color.grey.shade.dark};
        margin: auto 0.1rem; 
        transition: ease-in-out 0.25s;
    } */

    /* &:hover > a > ${FlexContainer} > ${Image} {
        transition: ease-in-out 0.25s;
    }

    & > a > ${FlexContainer} {
        width: calc(100% - 0.8rem);
        margin: auto 0.4rem;
        padding: auto 0;
        transition: ease-in-out 0.25s;
    } */

    & > h3 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        display: inline-block;
        font-size: 1.3em;
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Loading Icon Component.
 *
 * - Displayed when data is loading from the server API.
 */
export const LoadingIcon = styled.nav`
    display: block;
    position: relative;
    width: 3rem;
    height: 3rem;
    margin: auto;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
        border: 0.35rem solid ${color.grey.shade.dark};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${color.grey.shade.dark} transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;

/**
 * Center In Viewport Component.
 *
 * For positioning an element in the center of the viewport.
 */
export const CenterInViewport = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
`;

/**
 * Footer Component
 */
export const Footer = styled.footer`
    color: ${color.grey.tint.neutral};
    background-color: ${color.grey.shade.dark};
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    padding: 2rem 0.25rem 0.5rem;
    margin: 0;
    width: 100%;
`;

/**
 * Loading Placeholder Component.
 *
 * To leave blank space while the page content is
 * loading / fetching from the server.
 *
 * - Particularly useful to ensure the footer stays off the screen.
 */
export const LoadingPlaceholder = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
`;

/**
 * Social Media Button Link Component.
 *
 * @param {String} color the fill color of the icon
 */
export const SocialMediaButton = styled.a`
    text-decoration: none;
    margin: 0 0.5rem;

    & > svg {
        fill: ${(props) => handleColor(props.color)};
        transition: ease-in-out 0.3s;
    }

    & > svg:hover {
        fill: ${color.black};
        transition: ease-in-out 0.4s;
        }

    &.footer-icon > svg:hover {
        fill: ${color.white};
    }
`;

/**
 * Sliders parent container so they stack and overlay on top of each other.
 *
 * This is required to create an infinite linear translation
 * animation so it appears as though the logos list never ends.
 *
 * - Sure don't mind a good ol' Zinger Stacker!
 *
 */
export const ZingerStackerSliders = styled.div`
    height: 7rem;
    margin: 0.75rem 0;
    overflow: hidden;

    /* Span the slider over the entire screen */
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
`;

/**
 * Logo Slider which displays company logos across the screen.
 *
 * - To create the infinite linear translation, we need to use three
 * sliders containing the logos, which each have a different offset positions.
 * The different offsets make it appear as though the logos translate
 * seamlessly and infinitely.
 * - We need the three sliders to have an offset value of either -1, 0 and 1,
 * respectively.
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const LogoSlider = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 7rem;
    ${(props) => {
        return sliderAnimation(
            props.duration * 3,
            props.offset,
            props.reverse,
        );
    }}
`;

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
 * Description Title Component for the Description Box
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

/**
 * To DO
 *
 */
export const TestimonialStacker = styled.div`
    height: auto;
    margin: 0.75rem 0;
    overflow: hidden;
`;

/**
 * To DO
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const TestimonialSlider = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: inline-block;
    overflow: hidden;
    /* position: absolute; */
    display: flex;
    flex-direction: row;
`;

/**
 * To DO
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const TestimonialBlock = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: flex;
    flex-direction: column;
`;
