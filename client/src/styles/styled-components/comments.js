/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { color } from "./colors";

/**
 * Comments List Component.
 */
export const CommentsList = styled.div`
    padding: 1.5rem;
`;


/**
 * Comments List Component.
 */
export const CommentUser = styled.div`
    color: ${color.grey.tint.neutral};
    font-size: 0.85rem;
    font-style: italic;
    font-weight: normal;
    margin-bottom: 0.5rem;

    &::before {
        content: "- ";
    }

    &::after {
        content: " -";
    }
`;

/**
 * Upvote Section Component.
 */
export const UpvoteSection = styled.div`
    color: ${color.grey.shade.light};
    display: flex;
    flex-direction: row;
    margin-left: auto;
    justify-content: flex-end;
    flex-wrap: wrap;
    margin-top: 0.5rem;

    i:first-of-type {
        /* display: block; */
        margin: auto 0.6rem;
        text-align: right;
    }
`;
