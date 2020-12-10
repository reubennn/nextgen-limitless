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

import legalJusticeImage from ".../images/legal.jpg";
import lawImage from ".../images/law-book-scale-wood.jpg";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Legal = ({ viewport }) => {
    return (
        <>
            <S.TopHeader
                className="blog"
                url={legalJusticeImage}
                pos="left"
                height="100vh">
                <Navbar className="dark-background" />
                <S.HeaderSimple
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >The </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Legal</b></S.TextSized>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.Text > Stuff.</S.Text>
                </S.HeaderSimple>
                <S.HeaderSimple
                    as="h4"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    Boring, but necessary.
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
                        Our ninjas are currently working hard to write up a contractual agreement so you are able to sign your life away.
                    </S.HeaderSimple>
                </S.Section>
                <S.SectionWithBackground
                    className="primary-gradient"
                    url={lawImage}
                    pos="left"
                    attachment="fixed"
                    height="60vh" />
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark">
                    <div className="center-text">
                        Oh, and for legal purposes, we are obligated to mention that some of the icons used on this website were made by
                        <S.InlineAnchor
                            title="Good Ware"
                            color="blue-dark"
                            bgColor="grey-shade-darkest-x90"
                            href="https://www.flaticon.com/authors/good-ware"
                            rel="noreferrer"
                            thicker>
                            Good Ware
                        </S.InlineAnchor>
                        from
                        <S.InlineAnchor
                            title="Flaticon"
                            color="blue-dark"
                            bgColor="grey-shade-darkest-x90"
                            href="https://www.flaticon.com/"
                            rel="noreferrer"
                            thicker>
                            www.flaticon.com
                        </S.InlineAnchor>.
                    </div>
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

Legal.propTypes = {
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

export default connect(mapStateToProps)(Legal);
