import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { enableScroll, disableScroll } from "../scripts/disableScroll";
import {
    getSidebarNavState,
} from "../selectors/viewportSelectors";

import { setSidebarNavStatus } from "../actions/viewportActions";

import Icon from "./Icon";
import RouterLink from "./RouterLink";

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
const SidebarNav = ({ className = "", sidebarNav, setSidebarNavStatus }) => {
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
            <S.FlexContainer className="no-margin" justifyContent="flex-end">
                <button
                    className="align-left"
                    onClick={() => setSidebarNavStatus(false)}>
                    <Icon
                        navbar
                        xlinkHref={closeIcon}
                        width="36px"
                        height="36px"
                        className={"align-left close-icon " +
                            className} />
                </button>
                <RouterLink
                    url="/"
                    className="nav-item align-center"
                    isImage={true}
                >
                    <S.LogoImage
                        className="small"
                        src={logoSmall}
                        height="3rem"
                        alt="Spaceship Logo Nav Home Icon" />
                </RouterLink>
                <button
                    className="align-right"
                    onClick={() => setSidebarNavStatus(true)}>
                    <Icon
                        navbar
                        xlinkHref={searchIcon}
                        width="28px"
                        height="28px"
                        className={`${className}`} />
                </button>
            </S.FlexContainer>
            <br></br>
            <S.FlexContainer
                className="no-margin"
                column
                justifyContent="flex-end">
                <S.HorizontalRuler className="sidebar-nav" />
                <S.ListItem className="nav-item sidebar-nav">
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
                <S.HorizontalRuler className="sidebar-nav" />
                <S.ListItem className="nav-item sidebar-nav">
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/about"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            About
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.HorizontalRuler className="sidebar-nav" />
                <S.ListItem className="nav-item sidebar-nav">
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/blog"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Blog
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.HorizontalRuler className="sidebar-nav" />
                <S.ListItem className="nav-item sidebar-nav">
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/store"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Store
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
                <S.HorizontalRuler className="sidebar-nav" />
                <S.ListItem className="nav-item sidebar-nav">
                    <button onClick={() => setSidebarNavStatus(false)}>
                        <S.NavbarLink
                            to="/contact"
                            activeClassName="active"
                            className={className + " uppercase"} >
                            Contact
                        </S.NavbarLink>
                    </button>
                </S.ListItem>
            </S.FlexContainer>
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
