import React from "react";
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
import DescriptionBox from "../components/DescriptionBox";
import Carousel from "../components/Carousel";
import Testimonial from "../components/Testimonial";
import ResponsiveImage from "../components/ResponsiveImage";

import { aboutFeatureDescriptions } from "../data/descriptions";
import { testimonials } from "../data/testimonials";


import { acadiaNationalParkNightSky } from "../responsive/imageSrcSets";
import { selfContainedUnit } from "../responsive/imageSrcSets";
import { creativeEmployees } from "../responsive/imageSrcSets";
import { techEmployees } from "../responsive/imageSrcSets";
import { developerAtWork } from "../responsive/imageSrcSets";
import trianglifyBackground from ".../images/trianglify3.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an About page.
 *
 * @return {Component} about page for a website
 */
const About = ({ viewport }) => {
    const displayAsColumn = viewport.size.is.lessThan.large;
    const isSmallerViewport = viewport.size.is.lessThan.medium;
    const topHeaderHeight = viewport.size.is.superSmall ? "100vh" : "60vh";
    const shuffledTestimonials = shuffle(testimonials);
    return (
        <>
            <Navbar className="dark-background" />
            <S.TopHeader height={topHeaderHeight}>
                <ResponsiveImage
                    className="about"
                    srcset={acadiaNationalParkNightSky}
                    alt="Beautiful cliff-edge from the Acadia National Park
                    during the night with mesmerizing stars and galaxies in
                    the sky"
                    background
                    gradient
                    opacity={0.7} />
                <S.Header
                    as="h1"
                    className="feature-text uppercase"
                    color="grey-tint-lightest" >
                    <S.Text >The </S.Text>
                    {isSmallerViewport && <br />}
                    <S.TextSized><b>Next Gen</b></S.TextSized>
                    {isSmallerViewport && <br />}
                    <S.Text > Story.</S.Text>
                </S.Header>
                <S.Header
                    as="h2"
                    className="feature-text header-secondary"
                    color="grey-tint-lightest" >
                    <span>We are <em>transparent</em>.</span>
                    {isSmallerViewport && <br />}
                    <span> We are <em>without limits</em>.</span>
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    className="center-text"
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark"
                    height="40vh">
                    <S.Header
                        as="h3"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        <S.Text >We are </S.Text>
                        {isSmallerViewport && <br />}
                        <S.TextSized><b>Next Gen LIMITLESS</b></S.TextSized>
                        <S.Text >.</S.Text>
                    </S.Header>
                    <p>
                        Our philosophy here is that we are a customer
                        centric company; if our customers aren&apos;t
                        successful, then neither are we. We are very
                        good at understanding the needs and visions
                        that our clients possess. Through our positive
                        working environments and thriving employees,
                        our teams are able to deliver undeniable value
                        through our range of services to help partnerships
                        grow whilst delivering on our promises. Through
                        changing landscapes with COVID-19 at bay, we have
                        quickly adapted to unfamiliar markets so that we
                        can assist our partners in asserting dominance in
                        their specialty areas.
                    </p>
                </S.Section>
                <S.Section height="60vh" >
                    <ResponsiveImage
                        className="primary-gradient"
                        srcset={creativeEmployees}
                        alt="Creative employees sitting at a desk
                        working in office with focus on a smiling woman
                        in the front on her phone"
                        background
                        gradient
                        opacity={0.5} />
                </S.Section>
                <S.Section
                    className="center-text"
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Origins.
                    </S.Header>
                    <p>
                        We come from humble beginnings.
                        <b>Next Gen LIMITLESS</b> first launched within
                        a garage in a small city called Adelaide; similarly
                        to how big name companies like Amazon, Google,
                        Apple and Microsoft started. The company was
                        initially focused in software services like website
                        design, app development and database development,
                        but has since branched off into a wider range of
                        services.
                    </p>
                    <p>
                        Founder and CEO, Reuben Smith developed a strong
                        passion for programming which first began at Flinders
                        University. After several years of experience in a
                        professional role, he decided to master new technologies
                        and frameworks outside working hours, with late nights
                        the new normal. With a broad range of experiences and
                        expert skillset, word soon got out that he had started
                        a company in his free time. It wasn&apos;t long until
                        clients were coming to him for his impressive services;
                        encompassing the entire development process. Once his
                        customer base had grown significantly, it was then that
                        he decided to make <b>Next Gen LIMITLESS</b> a full-time
                        career.
                    </p>
                    <p>
                        Fast-track to now, the company has global presence,
                        with over 79,000 employees across 90+ countries.
                        It&apos;s no question that we are good at what we do.
                        In fact, big name companies like Google, Apple and
                        Facebook have all partnered with us at some point in
                        time.
                    </p>
                </S.Section>
                <S.Section height="60vh" >
                    <ResponsiveImage
                        className="primary-gradient"
                        srcset={selfContainedUnit}
                        alt="Cosy self contained wooden unit house/garage
                        situated in a backyard"
                        background
                        gradient
                        opacity={0.5} />
                </S.Section>
                <S.Section
                    className="center-text"
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Services.
                    </S.Header>
                    <p>
                        <b>Next Gen LIMITLESS</b> offers a range of services,
                        covering a broad spectrum of the development cycle.
                        We can follow through all or just part of the process,
                        from idea conception, implementation, integration or
                        delivery. We will be by your side every step of the way
                        <i>- if you&apos;d like us to be!</i>
                    </p>
                    <p>
                        We have a solid grounding in anything technology
                        related, with an abundance of highly skilled employees;
                        software engineers, developers, computer systems
                        engineers, database and system administrators, security
                        specialists, systems and business analysts, quality
                        assurance engineers, UX and UI design engineers, and
                        SEO/SEM specialists. We also specialise in marketing
                        and business digital transformation.
                    </p>
                    <p>
                        Have something else in mind? We have you covered.
                    </p>
                    <p>
                        <S.InlineAnchor
                            color="blue-light"
                            bgColor="grey-shade-dark"
                            href="/contact"
                            rel="noreferrer" >
                            Contact us
                        </S.InlineAnchor>
                        today so we can discuss you&apos;re options.
                    </p>
                </S.Section>
                <S.Section height="60vh" >
                    <ResponsiveImage
                        className="primary-gradient"
                        srcset={techEmployees}
                        alt="Tech employees working hard at desks"
                        background
                        gradient
                        opacity={0.5} />
                </S.Section>
                <S.Section
                    className="center-text"
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Here to stay.
                    </S.Header>
                    <p>
                        With over 15 years of service and an ever-growing number
                         of partnerships with quality customers, we can safely
                         say that we are here to stay. Have peace of mind,
                         knowing that if you put your trust in us, we&apos;ll
                         be there with you through it all. We&apos;re in this
                         for the long haul.
                    </p>
                </S.Section>
                <S.Section height="60vh" >
                    <ResponsiveImage
                        className="primary-gradient"
                        srcset={developerAtWork}
                        alt="Software developer working on multiple
                        screens while coding"
                        background
                        gradient
                        opacity={0.5} />
                </S.Section>
                <S.Section
                    className="center-text"
                    color="grey-tint-lighter"
                    bgColor="grey-shade-dark"
                    height="60vh">
                    <S.Header
                        as="h2"
                        className="uppercase section-top"
                        color="grey-tint-lightest" >
                        Testimonials.
                    </S.Header>
                    <Carousel initialData={shuffledTestimonials} interval={60}>
                        <Testimonial />
                    </Carousel>
                </S.Section>
                <S.Section
                    color="grey-shade-dark"
                    bgColor="white"
                    height="100vh">
                    <S.Header
                        as="h3"
                        className="at-top no-margin"
                        color="grey-shade-neutral">
                        The leaders in the market.
                    </S.Header>
                    <S.FlexContainer
                        column={displayAsColumn}
                        className="center-text items-margin">
                        {aboutFeatureDescriptions.map((description, index) => {
                            let separator;
                            aboutFeatureDescriptions.length === index + 1 ?
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
                        <S.Header as="h1">
                            Launch into a partnership with us today.
                        </S.Header>
                        <S.Header as="h2" fontSize="1.5rem">
                            It will be out of this world.
                        </S.Header>
                        <Link to="contact">
                            <S.Button className="gradient uppercase">
                                Contact Us
                            </S.Button>
                        </Link>
                    </S.FlexContainer>
                </S.SectionWithBackground>
            </S.MainPageBody>
        </>
    );
};

About.propTypes = {
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

export default connect(mapStateToProps)(About);
