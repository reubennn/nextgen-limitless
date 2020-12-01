import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
    getSidebarNavState,
} from "../selectors/viewportSelectors";

import { setSidebarNavStatus } from "../actions/viewportActions";

import media from "../data/media";

import menuIcon from ".../icons/menu.svg";
import searchIcon from ".../icons/magnifying-glass.svg";

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
const Navbar = ({ className, viewport, sidebarNav, setSidebarNavStatus }) => {
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
                        to="/about"
                        activeClassName="active"
                        className={className + " uppercase"} >
                        About
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/blog"
                        activeClassName="active"
                        className={className + " uppercase"} >
                        Blog
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/store"
                        activeClassName="active"
                        className={className + " uppercase"} >
                        Store
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/contact"
                        activeClassName="active"
                        className={className + " uppercase"} >
                        Contact
                    </S.NavbarLink>
                </S.ListItem>
            </>
        ) :
        (
            <>
                <button
                    className="align-left"
                    onClick={() => setSidebarNavStatus(true)}>
                    <Icon
                        xlinkHref={menuIcon}
                        width="36"
                        height="36"
                        className={`align-left nav-item ${className}`} />
                </button>
                <RouterLink
                    url="/"
                    className="nav-item align-center"
                    isImage={true}
                >
                    <Logo className="small" />
                </RouterLink>
                <Icon
                    xlinkHref={searchIcon}
                    width="28"
                    height="28"
                    className={`align-right nav-item ${className}`} />
            </>
        );
    return (
        !sidebarNav.isActive &&
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
    /**
     * The sidebarNav object which contains flag to indicate
     * if the sidebar nav is active.
     */
    sidebarNav: PropTypes.object,
    /**
     * Function to dispatch Redux Action to set sidebar nav status.
     */
    setSidebarNavStatus: PropTypes.func,
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
    sidebarNav: getSidebarNavState(state),
});

/**
 * Assign props to dispatch actions to the Redux Store.
 *
 * @param {*} dispatch action to dispatch
 * @return {Function} functions mapped to the Component as props
 */
const mapDispatchToProps = (dispatch) => ({
    setSidebarNavStatus: (status) => dispatch(setSidebarNavStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
