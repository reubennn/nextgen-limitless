/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import {
    color,
} from "./colors";
import { Image, HeaderSimple } from "./general";

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 */
export const TestimonialContainer = styled.div`
    margin: 0 1rem;
`;

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 */
export const TestimonialText = styled.div`
    margin: 2rem 0;
    font-style: italic;
    position: relative;
`;

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 */
export const TestimonialAuthor = styled(HeaderSimple)`
    margin-top: 1rem;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
`;

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 */
export const TestimonialRole = styled(HeaderSimple)`
    margin-bottom: 0.5rem;
    margin-top: 1rem;
`;

/**
 * Article Sample Container Component.
 *
 * Contains all elements for an article sample.
 *
 */
export const TestimonialAuthorImage = styled(Image)`
    border-radius: 50%;
    height: 6rem;
    width: 6rem;
    box-shadow: 0 0 0.05rem 0.1rem ${color.white};
`;
