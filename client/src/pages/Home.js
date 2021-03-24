import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { shuffle } from "../scripts/shuffleArray";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Navbar from "../components/Navbar";
import LogoSlider from "../components/LogoSlider";
import DescriptionBox from "../components/DescriptionBox";
import ResponsiveImage from "../components/ResponsiveImage";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";

import { logoSlider } from "../data/logos";
import { featureDescriptions, otherDescriptions } from "../data/descriptions";
import { testimonials } from "../data/testimonials";

import { abstractScenery } from "../responsive/imageSrcSets";
import { scenicMountains } from "../responsive/imageSrcSets";
import { lofotenIslands } from "../responsive/imageSrcSets";
import logoLarge from ".../images/logo-large.svg";
import trianglifyBackground from ".../images/trianglify.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a Home page.
 *
 * @return {Component} home page for a website
 */
const Home = ({ viewport }) => {
    /** useRef to the information section for the scrolling event */
    const learnMoreRef = useRef(null);

    /**
     * Handler function to smoothly scroll the page so the information section
     * is in the center of the viewport.
     *
     * - Called when the user presses the "learn more" button
     * in the top header.
     */
    const learnMoreOnClickHandler = () => {
        learnMoreRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const shuffledTestimonials = shuffle(testimonials);

    const displayAsColumn = viewport.size.is.lessThan.large;
    return (
        <>
            <Navbar />
            <S.TopHeader className="home">
                <ResponsiveImage
                    className="home"
                    srcset={abstractScenery}
                    alt="Abstract peaceful scenery car driving
                    on long road with trees and hills in background"
                    background
                    gradient />
                <S.FlexContainer column className="no-margin">
                    <S.LogoImage
                        className="large header-home"
                        src={logoLarge}
                        type={viewport.type}
                        alt="Spaceship Logo Icon" />
                    <S.FeatureText
                        as="h1"
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
                    <S.Header
                        className="feature-text header-home"
                        color="grey-tint-lightest"
                        as="h2"
                        fontSize="1.2rem">
                        It&apos;s time to take off during these
                        unprecedented times.
                    </S.Header>
                    <S.Button
                        className="home gradient uppercase"
                        onClick={learnMoreOnClickHandler}>
                        Learn More
                    </S.Button>
                </S.FlexContainer>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark"
                    height="75vh"
                    ref={learnMoreRef}>
                    {featureDescriptions.map((description, index) => {
                        let separator;
                        let reverse;
                        featureDescriptions.length === index + 1 ?
                            separator = false : separator = true;
                        /** Reverse the content for odd numbers */
                        index % 2 == 0 || displayAsColumn ?
                            reverse = false : reverse = true;
                        return <DescriptionBox
                            key={index}
                            description={description}
                            separator={separator}
                            column={displayAsColumn}
                            reverse={reverse} />;
                    })}
                </S.Section>
                <S.Section height="70vh" >
                    <ResponsiveImage
                        srcset={scenicMountains}
                        alt="Beautiful bright blue lake with mountains
                        spanning on either side"
                        background
                        gradient
                        opacity={0.8} />
                    <S.FeatureText
                        className="center-text"
                        type={viewport.type}
                        color="white">
                        Are you ready to embrace the power of true innovation?
                    </S.FeatureText>
                </S.Section>
                <S.Section
                    color="grey-tint-light"
                    bgColor="grey-shade-dark"
                    height="50vh">
                    <S.FlexContainer column>
                        <S.Header
                            as="h4"
                            color="grey-tint-lighter">
                            Some of our past &amp; present partners...*
                        </S.Header>
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
                            color="grey-tint-dark">
                            *These companies may or may not have actually
                            partnered with us.
                        </S.TinyText>
                    </S.FlexContainer>
                </S.Section>
                <S.Section height="70vh" >
                    <ResponsiveImage
                        className="secondary-gradient"
                        srcset={lofotenIslands}
                        alt="Birds eye view of the Lofoten Islands
                        with clear skies, the sea and mountains"
                        background
                        gradient
                        opacity={0.75} />
                    <S.FeatureText
                        className="center-text"
                        type={viewport.type}
                        color="white">
                        Don&apos;t get left behind.
                    </S.FeatureText>
                </S.Section>
                <S.Section
                    className="center-text"
                    color="grey-tint-lightest"
                    bgColor="grey-shade-dark"
                    height="60vh">
                    <S.Header
                        as="h3"
                        color="grey-tint-lighter" >
                        What our partners are saying about us...
                    </S.Header>
                    <Carousel initialData={shuffledTestimonials} interval={60}>
                        <Testimonial />
                    </Carousel>
                </S.Section>
                <S.Section
                    color="grey-shade-dark"
                    bgColor="white"
                    height="100vh">
                    <S.Header as="h3">
                        ...or are you looking for something else?
                    </S.Header>
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
                    url={trianglifyBackground}>
                    <S.GradientOverlay opacity={0.05} />
                    <S.FlexContainer
                        className="center-text items-margin"
                        column>
                        <S.Header as="h2">
                            What are you waiting for?
                        </S.Header>
                        <S.Header as="h3">
                            Get started today.**
                        </S.Header>
                        <Link to="/contact">
                            <S.Button className="gradient uppercase">
                                Unlock the key
                            </S.Button>
                        </Link>
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
