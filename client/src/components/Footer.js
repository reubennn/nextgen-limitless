import React from "react";
import PropTypes from "prop-types";
import RouterLink from "./RouterLink";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Emoji from "./Emoji";
import SocialMediaButton from "./SocialMediaButton";
import socialMediaIcons from "../data/socialMediaIcons";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which renders the website footer.
 *
 * @return {Component} the website footer
 */
const Footer = ({ viewport }) => {
    /** Check if Auth0 user is authenticated */
    const { isAuthenticated } = useAuth0();

    return (
        <S.Footer>
            <S.FlexContainer column className="footer-nav">
                <S.UnorderedList>
                    <RouterLink url="/" label="Home" />
                    <RouterLink url="/about" label="About" />
                    <RouterLink url="/blog" label="Blog" />
                    <RouterLink url="/store" label="Store" />
                    <RouterLink url="/contact" label="Contact" />
                    {
                        isAuthenticated &&
                        <RouterLink url="/account" label="Account" />
                    }
                    <S.ListItem>
                        <S.LinkButton
                            className="link-button"
                            color="grey-tint-neutral"
                            bgColor="grey-shade-dark"
                            href={`${process.env.REACT_APP_SERVER_URL}`}
                            target="_blank"
                            rel="noreferrer">
                            Server API
                        </S.LinkButton>
                    </S.ListItem>
                </S.UnorderedList>
            </S.FlexContainer>
            <S.HorizontalRuler
                thin
                smallMargin
                color="grey-shade-light"
                width={"50%"} />
            <S.TinyText
                margin="0.6rem"
                color="grey-tint-light">
                Connect with us:
            </S.TinyText>
            <S.FlexContainer smallMargin wrapContent>
                {viewport.size.is.greaterThan.extraSmall &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="22%" />
                }
                <S.FlexList className="no-margin">
                    {socialMediaIcons.map((icon, key) => (
                        <li key={key}>
                            <SocialMediaButton
                                className="footer-icon"
                                icon={icon} />
                        </li>
                    ))}
                </S.FlexList>
                {viewport.size.is.greaterThan.extraSmall &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="22%" />
                }
            </S.FlexContainer>
            {
                viewport.size.is.lessThan.small &&
                <S.HorizontalRuler
                    className="footer-hr"
                    width="50%" />
            }
            <S.TinyText color="grey-tint-dark">
                <span>© 2021 Next Gen LIMITLESS.&nbsp;</span>
                All Rights Reserved.
            </S.TinyText>
            <S.TinyText color="grey-tint-dark" superTiny>
                Made with <Emoji emoji="❤️" /> by
                <S.InlineAnchor
                    color="grey-tint-neutral"
                    bgColor="grey-shade-dark"
                    href="https://github.com/reubennn/"
                    target="_blank"
                    rel="noreferrer">
                    @reubennn
                    <S.FullStop color="grey-tint-neutral" />
                </S.InlineAnchor>
            </S.TinyText>
            <S.FlexList smallMargin wrapContent>
                <RouterLink tiny url="/privacy" label="Privacy" />
                <RouterLink tiny url="/cookies" label="Cookies" />
                <RouterLink tiny url="/legal" label="Legal" />
            </S.FlexList>
        </S.Footer >
    );
};

Footer.propTypes = {
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

export default connect(mapStateToProps)(Footer);
