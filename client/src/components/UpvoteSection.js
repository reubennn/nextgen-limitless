import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    const upvoteArticle = async () => {
        const response = await fetch(`/api/articles/${articleName}/upvote`, {
            method: "POST",
        });
        const body = await response.json();
        setArticleInfo(body.value);
    };

    return (
        <>
            <S.UpvoteSection>
                <i>This post has been upvoted {upvotes} times</i>
                <S.Button onClick={() => upvoteArticle()}>Add Upvote</S.Button>
            </S.UpvoteSection>
            <S.HorizontalRuler thin smallMargin />
        </>
    );
};

UpvoteSection.propTypes = {
    articleName: PropTypes.string,
    upvotes: PropTypes.number,
    setArticleInfo: PropTypes.func,
};

export default UpvoteSection;
