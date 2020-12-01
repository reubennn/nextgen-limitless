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
import Logo from "../components/Logo";
import LogoSlider from "../components/LogoSlider";
import DescriptionBox from "../components/DescriptionBox";

import { logos } from "../data/logos";
import { featureDescriptions, otherDescriptions } from "../data/descriptions";

import abstractScenery from ".../images/abstract-scenery.jpg";
import abstractMountains from ".../images/abstract-mountains.jpg";
import subtlePrismSVG from ".../images/subtle-prism.svg";
import lofotenIslands from ".../images/lofoten-islands.jpg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a Home page.
 *
 * @return {Component} home page for a website
 */
const Home = ({ viewport }) => {
    const displayAsColumn = viewport.size.is.lessThan.large;
    return (
        <>
            <S.HomepageHeader url={abstractScenery}>
                <Navbar className="home" />
                <S.FlexContainer column className="no-margin">
                    {/* <S.Header>Zero Gravity</S.Header> */}
                    <Logo className="large" />
                    <S.FeatureText
                        className="header-home"
                        color="grey-tint-lightest"
                        type={viewport.type}>
                        Unplugged potential at your fingertips.
                    </S.FeatureText>
                    <S.Button className="home gradient uppercase">Learn More</S.Button>
                </S.FlexContainer>
            </S.HomepageHeader>
            <S.MainPageBody>
                <S.FlexContainer className="no-margin" column>
                    <S.Section
                        color="grey-tint-lighter"
                        bgColor="grey-shade-dark"
                        height="75vh">
                        {featureDescriptions.map((description, index) => {
                            let last;
                            let reverse;
                            featureDescriptions.length === index + 1 ?
                                last = true : last = false;
                            /** Reverse the content for odd numbers */
                            index % 2 == 0 || displayAsColumn ?
                                reverse = false : reverse = true;
                            return <DescriptionBox
                                key={index}
                                description={description}
                                last={last}
                                column={displayAsColumn}
                                reverse={reverse} />;
                        })}
                    </S.Section>
                    <S.SectionWithBackground className="primary-gradient" url={abstractMountains} pos="top" attachment="fixed" height="70vh" >
                        <S.FeatureText
                            className="uppercase center-text"
                            type={viewport.type}
                            color="grey-tint-lightest">
                            Are you ready to embrace the power of true innovation?
                        </S.FeatureText>
                    </S.SectionWithBackground>
                    <S.Section
                        color="grey-tint-light"
                        bgColor="grey-shade-dark"
                        height="50vh">
                        <S.FlexContainer column>
                            <S.HeaderSimple type="h4">
                                Some of our past &amp; present partners...*
                            </S.HeaderSimple>
                            <br />
                            <LogoSlider logos={logos.primary} duration={15} bgColor="grey-shade-dark" />
                            <LogoSlider logos={logos.secondary} duration={20} reverse bgColor="grey-shade-dark" />
                            <br />
                            <S.TinyText className="center-text" superTiny color="grey-shade-lightest">*These companies may or may not have actually partnered with us.</S.TinyText>
                        </S.FlexContainer>
                    </S.Section>
                    <S.SectionWithBackground className="secondary-gradient" url={lofotenIslands} pos="center" attachment="fixed" height="70vh" >
                        <S.FeatureText
                            className="uppercase center-text"
                            type={viewport.type}
                            color="grey-tint-lightest">
                            Don&apos;t get left behind.
                        </S.FeatureText>
                    </S.SectionWithBackground>
                    <S.Section
                        color="grey-shade-dark"
                        bgColor="white"
                        height="100vh">
                        <S.HeaderSimple type="h3">
                            ...or are you looking for something else?
                        </S.HeaderSimple>
                        <S.FlexContainer column={displayAsColumn} className="center-text items-margin">
                            {otherDescriptions.map((description, index) => {
                                return (
                                    <DescriptionBox
                                        key={index}
                                        className="min-shadow secondary"
                                        description={description}
                                        last={true}
                                        column={true}
                                        textColor="grey-shade-dark" />
                                );
                            })}
                        </S.FlexContainer>
                    </S.Section>
                    <S.SectionWithBackground color="grey-shade-dark" height="35vh" url={subtlePrismSVG}>
                        <S.FlexContainer column className="center-text items-margin">
                            <S.HeaderSimple type="h1">What are you waiting for?</S.HeaderSimple>
                            <S.HeaderSimple type="h3">Get started today.**</S.HeaderSimple>
                            <S.Button className="gradient uppercase">Unlock the key</S.Button>
                            <S.TinyText superTiny color="grey-shade-dark">**Maybe not today - today, but you know what we mean.</S.TinyText>
                        </S.FlexContainer>
                    </S.SectionWithBackground>
                </S.FlexContainer>
            </S.MainPageBody>
        </>
    );
};

Home.propTypes = {
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

export default connect(mapStateToProps)(Home);
