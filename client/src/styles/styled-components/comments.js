/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { Image } from "./general";
import { color, transparency } from "./colors";
import { handleCommentsWidth } from "./responsive";

/**
 * Conversation Section container for the comments list, comments sorting
 * and quick add comment button.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const ConversationSection = styled.div.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    padding: 1.5rem;
    margin: auto;
    /** Responsive design*/
    width: ${(props) => handleCommentsWidth(props.viewport.type)};
`;

/**
 * Wrapper container for a comment.
 */
export const CommentWrapper = styled.ul`
    margin-top: 1.5rem;
`;

/**
 * Wrapper container for a comment.
 */
export const RepliesWrapper = styled.ul`
    margin-left: 1rem;
    padding-left: 1rem;
    border-left: 0.05rem solid ${color.grey.tint.lightest + transparency.x75};
`;

/**
 * CommentUser Component to display the name of the user.
 */
export const CommentUser = styled.div`
    color: ${color.grey.shade.darkest};
    font-weight: bold;
`;

/**
 * CommentTimestamp Component to display the timestamp of the comment.
 */
export const CommentTimestamp = styled.time`
    color: ${color.grey.tint.darker};
    margin: 0;
`;

/**
 * CommentText Component to display the comment.
 */
export const CommentText = styled.p`
    padding: 0;
    margin: 0.5rem 0;
    word-wrap: break-word;
`;

/**
 * Comment user avatar component.
 *
 * - Small author avatar to display next to the user in the comment.
 */
export const UserAvatar = styled(Image)`
    border-radius: 50%;
    height: 2rem;
    width: 2rem;
    margin-right: 0.75rem;
    margin-left: 1rem;
    margin-top: 0.3rem;
`;

/**
 * Select component for choosing a sorting method.
 */
export const SelectSort = styled.select`
    font-weight: bold;
    margin: auto;
    margin-left: 0;
    padding: 0.25rem 0.75rem;
    padding-left: 0.25rem;
    border: none;
    cursor: pointer;
`;

/**
 * Tally container for the thumbs-up/thumbs-down icon and the number
 * associated with the TallyCount (upvotes/downvotes).
 */
export const TallyContainer = styled.div`
    display: flex;
    margin: 0 0.5rem;
`;

/**
 * Component for displaying the tally count for upvotes or downvotes.
 */
export const TallyCount = styled.label`
    color: ${color.grey.tint.neutral};
    margin-left: 0rem;
`;

/**
 * Upvote Section Component to upvote an article.
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
