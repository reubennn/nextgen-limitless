/* eslint-disable max-len */
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

import { onlineShopping } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Store = ({ viewport }) => {
    return (
        <>
            <Navbar className="dark-background" />
            <S.TopHeader>
                <ResponsiveImage
                    className="blog"
                    srcset={onlineShopping}
                    alt="Person on laptop with credit card purchasing
                    an item from an online eCommerce store"
                    background
                    gradient
                    opacity={0.85} />
                <S.Header
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >The </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Next Gen</b></S.TextSized>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.Text > Store.</S.Text>
                </S.Header>
                <S.Header
                    as="h2"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    Fresh merchandise to suit all your needs.
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark">
                    <S.Header as="h2">
                        This page is under maintenance.
                    </S.Header>
                    <S.Header as="h3">
                        Our ninjas are currently working hard to get the store up and running!
                    </S.Header>
                </S.Section>
                <S.Section
                    color="grey-shade-dark">
                    <S.Header as="h4" fontSize="1rem">
                        Please come back later.
                    </S.Header>
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

Store.propTypes = {
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

export default connect(mapStateToProps)(Store);
