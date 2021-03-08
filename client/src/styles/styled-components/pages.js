/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import { Image } from "./general";
import { rotate } from "./keyframes";
import { handleBackgroundImagePosition } from "./responsive";
import {
    linearGradientBackground,
    linearGradientOverlay,
    overlayBackground,
} from "./mixins";
import {
    color,
    transparency,
    handleColor,
} from "./colors";

/**
 * Main page body component.
 */
export const MainPageBody = styled.main`
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
 * Fancy Top Header Component to display at the top of each website page.
 *
 * @param {String} height height of the section
 */
export const TopHeader = styled.header.attrs((props) => ({
    height: props.height || "100vh",
}))`
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 0 2rem;
    clip-path: inset(0);

    &.home {
        min-height: 100vh;
    }
`;

/**
 * Page Section Component.
 *
 * - Separate the page content with sections.
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
    min-height: ${(props) => props.height};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 3rem 11%;
    width: 100%;
    overflow-x: hidden;
    position: relative;
    clip-path: inset(0);

    &.small-viewport {
        padding: 3rem 0;
    }

    &.small-viewport.text-friendly {
        padding: 3rem 1.5rem;
    }

    &.remove-top {
        padding-top: 0;
    }

    &.remove-bottom {
        padding-bottom: 0;
    }

    &.small-top {
        padding-top: 1rem;
    }

    &.small-bottom {
        padding-bottom: 1rem;
    }
`;

/**
 * Page Section Component with image covering background.
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
`;

/**
 * XXX
 */
export const BackgroundImage = styled(Image).attrs((props) => ({
    scrollWithPage: props.scrollWithPage || false,
    xPos: props.xPos || "center",
    yPos: props.yPos || "center",
}))`
    object-fit: cover; /** Cover the image over the container */
    object-position: ${(props) =>
        handleBackgroundImagePosition(props.xPos) +
        " " + handleBackgroundImagePosition(props.yPos)};
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    /** absolute will scroll with the page, fixed will stay in position*/
    position: ${(props) => props.scrollWithPage ? "absolute" : "fixed"};
    z-index: -100; /** Keep it behind everything */
`;

/**
 * XXX
 */
export const BackgroundImageContainer = styled.picture`
    width: auto;
    height: 100%;
`;

/**
 * XXX
 */
export const GradientOverlay = styled.div.attrs((props) => ({
    pos: props.pos || "center",
    attachment: props.attachment || "fixed",
    opacity: props.opacity || 0.5,
}))`
    opacity: ${(props) => props.opacity};
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -99;

    ${(props) => {
        return linearGradientOverlay(
            css`to top`,
            [
                color.grey.shade.dark + transparency.x75,
                color.grey.shade.dark + transparency.x85,
            ],
            props.attachment,
            props.pos,
        );
    }}

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

    &.blog {
        min-height: 100vh;
        ${(props) => {
        return linearGradientBackground(
            css`to top`,
            [
                color.grey.shade.dark,
                color.grey.shade.dark + transparency.x80,
                color.red.light + transparency.x50,
                color.grey.shade.dark + transparency.x90,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }

    &.privacy {
        min-height: 100vh;
        ${(props) => {
        return linearGradientBackground(
            css`to top`,
            [
                color.grey.shade.dark,
                color.grey.shade.dark + transparency.x80,
                color.grey.shade.dark + transparency.x70,
            ],
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }

    &.article {
        ${(props) => {
        return overlayBackground(
            color.grey.shade.darker + transparency.x70,
            props.url,
            props.attachment,
            props.pos,
        );
    }}
    }

    &.account {
        ${(props) => {
        return overlayBackground(
            color.white + transparency.x30,
            props.url,
            props.attachment,
            props.pos,
        );
    }}
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
