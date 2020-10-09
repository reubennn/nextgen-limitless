import React from "react";
import PropTypes from "prop-types";
import AddCommentForm from "./AddCommentForm";
import * as S from "../styles/styled-components";

const CommentsList = ({
    comments,
    articleName,
    setArticleInfo,
    containsComments, }) => (
        <S.CommentsList>
            <S.Header small>Comments:</S.Header>
            {(!containsComments) &&
                <>
                    <p className="no-comments">There are no comments to display.
                    Feel free to comment using the form below!</p>
                    <S.HorizontalRuler thin light width={"70%"}/>
                </>
            }
            {comments.map((comment, key) => (
                <div key={key}>
                    <h4>- {comment.username} - </h4>
                    <p>{comment.text}</p>
                    <S.HorizontalRuler thin light />
                </div>
            ))}
            <AddCommentForm
                articleName={articleName}
                setArticleInfo={setArticleInfo} />
        </S.CommentsList>
    );

CommentsList.propTypes = {
    comments: PropTypes.array,
    articleName: PropTypes.string,
    setArticleInfo: PropTypes.func,
    containsComments: PropTypes.bool,
};

export default CommentsList;
