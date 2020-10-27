import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    getArticlesList,
    getLoadingFailedState,
    getLoadingState,
} from "../selectors/articleSelectors";
import {
    fetchAllArticles,
} from "../thunks/articleThunks";
import {
    setLoading,
} from "../actions/articleActions";

import * as S from "../styles/styled-components";
import LoadingIcon from "./LoadingIcon";

const ArticlesList = ({
    articleToFilter,
    inArticlePage,
    // Redux
    loading,
    loadingFailed,
    articles,
    setLoading,
    fetchAllArticles,
}) => {
    const [currentArticle, setCurrentArticle] = useState(articleToFilter);
    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [otherArticles, setOtherArticles] = useState([]);

    /**
     * useEffect tracking currentArticle
     * When user navigates to different page, currentArticle updates,
     * so we need to update the article list
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status

        // Reset
        if (isMounted) {
            // Reset state values
            setOtherArticles([]);
            setLoading(true);
        }
        // Fetch all article content
        fetchAllArticles();

        /**
         * useEffect clean-up:
         * if unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
    }, [currentArticle]);

    useEffect(() => {
        // Populate the other articles list without the current article
        if (typeof articles !== "undefined" &&
            articles.length > 0) {
            articles.map((article, key) => {
                if (article.name !== articleToFilter) {
                    setOtherArticles((prevState) => [
                        ...prevState,
                        article,
                    ]);
                }
            });
            setLoading(false);
        }
    }, []);

    /*
     * If linked clicked to navigate to another article,
     * update the state with the clicked on article name
    */
    const linkClicked = (articleName) => {
        setCurrentArticle(articleName);
    };

    /*
     * Ternary operators to determine the content to render.
     *
     * If article list is within an article page, we don't want
     * to display the loading spinner in the center of the viewport
    */
    const content = loading ?
        (
            inArticlePage ?
                <LoadingIcon /> :
                (
                    <S.LoadingPlaceholder>
                        <S.CenterInViewport>
                            <LoadingIcon />
                        </S.CenterInViewport>
                    </S.LoadingPlaceholder>
                )
        ) :
        (
            otherArticles.map((article, key) => (
                <S.ArticleSample key={key}>
                    <Link to={`/article/${article.name}`}
                        onClick={() => linkClicked(article.name)}>
                        <h3>{article.title}</h3>
                        {/* Get the first 150 characters from the article */}
                        <p>{article.content[0].substring(0, 150)}...</p>
                    </Link>
                    <S.HorizontalRuler></S.HorizontalRuler>
                </S.ArticleSample>
            ))
        );

    return (
        <>
            {content}
        </>
    );
};

ArticlesList.propTypes = {
    articleToFilter: PropTypes.string,
    inArticlePage: PropTypes.bool,
    articles: PropTypes.array,
    loading: PropTypes.bool,
    loadingFailed: PropTypes.bool,
    fetchAllArticles: PropTypes.func,
    setLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({
    // Use Redux selectors
    loading: getLoadingState(state),
    loadingFailed: getLoadingFailedState(state),
    articles: getArticlesList(state),
});

// Dispatch Actions to the Redux Store
const mapDispatchToProps = (dispatch) => ({
    fetchAllArticles: () => dispatch(fetchAllArticles()),
    setLoading: (loading) => dispatch(setLoading(loading)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
