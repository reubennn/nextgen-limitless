import React from "react";

import Emoji from "./Emoji";

import logoSmall from ".../images/logo-small.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for the API homepage.
 *
 * @return {Component} home page for a website
 */
const Homepage = () => (
    <S.Container>
        <S.FlexContainer
            className="no-margin fill-viewport"
            column
            justifyContent="space-between">
            <S.Anchor
                noStyle
                href="https://nextgenlimitless.xyz/"
                target="_blank"
                rel="noreferrer">
                <S.LogoImage
                    className="homepage-top"
                    src={logoSmall}
                    height="3rem"
                    alt="Spaceship Logo Nav Home Icon" />
            </S.Anchor>
            <S.HomepageHeader
                as="h1">
                Next Gen<br />
                LIMITLESS<br />
                API.
            </S.HomepageHeader>
            <S.Footer>
                Made with <Emoji emoji="❤️" /> by
                <S.InlineAnchor
                    color="white"
                    href="https://github.com/reubennn/"
                    target="_blank"
                    rel="noreferrer">
                    @reubennn
                    <S.FullStop color="white" />
                </S.InlineAnchor>
            </S.Footer>
        </S.FlexContainer>
    </S.Container>
);

export default Homepage;
