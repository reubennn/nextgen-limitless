import React from "react";
import PropTypes from "prop-types";

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
const CommentsList = ({
    comments,
    articleName,
    setArticleInfo,
    containsComments,
}) => {
    return (
        <S.CommentsList>
            <S.Header small>Comments:</S.Header>
            {(!containsComments) &&
                <>
                    <p className="no-comments">There are no comments to display.
                    Feel free to comment using the form below!</p>
                    <S.HorizontalRuler thin color="lighter" width={"70%"} />
                </>
            }
            {comments.map((comment, key) => (
                <div key={key}>
                    <h4>- {comment.username} - </h4>
                    <p>{comment.text}</p>
                    <S.HorizontalRuler thin color="lighter" />
                </div>
            ))}
            <AddCommentForm
                articleName={articleName}
                setArticleInfo={setArticleInfo} />
        </S.CommentsList>
    );
};

CommentsList.propTypes = {
    /**
     * Array of comments
     */
    comments: PropTypes.array,
    /**
     * The article name.
     */
    articleName: PropTypes.string,
    /**
     * useState React Hook passed down as props to update the article info.
     * Not used in this Component, but passed onto AddCommentForm.
     * - Originates from ArticlePage -> CommentsList -> AddCommentForm.
     * - TODO: Use Redux to avoid props drilling.
     */
    setArticleInfo: PropTypes.func,
    /**
     * Used to check if the article contains comments for conditional rendering.
     */
    containsComments: PropTypes.bool,
};

export default CommentsList;
