import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Navbar from "../components/Navbar";
import LogoSlider from "../components/LogoSlider";
import DescriptionBox from "../components/DescriptionBox";

import { logoSlider } from "../data/logos";
import { featureDescriptions, otherDescriptions } from "../data/descriptions";

import logoLarge from ".../images/logo-large.svg";
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
            <S.TopHeader className="home" url={abstractScenery}>
                <Navbar />
                <S.FlexContainer column className="no-margin">
                    <S.LogoImage
                        className="large header-home"
                        src={logoLarge}
                        type={viewport.type}
                        alt="Spaceship Logo Icon" />
                    <S.FeatureText
                        className="header-home"
                        color="grey-tint-lightest"
                        type={viewport.type}>
                        Launch into next generation technology today.
                    </S.FeatureText>
                    <S.HorizontalRuler
                        className="header-home"
                        thin
                        color="grey-tint-neutral"
                        width={"50%"} />
                    <S.HeaderSimple
                        className="feature-text header-home"
                        color="grey-tint-lightest"
                        as="h4">
                        It&apos;s time to take off during these
                        unprecedented times.
                    </S.HeaderSimple>
                    <S.Button className="home gradient uppercase">
                        Learn More
                    </S.Button>
                </S.FlexContainer>
            </S.TopHeader>
            <S.MainPageBody>
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
                <S.SectionWithBackground
                    className="primary-gradient"
                    url={abstractMountains}
                    pos="top"
                    attachment="fixed"
                    height="70vh" >
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
                        <S.HeaderSimple as="h4">
                            Some of our past &amp; present partners...*
                        </S.HeaderSimple>
                        <br />
                        <LogoSlider
                            logos={logoSlider.primary}
                            duration={20}
                            bgColor="grey-shade-dark" />
                        <LogoSlider
                            logos={logoSlider.secondary}
                            duration={20}
                            reverse
                            bgColor="grey-shade-dark" />
                        <S.TinyText
                            className="center-text"
                            superTiny
                            color="grey-shade-lightest">
                            *These companies may or may not have actually
                            partnered with us.
                        </S.TinyText>
                    </S.FlexContainer>
                </S.Section>
                <S.SectionWithBackground
                    className="secondary-gradient"
                    url={lofotenIslands}
                    pos="center"
                    attachment="fixed"
                    height="70vh" >
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
                    <S.HeaderSimple as="h3">
                        ...or are you looking for something else?
                    </S.HeaderSimple>
                    <S.FlexContainer
                        column={displayAsColumn}
                        className="center-text items-margin">
                        {otherDescriptions.map((description, index) => {
                            let separator;
                            otherDescriptions.length === index + 1 ?
                                separator = false : separator = true;
                            if (!displayAsColumn) {
                                separator = false;
                            }
                            return (
                                <DescriptionBox
                                    key={index}
                                    className="min-shadow secondary"
                                    description={description}
                                    separator={separator}
                                    column={true}
                                    textColor="grey-shade-dark" />
                            );
                        })}
                    </S.FlexContainer>
                </S.Section>
                <S.SectionWithBackground
                    color="grey-shade-dark"
                    height="35vh"
                    url={subtlePrismSVG}>
                    <S.FlexContainer
                        className="center-text items-margin"
                        column>
                        <S.HeaderSimple as="h1">
                            What are you waiting for?
                        </S.HeaderSimple>
                        <S.HeaderSimple as="h3">
                            Get started today.**
                        </S.HeaderSimple>
                        <S.Button className="gradient uppercase">
                            Unlock the key
                        </S.Button>
                        <S.TinyText
                            superTiny
                            color="grey-shade-dark">
                            **Maybe not today - today, but you know what
                            we mean.
                        </S.TinyText>
                    </S.FlexContainer>
                </S.SectionWithBackground>
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
