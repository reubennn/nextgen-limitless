import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const CommentsList = ({ comments }) => (
    <S.CommentsList>
        <S.Header small>Comments:</S.Header>
        {comments.map((comment, key) => (
            <div key={key}>
                <h4>- {comment.username} - </h4>
                <p>{comment.text}</p>
                <S.HorizontalRuler thin light></S.HorizontalRuler>
            </div>
        ))}
    </S.CommentsList>
);

CommentsList.propTypes = {
    comments: PropTypes.array,
};

export default CommentsList;
