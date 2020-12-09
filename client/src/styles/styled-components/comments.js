/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { Header } from "./general";
import { color } from "./colors";

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
 * Add Comment Form Component.
 */
export const AddCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
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
