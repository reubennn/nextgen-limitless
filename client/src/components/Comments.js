import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import AddCommentForm from "./AddCommentForm";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a list of the articles comments.
 *
 * If the article has no comments, a message is displayed
 * to invite the user to make a new comment.
 *
 * @return {Component} list of comments if any exist
 */
const Comments = ({
    comments,
    articlePath,
    setArticle,
    containsComments,
    viewport,
}) => {
    return (
        <>
            <S.Header
                as="h2"
                className="uppercase dark-background">
                Comments:
            </S.Header>
            <S.CommentsList>
                {!containsComments &&
                    <>
                        <p className="center-text">
                            There are no comments to display.
                            Feel free to comment using the form below!
                        </p>
                        <S.HorizontalRuler
                            thin
                            color="grey-tint-neutral"
                            width={"70%"} />
                    </>
                }
                {comments.map((item, key) => (
                    <div key={key}>
                        <S.CommentUser>
                            {item.name}
                        </S.CommentUser>
                        <p>{item.comment}</p>
                        <S.HorizontalRuler
                            thin
                            color="grey-tint-neutral" />
                    </div>
                ))}
            </S.CommentsList>
            <AddCommentForm
                className={viewport.size.is.lessThan.medium &&
                    "small-viewport"}
                articlePath={articlePath}
                setArticle={setArticle} />
        </>
    );
};

Comments.propTypes = {
    /**
     * Array of comments
     */
    comments: PropTypes.array,
    /**
     * The article url articlePath.
     */
    articlePath: PropTypes.string,
    /**
     * useState React Hook passed down as props to update the article info.
     * Not used in this Component, but passed onto AddCommentForm.
     * - Originates from ArticlePage -> CommentsList -> AddCommentForm.
     * - TODO: Use Redux to avoid props drilling.
     */
    setArticle: PropTypes.func,
    /**
     * Used to check if the article contains comments for conditional rendering.
     */
    containsComments: PropTypes.bool,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props as Redux Selectors to connect the Component to the Redux store
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    viewport: {
        dimensions: getViewportDimensions(state),
        size: getViewportSize(state),
        type: getViewportType(state),
    },
});

export default connect(mapStateToProps)(Comments);
