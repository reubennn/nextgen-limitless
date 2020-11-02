import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components";

/**
 * React Component to display the upvotes section of an article.
 *
 * @return {Component} upvote section
 */
const UpvoteSection = ({ articleName, upvotes, setArticleInfo }) => {
    /**
     * Function called during upvote button on click event.
     * - Sends POST request to server API to add an upvote to the database.
     * - Updates the article info with the new upvote number.
     */
    const upvoteArticle = async () => {
        const response = await fetch(`/api/articles/${articleName}/upvote`, {
            method: "POST",
        });
        const body = await response.json();
        setArticleInfo(body.value);
    };

    /**
     * Check if upvotes are 1.
     * -Used to generate conditional rendering to ensure the grammar is correct.
     */
    let upvotesIsOne = false;
    if (upvotes === 1) {
        upvotesIsOne = true;
    }

    return (
        <>
            <S.UpvoteSection>
                <i>This post has been upvoted <b>{upvotes}</b> time
                    {!upvotesIsOne && "s"}</i>
                <S.Button
                    className="upvote-button"
                    onClick={() => upvoteArticle()}>
                    +1
                </S.Button>
            </S.UpvoteSection>
            <S.HorizontalRuler thin smallMargin color="light" />
        </>
    );
};

UpvoteSection.propTypes = {
    /**
     * The name of the article.
     */
    articleName: PropTypes.string,
    /**
     * The number of upvotes the article has.
     */
    upvotes: PropTypes.number,
    /**
     * useState React Hook passed down as props to update the article info
     * to include the new upvote value.
     */
    setArticleInfo: PropTypes.func,
};

export default UpvoteSection;
