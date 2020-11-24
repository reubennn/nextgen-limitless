/* eslint-disable valid-jsdoc */
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import { fontFamily } from "./fonts";
import { rotate } from "./keyframes";
import { sliderAnimation } from "./mixins";
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

import homepageImg from ".../images/abstract-scenery.jpg";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ Page Components ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Navigation bar Component.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const Navbar = styled.nav.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    color: #fff;
    background-color: ${color.grey.shade.dark};
    margin: 0;
    display: inline-block;
    width: 100%;
    z-index: 100;

    /** Responsive Design Styling */
    padding: ${(props) => handleNavbarPadding(props.viewport.type)};

    /** Styling on homepage */
    &.home {
        color: ${color.grey.shade.dark};
        background-color: transparent;
        position: fixed;
        top: 0;
    }

    &.sidebar-nav {
        height: 100%;
        z-index: 100; /* Stay on top */
        position: fixed; /* Stay in place */
        overflow-x: hidden; /* Disable horizontal scroll */
        transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
        top: 0; /* Stay at the top */
        left: 0;
    }
`;

/**
 * Navbar Link Component.
 */
/** Assign React Router activeClassName */
const activeClassName = "active";

/** Inherit React Router Link to style it */
export const NavbarLink = styled(NavLink)`
    font-family: ${fontFamily.secondary};
    color:${color.grey.tint.neutral};
    font-size: 1.25rem;
    text-align: center;
    text-decoration: none;
    padding: 0.25rem 0;
    margin: 0 0.75rem;
    border-radius: 0.25rem;
    transition: ease-in-out 0.25s;

    &:hover {
        background-color: ${color.grey.tint.neutral};
        color: #fff;
        color: #303030;
        padding: 0.25rem 0.75rem;
        margin: 0;
    }

    &.active {
        opacity: 0.85;
        color: ${color.grey.shade.dark};
        padding: 0.25rem 0.4rem;
        margin: 0 0.35rem;
        background-color: ${color.grey.tint.neutral};

        &:hover {
            opacity: 1;
            padding: 0.25rem 0.75rem;
            margin: 0;
            border-radius: 0.25rem;
        }
    }

    /** Styling on homepage */
    &.home {
        color: ${color.grey.shade.dark};

        &:hover {
            background-color: ${color.grey.shade.dark};
            color: #fff;
        }
    }

    &.home.${activeClassName} {
        color: #fff;
        background-color: ${color.grey.shade.dark};

        &:hover {
            background-color: ${color.grey.shade.dark};
        }
    }
`;

/**
 * Main page body.
 */
export const MainPageBody = styled.main.attrs({
    id: "MainPageBody",
})`
    text-align: left;
    /* equivalent to Section padding: 11%; */
    /* width: 79vw; */
    margin: auto;
`;

/**
 * Homepage Header.
 */
export const HomepageHeader = styled.header`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background-image: url(${homepageImg}); */
    background: ${`linear-gradient(
            to top,
            ${color.grey.shade.dark},
            ${color.grey.shade.dark + transparency.x75},
            #e66465${transparency.x30},
            #9198e5${transparency.x40}),
            url(${homepageImg})`};
    background-color:   ${"#9198e5" + transparency.x40};
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;
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

    /** Responsive Design Styling */
    font-size: ${(props) => handleFeatureTextFontSize(props.viewport.type)};

    &.header-home {
        margin: auto 2.5rem;
    }
`;

// Nice gradient to use somewhere:
// background: linear-gradient(to bottom, #e66465, #9198e5);

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
    padding: 0 11%;
`;

/**
 * Page Section Component.
 *
 * @param {String} height height of the section
 * @param {String} color color of the text
 * @param {String} bgColor background color of the section
 * @param {String} url background image url
 * @param {String} pos background position
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

    &.linear-gradient {
        background: ${(props) => `linear-gradient(
            to bottom,
            #303030,
            ${color.grey.shade.dark + transparency.x50},
            #e66465${transparency.x30},
            #9198e5${transparency.x25}),
            url(${props.url})`};
        background-repeat:no-repeat;
        background-size: cover;
        background-attachment: ${(props) => props.attachment};
        background-position: ${(props) => props.pos};
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
    & {
        color: ${(props) => handleColor(props.color)};
        margin: auto;
        transition: ease-in-out 0.25s;
    }

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
    & {
        color: ${color.grey.tint.neutral};
        background-color: ${color.grey.shade.dark};
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        padding: 2rem 0.25rem 0.5rem;
        margin: 0;
        width: 100%;
    }
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
        fill: #000;
        transition: ease-in-out 0.4s;
        }

    &.footer-icon > svg:hover {
        fill: #fff;
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
