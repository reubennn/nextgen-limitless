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

import computerCookie from ".../images/computer-cookie-848x480.jpg";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Cookies = ({ viewport }) => {
    return (
        <>
            <S.TopHeader
                className="blog"
                url={computerCookie}
                height="100vh">
                <Navbar className="dark-background" />
                <S.HeaderSimple
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >Not those kind of  </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Cookies</b></S.TextSized>
                </S.HeaderSimple>
                <S.HeaderSimple
                    as="h4"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    We&apos;re talking HTTP cookies, web cookies, Internet cookies, browser cookies or whatever you call them.
                </S.HeaderSimple>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark">
                    <S.HeaderSimple color="white">
                        This page is under maintenance.
                    </S.HeaderSimple>
                    <S.HeaderSimple as="h3">
                        Our ninjas are currently working hard in the kitchen to bake all those cookies!
                    </S.HeaderSimple>
                </S.Section>
                <S.Section
                    color="grey-shade-dark">
                    <S.HeaderSimple as="h5">
                        Please come back later.
                    </S.HeaderSimple>
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
