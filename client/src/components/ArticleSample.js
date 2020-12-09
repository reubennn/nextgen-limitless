import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a sample of an article.
 *
 * Useful to display multiple article samples together.
 *
 * @return {Component} article sample box
 */
const ArticleSample = ({ article, linkClicked, viewport }) => {
    const smallerViewport = viewport.size.is.lessThan.small;
    return (
        <S.ArticleSampleContainer type={viewport.type}>
            <S.ArticleImageTitleContainer>
                <S.ArticleImageContainer>
                    <Link
                        to={`/article/${article.name}`}
                        onClick={() => linkClicked(article.name)}>
                        <S.ArticleSampleImage
                            className={smallerViewport &&
                                "full-width"}
                            src={article.featureImg.src}
                            alt={article.featureImg.alt}
                            height={smallerViewport ? "60vh" : "45vh"} />
                    </Link>
                </S.ArticleImageContainer>
                <S.ArticleSampleTitlebox>
                    <Link
                        to={`/article/${article.name}`}
                        onClick={() => linkClicked(article.name)}>
                        <S.ArticleSampleTitle as="h3">
                            {article.title}
                        </S.ArticleSampleTitle>
                    </Link>
                    <S.FlexContainer
                        className="no-margin"
                        justifyContent="left">
                        <S.AuthorAvatar
                            src={article.featureImg.src}
                            alt={article.featureImg.alt} />
                        <S.ArticleSampleTitle
                            as="h5"
                            className="author">
                            By
                            <S.InlineAnchor
                                className="no-underline"
                                color="blue-dark"
                                bgColor="grey-shade-darkest-x90"
                                href={`/article/${article.name}`}
                                rel="noreferrer"
                                thicker>
                                {article.author}
                            </S.InlineAnchor>
                        </S.ArticleSampleTitle>
                    </S.FlexContainer>
                </S.ArticleSampleTitlebox>
            </S.ArticleImageTitleContainer>
            <S.ArticleSampleText type={viewport.type}>
                {article.content[0].substring(0, 200)}...
            </S.ArticleSampleText>
            <S.ArticleSampleButton
                className="uppercase"
                onClick={() => null}>
                    Read More
            </S.ArticleSampleButton>
        </S.ArticleSampleContainer>
    );
};

ArticleSample.propTypes = {
    /**
     * The article information used to display the sample.
     */
    article: PropTypes.object,
    /**
     * Function which triggers updating the current article name state
     * from the ArticlesList.
     */
    linkClicked: PropTypes.func,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props using Redux selectors
 * to connect the Component to the Redux store.
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

export default connect(mapStateToProps)(ArticleSample);
