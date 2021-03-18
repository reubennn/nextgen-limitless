import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Navbar from "../components/Navbar";
import ResponsiveImage from "../components/ResponsiveImage";

import { pageNotFoundRobot } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a not found page.
 *
 * When the content is unable to be displayed, cannot be found (e.g. wrong URL),
 * or when the server API is unable to find the resource.
 *
 * @return {Component} not found page
 */
const NotFound = ({ item, viewport }) => {
    const largerScreen = viewport.size.is.greaterThan.large;
    return (
        <>
            <Navbar />
            <S.Section
                className="remove-top remove-bottom"
                height="7vh"
                bgColor="smoke" />
            <S.MainPageBody>
                <S.Section className="remove-bottom" bgColor="smoke">
                    <S.Header
                        as="h1"
                        className="error">
                        404
                    </S.Header>
                    <S.Header
                        as="h2"
                        className="no-margin">
                        Oops... We couldn&apos;t seem to find that {item}!
                    </S.Header>
                    <Link to="/">
                        <S.Button className="gradient uppercase home">
                            Back to safety
                        </S.Button>
                    </Link>
                </S.Section>
                <S.Section
                    className="remove-top remove-bottom"
                    height={largerScreen ? "120vh" : "80vh"}
                    bgColor="smoke" >
                    <ResponsiveImage
                        srcset={pageNotFoundRobot}
                        background
                        alt="Page not found broken robot holding lightbulb" />
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

NotFound.propTypes = {
    /**
     * Resource not able to be found.
     * - e.g. a page or an article.
     */
    item: PropTypes.string,
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

export default connect(mapStateToProps)(NotFound);
