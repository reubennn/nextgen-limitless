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

import { privacySecurity } from "../responsive/imageSrcSets";
import { allSeeingSurveillance } from "../responsive/imageSrcSets";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Privacy = ({ viewport }) => {
    return (
        <>
            <Navbar className="dark-background" />
            <S.TopHeader>
                <ResponsiveImage
                    className="privacy"
                    srcset={privacySecurity}
                    background
                    gradient
                    opacity={0.88} />
                <S.Header
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >Your </S.Text>
                    {viewport.size.is.lessThan.small && <br />}
                    <S.TextSized><b>Privacy</b></S.TextSized>
                    <br />
                    <S.Text > - in the safest hands.</S.Text>
                </S.Header>
                <S.Header
                    as="h4"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    Want to know what we do with your data? You&apos;ve come to the right place.
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Personal Information.
                    </S.Header>
                    <S.Header as="h4">
                        Our ninjas are currently working hard to ensure your personal information is handled responsibly and is put into the right hands.
                    </S.Header>
                    <S.Header as="h5" className="no-margin">
                        We take your privacy at the uttermost importance, and we promise to ensure that it <b>is shared</b> with the following parties:
                    </S.Header>
                    <S.CoolList>
                        <li>
                            Companies that need to target you to sell you stuff.
                        </li>
                        <li>
                            The government so they know your every move.
                        </li>
                        <li>
                            Underground organised crime.
                        </li>
                        <li>
                            Your neighbour that lives down the road.
                        </li>
                        <li>
                            Bob from Bunnings.
                        </li>
                        <li>
                            Maybe even the Illuminati (not like they don&apos;t have your info already).
                        </li>
                    </S.CoolList>
                </S.Section>
                <S.Section height="60vh" >
                    <ResponsiveImage
                        className="primary-gradient"
                        srcset={allSeeingSurveillance}
                        background
                        gradient
                        opacity={0.75} />
                </S.Section>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark"
                    height="50vh">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Privacy.
                    </S.Header>
                    <S.Header as="h5">
                        Just remember what Mark Zuckerberg once said:
                    </S.Header>
                    <S.Header as="h5" color="blue-lightest">
                        <q>The age of privacy is over.</q>
                    </S.Header>
                </S.Section>
                <S.Section
                    color="grey-shade-dark"
                    height="70vh">
                    <S.Header as="h5">
                        By simply browsing our website, you agree to all of the terms and conditions stated.
                    </S.Header>
                    <S.Header as="h5">
                        Thank you and have a nice day.
                    </S.Header>
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

Privacy.propTypes = {
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

export default connect(mapStateToProps)(Privacy);
