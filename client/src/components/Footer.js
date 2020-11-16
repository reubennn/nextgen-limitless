import React from "react";
import PropTypes from "prop-types";
import RouterLink from "./RouterLink";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import SocialMediaButton from "./SocialMediaButton";
import socialMediaIcons from "../data/socialMediaIcons";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which renders the website footer.
 *
 * @return {Component} the website footer
 */
const Footer = ({ viewport }) => {
    const viewportWidth = viewport.dimensions.width;
    return (
        <S.Footer>
            <S.FlexContainer column className="footer-nav">
                <RouterLink url="/" label="Home" />
                <RouterLink url="/about" label="About" />
                <RouterLink url="/blog" label="Blog" />
                <RouterLink url="/contact" label="Contact" />
            </S.FlexContainer>
            <S.HorizontalRuler
                thin
                smallMargin
                color="grey-shade-light"
                width={"50%"} />
            <S.TinyText
                margin="0.6rem"
                color="grey-tint-light"
            >
                Connect with us:
            </S.TinyText>
            <S.FlexContainer smallMargin wrapContent>
                {viewport.size.is.small &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="20%" />
                }
                {viewport.size.is.medium &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="40%" />
                }
                {socialMediaIcons.map((icon, key) => (
                    <SocialMediaButton
                        className="footer-icon"
                        key={key}
                        icon={icon} />
                ))}
                {viewport.size.is.small &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="20%" />
                }
                {viewport.size.is.medium &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="40%" />
                }
            </S.FlexContainer>
            {viewport.size.is.small &&
                <S.HorizontalRuler
                    className="footer-hr"
                    width="50%" />
            }
            <S.TinyText>
                <span>© 2020 Reuben Smith.&nbsp;</span>
            All Rights Reserved.
            </S.TinyText>
            <S.TinyText superTiny>
                Special thanks to
                <S.InlineAnchor
                    color="grey-tint-light"
                    bgColor="grey-shade-dark"
                    href="https://www.linkedin.com/learning/"
                    target="_blank"
                    rel="noreferrer"
                >
                    LinkedIn Learning
                </S.InlineAnchor>
                and
                <S.InlineAnchor
                    color="grey-tint-light"
                    bgColor="grey-shade-dark"
                    href="https://www.linkedin.com/in/shaun-wassell/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Shaun Wassell
                </S.InlineAnchor>
            for initial content and ideas.
            </S.TinyText>
            <S.FlexContainer smallMargin wrapContent>
                <RouterLink tiny url="/privacy" label="Privacy" />
                <RouterLink tiny url="/cookies" label="Cookies" />
                <RouterLink tiny url="/legal" label="Legal" />
            </S.FlexContainer>
        </S.Footer>
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
