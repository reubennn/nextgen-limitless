import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList.js";
import UpvotesSection from "../components/UpvoteSection";

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
    const loading = true;
    const [found, setFound] = useState(true);
    // let notFound = false;
    // const article = articleContent.find((article) => article.name === name);

    /*
     *  Use React Hook to access state
     *
     *  articleInfo => populated by fetching from server
     *  setArticleInfo => function called to change articleInfo
     *  {} argument passed to useState =>
     *        initial value of articleInfo before loading data or changing state
    */
    const [articleInfo, setArticleInfo] = useState({
        _id: null,
        name: name,
        title: "",
        content: [],
        upvotes: null,
        comments: [],
    });

    /**
     * React Hook: Sets the article info.
     * useEffect is called every time name (the URL) is changed
     */
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            if (result.status === 404) {
                setFound(false);
            } else {
                setArticleInfo(body);
            }
        };
        fetchData();
    }, [name]);

    // Check if the article has any comments
    let containsComments = false;
    if (typeof articleInfo.comments !== "undefined" &&
        articleInfo.comments.length > 0) {
        containsComments = true;
    }

    if (!found) {
        return (
            <NotFoundPage item="article" />
        );
    } else if (articleInfo._id === null) {
        return (
            <p style={{ textAlign: "center" }}>Loading...</p>
        )
    }

    return (
        <>
            <S.Header>{articleInfo.title}</S.Header>
            <UpvotesSection
                articleName={name}
                upvotes={articleInfo.upvotes}
                setArticleInfo={setArticleInfo} />
            {articleInfo.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList
                comments={articleInfo.comments}
                articleName={name}
                setArticleInfo={setArticleInfo}
                containsComments={containsComments} />
            <S.Header small>Other Articles...</S.Header>
            <ArticlesList articleToFilter={name} />
        </>
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
