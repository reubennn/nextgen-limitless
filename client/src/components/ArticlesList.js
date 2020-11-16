import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    getArticlesList,
    getLoadStatus,
} from "../selectors/articleSelectors";
import {
    fetchAllArticles,
} from "../thunks/articleThunks";
import {
    setLoading,
    resetLoading,
} from "../actions/articleActions";

import LoadingIcon from "./LoadingIcon";
import ServerError from "../pages/ServerError";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a list of articles.
 *
 * If in an article page, this article will be filtered out from the list.
 *
 * @return {Component} list of articles
 */
const ArticlesList = ({
    articleToFilter,
    inArticlePage,
    /** Redux */
    loadStatus,
    articles,
    setLoading,
    resetLoading,
    fetchAllArticles,
}) => {
    const [currentArticle, setCurrentArticle] = useState(articleToFilter);
    // const [articles, setArticles] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [otherArticles, setOtherArticles] = useState([]);

    /**
     * useEffect tracking currentArticle.
     * - When user navigates to different page, currentArticle updates,
     * so we need to update the article list.
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status

        if (isMounted) {
            // Reset state values
            setOtherArticles([]);
            setLoading(true);
        }
        // Fetch all article content
        fetchAllArticles();

        /**
         * useEffect clean-up:
         * If unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
    }, [currentArticle]);

    useEffect(() => {
        // Populate the other articles list without the current article
        if (typeof articles !== "undefined" &&
            articles.length > 0) {
            articleToFilter === "undefined" ?
                setOtherArticles(articles) :
                (
                    articles.map((article, key) => {
                        if (article.name !== articleToFilter) {
                            setOtherArticles((prevState) => [
                                ...prevState,
                                article,
                            ]);
                        }
                    })
                );
            setLoading(false);
        }
    }, [currentArticle]);

    /*
     * If linked clicked to navigate to another article,
     * update the state with the clicked on article name.
    */
    const linkClicked = (articleName) => {
        setCurrentArticle(articleName);
    };

    /*
     * Ternary operators to determine the content to render.
     *
     * If article list is within an article page, we don't want
     * to display the loading spinner in the center of the viewport.
     *
     * If unable to fetch data from server API, display server error page.
    */
    const content = loadStatus.loading ?
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
            loadStatus.failed ?
                <ServerError errorCode={loadStatus.code} /> :
                (
                    otherArticles.map((article, key) => (
                        <S.ArticleSample key={key}>
                            <Link to={`/article/${article.name}`}
                                onClick={() => linkClicked(article.name)}>
                                <S.FlexContainer row className="no-margin">
                                    <S.Image
                                        src={article.featureImg.src}
                                        alt={article.featureImg.alt}
                                        height="auto"
                                        width="60%" />
                                    <S.FlexContainer column>
                                        <h3>{article.title}</h3>
                                        <p>
                                            {article.content[0]
                                                .substring(0, 150)}...
                                        </p>
                                    </S.FlexContainer>
                                </S.FlexContainer>
                            </Link>
                            <S.HorizontalRuler />
                        </S.ArticleSample>
                    ))
                )
        );

    return (
        <>
            {content}
        </>
    );
};

ArticlesList.propTypes = {
    /**
     * The article to filter from the list.
     */
    articleToFilter: PropTypes.string,
    /**
     * True if this Component is within an article page.
     * - Used to determine conditional rendering.
     */
    inArticlePage: PropTypes.bool,
    /**
     * The articles stored as an array.
     */
    articles: PropTypes.array,
    /**
     * The loading status for fetching data from server API.
     */
    loadStatus: PropTypes.object,
    /**
     * Function to fetch all articles from the server API.
     */
    fetchAllArticles: PropTypes.func,
    /**
     * Function to set the loading state.
     */
    setLoading: PropTypes.func,
    /**
     * Function to reset the loading state.
     */
    resetLoading: PropTypes.func,
};

/**
 * Assign props using Redux selectors
 * to connect the Component to the Redux store.
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    loadStatus: getLoadStatus(state),
    articles: getArticlesList(state),
});

/**
 * Assign props to dispatch actions to the Redux Store.
 *
 * @param {*} dispatch action to dispatch
 * @return {Function} functions mapped to the Component as props
 */
const mapDispatchToProps = (dispatch) => ({
    fetchAllArticles: () => dispatch(fetchAllArticles()),
    setLoading: (loading) => dispatch(setLoading(loading)),
    resetLoading: () => dispatch(resetLoading()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
