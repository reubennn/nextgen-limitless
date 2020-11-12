import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import media from "../data/media";

import menuIcon from ".../assets/icons/menu-icon.svg";
import searchIcon from ".../assets/icons/magnifying-glass.svg";

import RouterLink from "./RouterLink";
import Logo from "./Logo";
import Icon from "./Icon";
import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays the navigation bar to access
 * links to different pages on the website.
 *
 * @return {Component} navbar for navigating through website
 */
const Navbar = ({ className, viewport }) => {
    const content = viewport.dimensions.width >= media.breakpoints.medium ?
        (
            <>
                <RouterLink
                    url="/"
                    className="align-left nav-item"
                    isImage={true} >
                    <Logo className="small" />
                </RouterLink>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/"
                        activeClassName="active"
                        className={className}
                        exact >
                        HOME
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/about"
                        activeClassName="active"
                        className={className} >
                        ABOUT
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/blog"
                        activeClassName="active"
                        className={className} >
                        BLOG
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/contact"
                        activeClassName="active"
                        className={className} >
                        CONTACT
                    </S.NavbarLink>
                </S.ListItem>
            </>
        ) :
        (
            <>
                <Icon
                    xlinkHref={menuIcon}
                    id="hamburger-menu-icon"
                    width="36"
                    height="36"
                    className={`align-left nav-item ${className}`} />
                <RouterLink
                    url="/"
                    className="nav-item align-center"
                    isImage={true}
                >
                    <Logo className="small" />
                </RouterLink>
                <Icon
                    xlinkHref={searchIcon}
                    id="magnifying-glass"
                    width="28"
                    height="28"
                    className={`align-right nav-item ${className}`} />
            </>
        );
    return (
        <S.Navbar className={className} type={viewport.type}>
            <S.FlexContainer className="no-margin" justifyContent="flex-end">
                {content}
            </S.FlexContainer>
        </S.Navbar>
    );
};

Navbar.propTypes = {
    /**
     * The class name to be passed onto styled-components Navbar.
     * - As the Navbar React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
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

export default connect(mapStateToProps)(Navbar);
