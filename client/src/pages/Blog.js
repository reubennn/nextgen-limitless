/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import ArticlesList from "../components/ArticlesList";
import Navbar from "../components/Navbar";
import ResponsiveImage from "../components/ResponsiveImage";

import { blogLaptopPhone } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page that displays a list of the articles
 *
 * @return {Component} a page full of article lists
 */
const Blog = ({ viewport }) => {
    return (
        <>
            <Navbar className="dark-background" />
            <S.TopHeader>
                <ResponsiveImage
                    className="blog"
                    srcset={blogLaptopPhone}
                    background
                    gradient
                    opacity={0.7} />
                <S.Header
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >The </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Next Gen</b></S.TextSized>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.Text > Blog.</S.Text>
                </S.Header>
                <S.Header
                    as="h4"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    Find quality articles written on a range of topics here.
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    // color="grey-tint-light"
                    bgColor="grey-tint-lightest-x70"
                    className={viewport.size.is.lessThan.medium &&
                        "small-viewport"}>
                    <ArticlesList />
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

Blog.propTypes = {
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

export default connect(mapStateToProps)(Blog);
