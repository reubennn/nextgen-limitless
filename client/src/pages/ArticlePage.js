import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import moment from "moment";

import ArticlesList from "../components/ArticlesList";
import NotFoundPage from "./NotFoundPage";
import CommentsList from "../components/CommentsList.js";
import UpvotesSection from "../components/UpvoteSection";
import LoadingIcon from "../components/LoadingIcon";
import SocialMediaButton from "../components/SocialMediaButton";

import socialMediaIcons from "../data/socialMediaIcons";

import * as S from "../styles/styled-components";

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
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const [found, setFound] = useState(true);
    const [loading, setLoading] = useState(true);
    const inArticlePage = true;

    /** Set Moment.js locale to Australian format */
    moment.locale("en-au");
    const DATE_FORMAT = "D MMMM, YYYY";

    /**
     * Default article properties used to reset the state
     */
    const defaults = {
        _id: null,
        name: name,
        title: null,
        author: null,
        pubDate: null,
        featureImg: null,
        content: [],
        upvotes: null,
        comments: [],
        categories: [],
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

    /**
     * Function to determine the date as a string
     * - Immediately invoked to assign the value to dateString constant
    */
    const dateString = (() => {
        if (articleInfo.pubDate !== undefined && articleInfo.pubDate !== null) {
            const date = moment(articleInfo.pubDate);
            return date.format(DATE_FORMAT);
        }
    })();

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
                <S.Image
                    src={articleInfo.featureImg.src}
                    alt={articleInfo.featureImg.alt} />
                <S.FlexContainer smallMargin justifyContent="left">
                    <S.Paragraph className="author-date">
                        By <i>{articleInfo.author}</i>
                    </S.Paragraph>
                    <S.Paragraph color="grey" className="author-date">
                        &nbsp;|&nbsp;
                    </S.Paragraph>
                    <S.Paragraph color="grey" className="author-date">
                        {dateString}
                    </S.Paragraph>
                </S.FlexContainer>
                <UpvotesSection
                    articleName={name}
                    upvotes={articleInfo.upvotes}
                    setArticleInfo={setArticleInfo} />
                {articleInfo.content.map((paragraph, key) => {
                    if (typeof paragraph === "object" && paragraph !== null) {
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
                <S.HorizontalRuler thin smallMargin color="light" />
                <S.FlexContainer
                    smallMargin
                    wrapContent
                    justifyContent="flex-end">
                    <S.TinyText color="darkerGrey" margin="0.25rem">
                        <i>Share this article:</i>
                    </S.TinyText>
                    {socialMediaIcons.map((icon, key) => (
                        <SocialMediaButton
                            key={key}
                            icon={icon}
                            color="darkerGrey" />
                    ))}
                </S.FlexContainer>
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
    /**
     * Router parameter passed down from :name in URL.
     * - We can use shape as we know the object properties beforehand.
     */
    match: PropTypes.shape({
        params: PropTypes.shape({
            name: PropTypes.string.isRequired,
        }),
    }),
};

export default ArticlePage;
