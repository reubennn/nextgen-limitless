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

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a Home page.
 *
 * @return {Component} home page for a website
 */
const Home = ({ viewport }) => (
    <>
        <S.HomepageHeader>
            <Navbar className="home" />
            <S.FlexContainer column className="no-margin">
                {/* <S.Header>Zero Gravity</S.Header> */}
                <Logo className="large" />
                <S.FeatureText
                    className="header-home"
                    type={viewport.type}>
                    Unplugged potential at you&apos;re fingertips.
                </S.FeatureText>
            </S.FlexContainer>
        </S.HomepageHeader>
        <S.FlexContainer className="no-margin" column>
            <S.Section
                color="grey-tint-lighter"
                bgColor="grey-shade-dark"
                height="15vh">
                <S.FeatureText type={viewport.type}>
                    Are you ready to embrace the power of true innovation?
                </S.FeatureText>
            </S.Section>
            <S.Section
                color="grey-shade-dark"
                bgColor="white"
                height="50vh">
                <p>
                    Do you really listen when you are talking with someone? I have a friend who listens in an unforgiving way. She actually takes every word you say as being something important and when you have a friend that listens like that, words take on a whole new meaning.
                </p>
                <p>
                    She tried to explain that love wasn&apos;t like pie. There wasn&apos;t a set number of slices to be given out. There wasn&apos;t less to be given to one person if you wanted to give more to another. That after a set amount was given out it would all disappear. She tried to explain this, but it fell on deaf ears.
                </p>
            </S.Section>
            <S.MainPageBody>
                <p>
                    Dave found joy in the daily routine of life. He awoke at the same time, ate the same breakfast and drove the same commute. He worked at a job that never seemed to change and he got home at 6 pm sharp every night. It was who he had been for the last ten years and he had no idea that was all about to change.
                </p>
                <p>
                    It was a scrape that he hardly noticed. Sure, there was a bit of blood but it was minor compared to most of the other cuts and bruises he acquired on his adventures. There was no way he could know that the rock that produced the cut had alien genetic material on it that was now racing through his bloodstream. He felt perfectly normal and continued his adventure with no knowledge of what was about to happen to him.
                </p>
                <p>
                    Stranded. Yes, she was now the first person ever to land on Venus, but that was of little consequence. Her name would be read by millions in school as the first to land here, but that celebrity would never actually be seen by her. She looked at the control panel and knew there was nothing that would ever get it back into working order. She was the first and it was not clear this would also be her last.
                </p>
                <p>
                    Her eyebrows were a shade darker than her hair. They were thick and almost horizontal, emphasizing the depth of her eyes. She was rather handsome than beautiful. Her face was captivating by reason of a certain frankness of expression and a contradictory subtle play of features. Her manner was engaging.
                </p>
                <p>
                    Eating raw fish didn&apos;t sound like a good idea. <q>It&apos;s a delicacy in Japan,</q> didn&apos;t seem to make it any more appetizing. Raw fish is raw fish, delicacy or not.
                </p>
                <p>
                    There was something special about this little creature. Donna couldn&apos;t quite pinpoint what it was, but she knew with all her heart that it was true. It wasn&apos;t a matter of if she was going to try and save it, but a matter of how she was going to save it. She went back to the car to get a blanket and when she returned the creature was gone.
                </p>
            </S.MainPageBody>
        </S.FlexContainer>
    </>
);

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
