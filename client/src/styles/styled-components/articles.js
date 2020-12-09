/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import { HeaderSimple, Button, Image } from "./general";
import { gradientTransition } from "./mixins";
import { handleTextSampleHeight, handleFlexBasis } from "./responsive";
import {
    color,
    transparency,
} from "./colors";

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const ArticleSampleContainer = styled.article.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    position: relative;
    min-height: 25vh;
    margin: 1rem;
    margin-top: 2rem;
    background-color: ${color.white};
    transition: ease-in-out 0.25s;
    overflow: hidden;
    flex-basis: ${(props) => handleFlexBasis(props.viewport.type)};

    &:hover {
        box-shadow: 0 0 1rem 0 ${color.black + transparency.x50};
        transition: ease-in-out 0.3s;
        transform: scale(1.05);
    }
`;

/**
 * Article Image and Title Container.
 *
 * - Used as a relative position mechanism so the title
 * can be positioned over the image and hang off the bottom slightly.
 */
export const ArticleImageTitleContainer = styled.div`
    position: relative;
    padding: 0;
    margin: 0;
    width: 100%;
    display: block; /* Fix whitespace at bottom */
`;

/**
 * Article Image Container.
 *
 * - Important to hide image overflow when it expands on hover.
 */
export const ArticleImageContainer = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
`;

/**
 * Article Sample Feature Image Component.
 *
 * Container for the article sample feature image.
 *
 * @param {String} height height of the image
 * @param {String} width width of the image
 */
export const ArticleSampleImage = styled.img.attrs((props) => ({
    height: props.height || "auto",
    width: props.width || "100%",
}))`
    min-height: ${(props) => props.height};
    min-width: ${(props) => props.width};
    object-fit: cover;
    display: block; /* Fix whitespace at bottom */
    z-index: 0; /* Make the image behind the title */
    transition: cubic-bezier(0, 0, 0.2, 1) 2s;

    &:hover {
        transform: translateZ(0) scale(1.3);
    }
`;

/**
 * Article Sample Titlebox Container.
 *
 * Box which overlays the sample article image containing
 * the title and author.
 */
export const ArticleSampleTitlebox = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    position: absolute;
    left: 0;
    bottom: -2rem;
    margin: 0;
    padding: 1rem 0.75rem;
    min-height: 6rem;
    max-width: 85%;
    text-align: left;
    color: ${color.grey.tint.lightest};
    background-color: ${color.grey.shade.darkest + transparency.x90};
    z-index: 1; /* Make title in front of image */
    transition: ease-in-out 0.25s;
`;

/**
 * Simple Header Component with minimal styling for the Article Sample Title.
 *
 * Setting props.as will convert the html tag to the appropriate
 * header type (h1, h2, h3.. etc.)
 *
 * @param {String} as sets the html tag, h1, h2 etc.
 * @param {String} color text color
 * @param {String} bgColor background color
 * @param {String} textAlign text align style
 */
export const ArticleSampleTitle = styled(HeaderSimple)`
    text-align: left;
    margin: 0.5rem;
    margin-top: 0;
    text-transform: uppercase;
    position: relative;

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
        border-bottom: 0.1rem solid ${color.grey.tint.lightest};
        transition: ease-in-out 0.25s;
    }

    &:hover::after {
        width: 100%;
    }

    &.author {
        margin: auto;
        margin-left: 0.75rem;
        text-align: left;

        &::after {
            content: none;
        }
    }
`;

/**
 * Article Sample Text Component.
 *
 * For styling the article sample text.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const ArticleSampleText = styled.div.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    color: ${color.grey.shade.light};
    background-color: ${color.white};
    padding: 2rem;
    padding-top: 3rem;
    margin: 0;
    /* If less text, ensure it remains the same height */
    min-height: ${(props) => handleTextSampleHeight(props.viewport.type)};
    max-height: ${(props) => handleTextSampleHeight(props.viewport.type)};
`;

/** Pseudo button properties required for gradient transition */
const pseudoButtonProperties = css`
    border-radius: 0.25rem;
`;

/**
 * Article Sample Text Component.
 *
 * For styling the article sample text.
 */
export const ArticleSampleButton = styled(Button)`
    margin-bottom: 1.5rem;
    border-radius: 0.25rem;
    background: ${`linear-gradient(
        245deg,
        ${color.blue.darker + transparency.x70} -90%,
        ${color.purple.darker + transparency.x70} 120%)`};
        color: ${color.white};

        ${() => { // Use function to avoid Prettier ugly formatting.
        return gradientTransition(
            color.blue.darker + transparency.x70,
            color.purple.darker + transparency.x70,
            pseudoButtonProperties,
        );
    }}

    &:hover {
        color: ${color.white};
    }
`;

/**
 * Article author avatar component.
 *
 * - Small author avatar to display next to the author name.
 */
export const AuthorAvatar = styled(Image)`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    margin-right: 0;
    margin-left: 1rem;
`;
