import React, { useState } from "react";
import PropTypes from "prop-types";

import ResizableTextarea from "./ResizableTextArea";
import * as S from "../styles/styled-components";

const AddCommentForm = ({ articleName, setArticleInfo }) => {
    const [username, setUsername] = useState("");
    const [commentText, setCommentText] = useState("");

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
    articleName: PropTypes.string,
    setArticleInfo: PropTypes.func,
};

export default AddCommentForm;
