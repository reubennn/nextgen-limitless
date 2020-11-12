/* eslint-disable valid-jsdoc */
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

import {
    theme,
    fontFamily,
    handleColor,
    rotate,
} from "./config";

import {
    handleNavbarPadding,
    handleFeatureTextFontSize,
} from "./responsive";

import { Header, FlexContainer } from "./general";

import northBeachImage from ".../assets/images/north-head-manly-australia.jpg";
import subtlePrismSVG from ".../assets/images/subtle-prism.svg";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ Page Components ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Navbar Component
 */
export const Navbar = styled.nav.attrs((props) => ({
    /** Viewport type used for responsive design */
    viewport: {
        type: props.type || "default",
    },
}))`
    color: #fff;
    background-color: ${theme.color.dark};
    margin: 0;
    display: inline-block;
    width: 100%;

    /** Responsive Design Styling */
    padding: ${(props) => handleNavbarPadding(props.viewport.type)};

    /** Styling on homepage */
    &.home {
        color: ${theme.color.dark};
        background-color: transparent;
        position: fixed;
        top: 0;
    }
`;

/**
 * Navbar Link Component
 */
/** Assign React Router activeClassName */
const activeClassName = "active";

/** Inherit React Router Link to style it */
export const NavbarLink = styled(NavLink)`
    & {
        font-family: ${fontFamily.secondary};
        color:${theme.color.lighter};
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0;
        margin: 0 0.75rem;
        border-radius: 0.25rem;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        background-color: ${theme.color.lighter};
        color: #fff;
        color: #303030;
        padding: 0.25rem 0.75rem;
        margin: 0;
    }

    &.active {
        opacity: 0.85;
        color: ${theme.color.dark};
        padding: 0.25rem 0.4rem;
        margin: 0 0.35rem;
        background-color: ${theme.color.lighter};

        &:hover {
            opacity: 1;
            padding: 0.25rem 0.75rem;
            margin: 0;
            border-radius: 0.25rem;
        }
    }

    /** Styling on homepage */
    &.home {
        color: ${theme.color.dark};

        &:hover {
            background-color: ${theme.color.dark};
            color: #fff;
        }
    }

    &.home.${activeClassName} {
        color: #fff;
        background-color: ${theme.color.dark};

        &:hover {
            background-color: ${theme.color.dark};
        }
    }
`;

/**
 * Main page body
 */
export const MainPageBody = styled.main.attrs({
    id: "MainPageBody",
})`
    text-align: left;
    width: 79vw; /* equivalent to Section padding: 11%; */
    margin: auto;
`;

/**
 * Homepage Header
 */
export const HomepageHeader = styled.header`
    height: 85vh;
    min-height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${subtlePrismSVG});
    background-color: #ffe2ad;
    background-attachment: fixed;
    background-size: cover;
    background-position: 50%;
`;


/**
 * Feature Text Component
 */
export const FeatureText = styled.p.attrs((props) => ({
    color: props.color || "inherit",
    /** Viewport type used for responsive design */
    viewport: {
        type: props.type || "default",
    },
}))`
    color: ${(props) => handleColor(props.color)};
    font-family: ${fontFamily.secondary};
    /* font-size: 1.5rem; */
    font-weight: 500;
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
 * Homepage Header
 */
export const Section = styled.section.attrs((props) => ({
    height: props.height || "40vh",
    color: props.color || "#fff",
    bgColor: props.bgColor || theme.color.dark,
}))`
    color: ${(props) => handleColor(props.color)};
    background-color: ${(props) => handleColor(props.bgColor)};
    /* height: ${(props) => props.height}; */
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 11%;

    &.banner {
        /* background-image: url(${northBeachImage}); */
        background: linear-gradient(to bottom, #303030,rgb(48, 48, 48, 0.5), rgb(230, 100, 101, 0.6), rgb(145, 152, 229, 0.25)), url(${northBeachImage});
        background-attachment: fixed;
        background-size: 100% auto;
        background-position: 0 55%;
    }
`;

/**
 * CommentsList Component
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
        color: ${theme.color.grey};
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
 * UpvoteSection Component
 */
export const UpvoteSection = styled.div`
    color: ${theme.color.greyDarker};
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
 * UpvoteSection Component
 */
export const FooterPaddingPlaceholder = styled.div`
    padding-bottom: calc(100vh - 38rem);
`;

/**
 * UpvoteSection Component
 */
export const NotFound = styled(FooterPaddingPlaceholder)`
    background-color: #f1f1f1;
`;

/**
 * AddCommentForm Component
 */
export const AddCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

/**
 * Inherit React Router Link to style it
 */
export const RouterLink = styled(Link)`
    & {
        color: ${(props) => handleColor(props.color)};
        margin: auto;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        color: ${theme.color.dark};
    }
`;

/**
 * Inherit React Router Link to style it
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
 * Inherit React Router Link to style it
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
 * ArticleSample Component
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
        border-left: 0.1rem solid ${(props) => theme.color.dark};
        border-right: 0.1rem solid ${(props) => theme.color.dark};
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
 * LoadingIcon Component
 */
export const LoadingIcon = styled.nav.attrs({
    className: "LoadingIcon",
})`
    & {
        display: block;
        position: relative;
        width: 3rem;
        height: 3rem;
        margin: auto;
    }

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
        border: 0.35rem solid ${theme.color.dark};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${theme.color.dark} transparent transparent transparent;

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
 * CenterInViewport Component
 *
 * For positioning the element in the center of the viewport
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
        color: ${theme.textGrey};
        background-color: ${theme.color.dark};
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        padding: 2rem 0.25rem 0.5rem;
        margin: 0;
        margin-top: 4rem;
        width: 100%;
    }
`;

/**
 * Loading Placeholder Component to leave blank space
 * while the page content is loading / fetching from the server.
 *
 * Particularly useful to ensure the footer stays off the screen.
 */
export const LoadingPlaceholder = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
`;

/**
 * Social Media Button Link Component
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
