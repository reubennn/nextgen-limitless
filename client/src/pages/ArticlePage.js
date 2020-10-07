import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList.js";
import articleContent from "./articleContent";
import * as S from "../styles/styled-components";

/**
 * Component for displaying an Article page
 *
 * React Hooks allows us to access state and other React features,
 * without using the class notation
 *  - e.g. functions that can be called to abstract away state management
 *  for the component
 *  - These can be used without extending React's Component class
 *
 * @param {Object} props.match Router parameter passed down from :name in URL
 * @return {*} an article page for a given topic
 */
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    const [articleInfo, setArticleInfo] = useState({
        upvotes: 0,
        comments: [],
    });
    /*
     *  articleInfo => populated by fetching from server
     *  setArticleInfo => function called to change articleInfo
     *  {} argument passed to useState =>
     *        initial value of articleInfo before loading data or changing state
    */

    /**
     * React Hook: Sets the article info.
     * useEffect is called every time name (the URL) is changed
     */
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        };
        fetchData();
    }, [name]);

    if (!article) {
        return (
            <NotFoundPage item="article" />
        );
    }

    // Filter out the article on the current page for sample articles
    const otherArticles = articleContent.filter((article) =>
        article.name !== name);

    // Check if the article has any comments
    let containsComments = false;
    if (typeof articleInfo.comments !== "undefined" &&
        articleInfo.comments.length > 0) {
        containsComments = true;
    }

    return (
        <S.ArticlePage>
            <S.Header>{article.title}</S.Header>
            <i>This post has been upvoted {articleInfo.upvotes} times</i>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            {containsComments ?
                <CommentsList comments={articleInfo.comments} /> :
                null}
            <S.Header small>Other Articles...</S.Header>
            <ArticlesList articles={otherArticles} />
        </S.ArticlePage>
    );
};

ArticlePage.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }),
};

export default ArticlePage;
