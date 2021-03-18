import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

import { enableScroll, disableScroll } from "../scripts/disableScroll";
import {
    getSidebarNavState,
    getViewportSize,
    getViewportDimensions,
} from "../selectors/viewportSelectors";

import { setSidebarNavStatus } from "../actions/viewportActions";

import Icon from "./Icon";
import RouterLink from "./RouterLink";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

import closeIcon from ".../icons/close.svg";
import searchIcon from ".../icons/magnifying-glass.svg";
import logoSmall from ".../images/logo-small.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays the navigation bar to access
 * links to different pages on the website.
 *
 * @return {Component} navbar for navigating through website
 */
const SidebarNav = ({
    className = "",
    sidebarNav,
    setSidebarNavStatus,
    viewport,
}) => {
    /** Check if user is authenticated */
    const { isAuthenticated } = useAuth0();

    const spacing = viewport.size.is.superSmall ? " super-small" : "";
    const listItemClassName = `nav-item sidebar-nav${spacing}`;

    /**
     * useEffect used to disable any scroll functionality when
     * the sidebar navigation is active and enable it is not.
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status
        if (isMounted) {
            sidebarNav.isActive ? disableScroll() : enableScroll();
        }
        /**
         * useEffect clean-up:
         * If unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
            enableScroll();
        };
    }, [sidebarNav.isActive]);

    return (
        <S.Sidenav className={sidebarNav.isActive ? "active" : ""}>
            <S.FlexList
                className="no-margin"
                justifyContent="flex-end">
                <li>
                    <button
                        className="justify-left"
                        onClick={() => setSidebarNavStatus(false)}
                        aria-label="Close">
                        <Icon
                            navbar
                            xlinkHref={closeIcon}
                            width="36px"
                            height="36px"
                            alt="Close Sidebar Nav Icon Button"
                            className={"justify-left close-icon " +
                                className} />
                    </button>
                </li>
                <RouterLink
                    url="/"
                    className="nav-item justify-center"
                    isImage={true}
                    ariaLabel="Home">
                    <S.LogoImage
                        className="small"
                        src={logoSmall}
                        height="3rem"
                        alt="Spaceship Logo Nav Home Icon" />
                </RouterLink>
                <li>
                    <button
                        className="justify-right"
                        onClick={() => setSidebarNavStatus(true)}
                        aria-label="Search">
                        <Icon
                            navbar
                            xlinkHref={searchIcon}
                            width="28px"
                            height="28px"
                            alt="Search Sidebar Nav Icon Button"
                            className={`${className}`} />
                    </button>
                </li>
            </S.FlexList>
            <br></br>
            <S.FlexList
                className="no-margin"
                column
                justifyContent="flex-end">
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/"
                            activeClassName="active"
                            className={className + " uppercase"}
                            exact >
                            Home
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/about"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            About
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/blog"
                            exact
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Blog
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/store"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Store
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/contact"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Contact
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.ListItem className={listItemClassName}>
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/account"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Account
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                {viewport.dimensions.height > 750 &&
                    !isAuthenticated &&
                    <S.ListItem>
                        <S.HorizontalRuler className="sidebar-nav" />
                        <S.AbsoluteElement bottom justifyCenter>
                            <S.FlexList className="no-margin">
                                <S.ListItem
                                    className="nav-item login">
                                    <LoginButton />
                                </S.ListItem>
                                <S.ListItem
                                    className="nav-item signup">
                                    <SignupButton />
                                </S.ListItem>
                            </S.FlexList>
                        </S.AbsoluteElement>
                    </S.ListItem>
                }
            </S.FlexList>
        </S.Sidenav>
    );
};

SidebarNav.propTypes = {
    /**
     * The class name to be passed onto styled-components Navbar.
     * - As the Navbar React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
    /**
     * The sidebarNav object which contains flag to indicate
     * if the sidebar nav is active.
     */
    sidebarNav: PropTypes.object,
    /**
     * Function to dispatch Redux Action to set sidebar nav status.
     */
    setSidebarNavStatus: PropTypes.func,
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
    sidebarNav: getSidebarNavState(state),
    viewport: {
        size: getViewportSize(state),
        dimensions: getViewportDimensions(state),
    },
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

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav);
