import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import ArticlesList from "../components/ArticlesList";
import NotFound from "./NotFound";
import Comments from "../components/Comments.js";
import UpvotesSection from "../components/UpvoteSection";
import LoadingIcon from "../components/LoadingIcon";
import SocialMediaButton from "../components/SocialMediaButton";
import Navbar from "../components/Navbar";

import socialMediaIcons from "../data/socialMediaIcons";

import * as S from "../styles/styled-components/styled";

/**
 * Component for displaying an Article page.
 *
 * React Hooks allows us to access state and other React features,
 * without using the class notation.
 *  - e.g. functions that can be called to abstract away state management
 *  for the component.
 *  - These can be used without extending React's Component class.
 *
 * @return {Component} an article page for a given topic
 */
const Article = ({ match, viewport }) => {
    /** useRef Mount status for cleanup and avoiding memory leaks  */
    const isMounted = useRef(true);

    const path = match.params.path;
    const [found, setFound] = useState(true);
    const [loading, setLoading] = useState(true);
    const inArticlePage = true;
    const smallerViewport = viewport.size.is.lessThan.small;

    /**
     * Default article properties used to reset the state
     */
    const initialState = {
        _id: null,
        path: path,
        title: null,
        author: null,
        timestamp: null,
        image: null,
        content: [],
        upvotes: null,
        comments: [],
        categories: [],
    };

    /*
     *  Use React Hook to access state
     *
     *  article => populated by fetching from server
     *  setArticle => function called to change article
     *  {} argument passed to useState =>
     *        initial value of article before loading data or changing state
    */
    const [article, setArticle] = useState(initialState);

    /**
     * Handle fetch function wrapper to handle interrupted HTTP fetch requests.
     *
     * - If the AbortController signal is aborted (ie, through a component
     * unmount).
     *
     * @param {AbortController} controller AbortController used to cancel fetch
     * @param {Function} operations fetch operations to perform
     * @return {*} HTTP response object or null if empty or aborted
     *      - @property {Object} result HTTP response values
     *      - @property {Object} body the data sent from the server
     */
    const handleFetch = async (controller, operations) => {
        try {
            // Set Loading state to true
            return await operations(controller);
        } catch (error) {
            if (error.name === "AbortError") {
                return null;
            } else {
                console.error(error);
                return null;
            };
        } finally {
            if (!controller.signal.aborted) {
                // Set Loading to false
            }
        }
    };

    /**
     * Function which fetches all article data.
     *
     * @param {AbortController} controller AbortController used to cancel fetch
     * @return {Object} HTTP response parameters
     * @return {*} HTTP response object or null if empty or aborted
     *      - @property {Object} result HTTP response values
     *      - @property {Object} body the data sent from the server
     */
    const fetchArticleData = async (controller) => {
        const result = handleFetch(controller, async () => {
            const result = await fetch(`/api/articles/${path}`,
                { signal: controller.signal },
            );
            const body = await result.json();
            return {
                result,
                body,
            };
        });
        return result;
    };

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
     * useEffect React Hook: Sets the article info.
     *
     * useEffect is called every time path (the URL) is changed.
     * ie. User has navigated to another article
     * - Unsubscribes the promise if component is unmounted, to avoid
     * any memory leaks.
     */
    useEffect(() => {
        const controller = new AbortController();
        // Reset the article state properties with the defaults
        if (isMounted.current) {
            setArticle(initialState);
            setLoading(true);

            fetchArticleData(controller)
                .then((data) => {
                    if (isMounted.current && data !== null) {
                        if (isMounted.current && data.result.status !== 200) {
                            setFound(false);
                        } else if (isMounted.current) {
                            setArticle(data.body);
                            setLoading(false);
                        }
                    }
                });
        }
        return () => {
            controller.abort();
        };
    }, [path]);

    if (!found) {
        return (
            <NotFound item="article" />
        );
    };

    /**
     * Function to determine the date as a string
     * - Immediately invoked to assign the value to dateString constant
    */
    const dateString = (() => {
        if (article.timestamp !== undefined && article.timestamp !== null) {
            const date = DateTime.fromISO(article.timestamp);
            return date.toLocaleString(DateTime.DATE_FULL);
        }
    })();

    const content = loading ?
        (
            <S.LoadingPlaceholder>
                <Navbar />
                <S.CenterInViewport>
                    <LoadingIcon />
                </S.CenterInViewport>
            </S.LoadingPlaceholder>
        ) :
        (
            <>
                <S.TopHeader
                    className="article"
                    url={article.image.src}
                    height="100vh">
                    <Navbar className="dark-background" />
                    <S.ArticleTitle
                        as="h1"
                        className="on-page feature-text uppercase center-text"
                        color="grey-tint-lightest" >
                        {article.title}
                    </S.ArticleTitle>
                    <S.FlexContainer
                        className="no-margin"
                        justifyContent="left">
                        <S.AuthorAvatar
                            src={article.author.avatar}
                            alt={article.author.name} />
                        <S.ArticleTitle
                            as="h5"
                            className="author"
                            color="grey-tint-light">
                            By
                            <S.InlineAnchor
                                className="no-underline"
                                color="blue-dark"
                                bgColor="grey-shade-darkest-x90"
                                href={`/blog/${article.path}`}
                                rel="noreferrer"
                                thicker>
                                {article.author.name}
                            </S.InlineAnchor>
                            {viewport.size.is.greaterThan.extraSmall &&
                                <>&nbsp;|&nbsp;&nbsp;</>}
                            {smallerViewport && <br />}
                            {dateString}
                        </S.ArticleTitle>
                    </S.FlexContainer>
                </S.TopHeader>
                <S.MainPageBody>
                    <S.Section
                        className={`small-top small-bottom ${smallerViewport &&
                            "small-viewport text-friendly"}`}>
                        <UpvotesSection
                            articlePath={path}
                            upvotes={article.upvotes}
                            setArticle={setArticle} />
                        {article.content.map((paragraph, key) => {
                            if (typeof paragraph === "object" &&
                                paragraph !== null) {
                                return <S.Image
                                    key={key}
                                    src={paragraph.src}
                                    alt={paragraph.alt} />;
                            } else {
                                return (
                                    <p key={key}>{paragraph}</p>
                                );
                            }
                        })}
                        <S.HorizontalRuler
                            className="small-margin"
                            thin
                            color="grey-tint-neutral" />
                        <S.FlexContainer
                            className="small-margin"
                            wrapContent
                            justifyContent="flex-end"
                            column={smallerViewport ?
                                true : false}>
                            <S.TinyText
                                className={smallerViewport ?
                                    "justify-center" : "justify-right"}
                                color="grey-shade-light"
                                margin="0.25rem">
                                <i>Share this article:</i>
                            </S.TinyText>
                            <S.FlexContainer
                                className={`no-margin ${smallerViewport ?
                                    "justify-center" : ""}`}
                                wrapContent
                                justifyContent="flex-end">
                                {socialMediaIcons.map((icon, key) => (
                                    <SocialMediaButton
                                        key={key}
                                        icon={icon}
                                        color="grey-shade-light" />
                                ))}
                            </S.FlexContainer>
                        </S.FlexContainer>
                    </S.Section>
                    <S.Section
                        color="grey-shade-dark"
                        className={`small-top ${smallerViewport &&
                            "small-viewport text-friendly"}`}>
                        <Comments
                            comments={article.comments}
                            articlePath={path}
                            setArticle={setArticle} />
                    </S.Section>
                    <S.SectionWithBackground
                        className="article"
                        url={article.image.src}
                        pos="top"
                        attachment="fixed"
                        height="50vh" />
                    <S.Section
                        bgColor="grey-tint-lightest-x70"
                        className={viewport.size.is.lessThan.medium &&
                            "small-viewport"}>
                        <S.Header
                            as="h3"
                            className="uppercase">
                            Other Articles...
                        </S.Header>
                        <ArticlesList
                            articleToFilter={path}
                            inArticlePage={inArticlePage} />
                    </S.Section>
                </S.MainPageBody >
            </>
        );

    return (
        content
    );
};

Article.propTypes = {
    /**
     * Router parameter passed down from :path in URL.
     * - We can use shape as we know the object properties beforehand.
     */
    match: PropTypes.shape({
        params: PropTypes.shape({
            path: PropTypes.string.isRequired,
        }),
    }),
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props as Redux Selectors to connect the Component to the Redux store
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    viewport: {
        dimensions: getViewportDimensions(state),
        size: getViewportSize(state),
        type: getViewportType(state),
    },
});

export default connect(mapStateToProps)(Article);
