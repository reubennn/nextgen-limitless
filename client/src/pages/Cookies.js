import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Navbar from "../components/Navbar";
import ResponsiveImage from "../components/ResponsiveImage";

import { webCookies } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Cookies = ({ viewport }) => {
    return (
        <>
            <Navbar className="dark-background" />
            <S.TopHeader>
                <ResponsiveImage
                    className="blog"
                    srcset={webCookies}
                    alt="Chocolate chip cookie on laptop keyboard"
                    background
                    gradient
                    opacity={0.75} />
                <S.Header
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >Not those kind of  </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Cookies</b></S.TextSized>
                </S.Header>
                <S.Header
                    as="h2"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    We&apos;re talking HTTP cookies, web cookies,
                    Internet cookies, browser cookies or whatever you call them.
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark">
                    <S.Header color="white" as="h3">
                        This page is under maintenance.
                    </S.Header>
                    <S.Header as="h4">
                        Our ninjas are currently working hard in the kitchen
                        to bake all those cookies!
                    </S.Header>
                </S.Section>
                <S.Section
                    color="grey-shade-dark">
                    <S.Header as="h5">
                        Please come back later.
                    </S.Header>
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

Cookies.propTypes = {
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

export default connect(mapStateToProps)(Cookies);
