import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList.js";
import UpvotesSection from "../components/UpvoteSection";
import LoadingIcon from "../components/LoadingIcon";

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
    const [found, setFound] = useState(true);
    const [loading, setLoading] = useState(true);
    const inArticlePage = true;

    const defaults = {
        _id: null,
        name: name,
        title: null,
        content: [],
        upvotes: null,
        comments: [],
    };

    /*
     *  Use React Hook to access state
     *
     *  articleInfo => populated by fetching from server
     *  setArticleInfo => function called to change articleInfo
     *  {} argument passed to useState =>
     *        initial value of articleInfo before loading data or changing state
    */
    const [articleInfo, setArticleInfo] = useState(defaults);

    /**
     * React Hook: Sets the article info.
     * useEffect is called every time name (the URL) is changed.
     * ie. User has navigated to another article
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status

        // Reset the article state properties with the defaults
        if (isMounted) {
            setArticleInfo(defaults);
            setLoading(true);
        }

        const fetchData = async () => {
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            return {
                result,
                body,
            };
        };
        fetchData().then((data) => {
            if (isMounted) {
                if (data.result.status === 404) {
                    setFound(false);
                } else {
                    setArticleInfo(data.body);
                    setLoading(false);
                }
            }
        });

        /**
         * useEffect clean-up:
         * if unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
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
    };

    const content = loading ?
        (
            <S.LoadingPlaceholder>
                <S.CenterInViewport>
                    <LoadingIcon />
                </S.CenterInViewport>
            </S.LoadingPlaceholder>
        ) :
        (
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
                <ArticlesList
                    articleToFilter={name}
                    inArticlePage={inArticlePage}
                />
            </>
        );

    return (
        content
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
