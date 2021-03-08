import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { isEmpty } from "../scripts/empty";

import {
    getArticlesList,
    getLoadStatus,
} from "../selectors/articleSelectors";
import {
    fetchAllArticles,
} from "../thunks/articleThunks";
import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import ArticleSample from "./ArticleSample";
import LoadingIcon from "./LoadingIcon";
import ServerError from "../pages/ServerError";
import SearchBox from "../components/SearchBox";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a list of articles.
 *
 * If in an article page, this article will be filtered out from the list.
 *
 * @return {Component} list of articles
 */
const ArticlesList = ({
    articleToFilter = null,
    inArticlePage,
    /** Redux */
    viewport,
    loadStatus,
    articles,
    fetchAllArticles,
}) => {
    /** useRef Mount status for cleanup and avoiding memory leaks  */
    const isMounted = useRef(true);

    /** Articles list states */
    const [currentArticle, setCurrentArticle] = useState(articleToFilter);
    const [articlesWithFilter, setArticlesWithFilter] = useState([]);
    const [articlesToDisplay, setArticlesToDisplay] = useState([]);

    /** Article search query which will be specified by user */
    const [searchQuery, setSearchQuery] = useState(null);

    const displayAsRow = viewport.size.is.greaterThan.small;

    /**
     * useEffect which performs cleanup, setting isMounted to false.
     *
     * - This ensures subscriptions and async tasks are cancelled
     * while the component is unmounted.
     */
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    /**
     * useEffect which will attempt to fetch the list of articles
     * if the list has not been loaded yet.
     */
    useEffect(() => {
        if (!loadStatus.loaded || loadStatus.failed) {
            if (isMounted.current) {
                /** Fetch all article content */
                fetchAllArticles();
            }
        }
    }, []);

    /**
     * useEffect triggered when the current article changes, or the
     * articles list has been loaded.
     *
     * - If an article has been provided to filter out, then filter out
     * that article, otherwise populate the entire list.
     */
    useEffect(() => {
        if (typeof articles !== undefined &&
            articles.length > 0 && isMounted.current) {
            /**
             * Function which populates the list of other articles.
             *
             * - If no article has been provided to filter, then
             * we want to display the entire list.
             * - If an article has been provided to filter, filter it
             * out and display the remaining articles.
             */
            const removeFilteredArticle = () => {
                const filteredArticles = articles.filter((article) =>
                    article.path !== articleToFilter);
                setArticlesWithFilter(filteredArticles);
            };

            articleToFilter === null ?
                setArticlesWithFilter(articles) :
                removeFilteredArticle();
        }
    }, [loadStatus.loaded, currentArticle]);

    /**
     * useEffect triggered when the search query changes, or when
     * articlesWithFilter is updated.
     *
     * - Checks if the search query matches the article title, author name or
     * categories it comes under.
     */
    useEffect(() => {
        /**
         * Function which gets the queried articles.
         *
         * - Checks if the search query matches the article title, author name
         * or any categories it comes under.
         *
         * @return {Array} queried articles
         */
        const getQueriedArticles = () => {
            return articlesWithFilter.filter((article) => {
                return queryMatchesProperty(
                    article,
                    "title",
                    searchQuery,
                ) || queryMatchesProperty(
                    article,
                    ["author", "name"],
                    searchQuery,
                ) || queryMatchesCategory(
                    article.categories,
                    searchQuery,
                );
            });
        };

        /**
         * Function which gets the queried articles, or returns the current
         * articles list if no query is specified.
         *
         * @return {Array} queried articles or filtered articles if no query
         */
        const getArticlesToDisplay = () => {
            return searchQuery !== null ?
                getQueriedArticles() :
                articlesWithFilter.slice();
        };

        if (isMounted.current) {
            /** Set the list of articles to display */
            setArticlesToDisplay(getArticlesToDisplay());
        }
    }, [articlesWithFilter, searchQuery]);

    /*
     * If linked clicked to navigate to another article,
     * update the state with the clicked on article path.
    */
    const linkClicked = (articlePath) => {
        setCurrentArticle(articlePath);
    };

    /**
     * Function which checks if the specified query matches
     * any of the article categories.
     *
     * @param {Array} categories list of categories
     * @param {String} query the search query parameter
     * @return {Boolean} true if it matches one of the categories
     */
    const queryMatchesCategory = (categories, query) => {
        return !categories.every((category) => (
            !category.toUpperCase().includes(query.toUpperCase())
        ));
    };

    /**
     * Function which dynamically checks if a particular query
     * matches a particular property within the given object.
     *
     * - If the properties are supplied as an array, the function
     * will get the target nested property in chronological order.
     * - If a single string is supplied, it will be used as the
     * property within the object.
     *
     * @param {Array} object the object to query
     * @param {String|Array} properties the property or nested property to check
     * @param {String} query the search query parameter
     * @return {Boolean} true if the query is found within the property
     */
    const queryMatchesProperty = (object, properties, query) => {
        let targetProperty = object;
        if (typeof (properties) === "string") {
            targetProperty = object[properties];
        } else {
            for (let i = 0; i < properties.length; i++) {
                if (!targetProperty) return;
                targetProperty = targetProperty[properties[i]];
            }
        }
        return targetProperty
            .toUpperCase()
            .includes(query.toUpperCase());
    };

    /**
     * Handler function which updates the state when the search query changes.
     *
     * @param {String} query the search query
     */
    const handleQueryChange = (query) => {
        !isEmpty(query) ?
            setSearchQuery(query) :
            setSearchQuery(null);
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
                    displayAsRow ?
                        (
                            <S.FlexContainer
                                className="full-width no-margin"
                                wrapContent>
                                {articlesToDisplay.map((article, key) => (
                                    <ArticleSample
                                        key={key}
                                        article={article}
                                        linkClicked={linkClicked} />
                                ))}
                            </S.FlexContainer>
                        ) :
                        articlesToDisplay.map((article, key) => (
                            <ArticleSample
                                key={key}
                                article={article}
                                linkClicked={linkClicked} />
                        ))
                )
        );

    return (
        <>
            {!loadStatus.failed ?
                (
                    <>
                        <S.Header
                            as="h4">
                            Explore our articles below.
                        </S.Header>
                        <SearchBox
                            width="75%"
                            onChangeHandler={handleQueryChange} />
                    </>
                ) :
                (
                    <S.Header
                        as="h4">
                        Sorry, we weren&apos;t able to load any
                        articles at the moment.
                    </S.Header>
                )

            }
            {
                articlesToDisplay.length > 0 || searchQuery !== null &&
                <S.Header as="h5">
                    <S.Text>
                        Could not find any articles that match the query:
                    </S.Text>
                    {!displayAsRow && <br />}
                    <S.Text> &quot;{searchQuery}&quot;.</S.Text>
                </S.Header>
            }
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
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
    /**
     * The loading status for fetching data from server API.
     */
    loadStatus: PropTypes.object,
    /**
     * Function to fetch all articles from the server API.
     */
    fetchAllArticles: PropTypes.func,
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
    viewport: {
        dimensions: getViewportDimensions(state),
        size: getViewportSize(state),
        type: getViewportType(state),
    },
});

/**
 * Assign props to dispatch actions to the Redux Store.
 *
 * @param {*} dispatch action to dispatch
 * @return {Function} functions mapped to the Component as props
 */
const mapDispatchToProps = (dispatch) => ({
    fetchAllArticles: () => dispatch(fetchAllArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);
