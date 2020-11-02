import React, { useState } from "react";
import PropTypes from "prop-types";

import ResizableTextarea from "./ResizableTextArea";

import * as S from "../styles/styled-components";

/**
 * React Component for an add comment form.
 *
 * Allows a user to enter their name, a comment and then post it.
 *
 * @return {Component} add comment form for posting a comment to an article
 */
const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

    /**
     * Function called from on click event of the add comment button.
     * - Sends POST request to server API to post the comment to the database.
     */
    const addComment = async () => {
        const response = await fetch(
            `/api/articles/${articleName}/add-comment`,
            {
                method: "POST",
                headers: {
                    // Tell server we are passing JSON
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    text: commentText,
                }),
            });
        const body = await response.json();
        setArticleInfo(body.value);
        // Reset the form to blank values
        setUsername("");
        setCommentText("");
    };

    return (
        <S.AddCommentForm>
            <h3>Add a Comment</h3>
            <S.Label>Name:</S.Label>
            <S.Input
                type="text"
                value={username}
                placeholder="John Doe"
                onChange={(event) => setUsername(event.target.value)}
            />
            <S.Label>Comment:</S.Label>
            <ResizableTextarea
                commentText={commentText}
                setCommentText={setCommentText}
            />
            <S.Button onClick={() => addComment()}>
                Add comment
            </S.Button>
        </S.AddCommentForm>
    );
};

AddCommentForm.propTypes = {
    /**
     * Name of the article
     */
    articleName: PropTypes.string,
    /**
     * useState React Hook passed down as props to update the article info
     * to include the new comment if successfully posted to the database.
     * - Originates from ArticlePage -> CommentsList -> AddCommentForm.
     * - TODO: Use Redux to avoid props drilling.
     */
    setArticleInfo: PropTypes.func,
};

export default AddCommentForm;
