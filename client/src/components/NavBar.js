import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { debounce } from "lodash";

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
import logoSmall from ".../images/logo-small.svg";

import RouterLink from "./RouterLink";
import Icon from "./Icon";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays the navigation bar to access
 * links to different pages on the website.
 *
 * - When the user scrolls down, the navigation bar is hidden.
 * - When the user scrolls up or the window scroll is at the top of the page,
 * the navigation bar is shown.
 *
 * @return {Component} navbar for navigating through website
 */
const Navbar = ({
    className = "",
    viewport,
    sidebarNav,
    setSidebarNavStatus,
}) => {
    const [scrolledUp, setScrolledUp] = useState(true);
    const [atTop, setAtTop] = useState(true);
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

    /**
     * useEffect used to add an event listener to handle window scroll
     * and update the Component state.
     */
    useEffect(() => {
        /**
         * Handler function called during window scrolling.
         */
        const handleNav = () => {
                setScrollPos(window.pageYOffset);
        };

        /**
         * Add the event listener and attach lodash debounce delay,
         * so that the function is not continuously called during
         * window scrolling.
         */
        window.addEventListener("scroll", debounce(handleNav, 150));

        /**
         * Clean-up to remove the event listener.
         */
        return () => {
            window.removeEventListener("scroll", debounce(handleNav, 150));
        };
    }, []);

    /**
     * useEffect to hide or show the navigation bar depending on
     * window scrolling.
     *
     * - Called when the scroll position state is updated to check the
     * current scroll position relative to the previous position.
     *
     * - Separate useEffect used as useState updates the value asynchronously.
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status
        if (isMounted) {
            prevScrollPos >= scrollPos ?
                setScrolledUp(true) : setScrolledUp(false);

            setPrevScrollPos(scrollPos);

            scrollPos > 0 ?
                setAtTop(false) : setAtTop(true);
        }
        /**
         * useEffect clean-up:
         * If unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
    }, [scrollPos]);

    const iconClass = atTop ? "at-top" : "";

    const content = viewport.dimensions.width >= media.breakpoints.medium ?
        (
            <>
                <RouterLink
                    url="/"
                    className="align-left nav-item"
                    isImage={true} >
                    <S.LogoImage
                        className="small"
                        src={logoSmall}
                        type={viewport.type}
                        height="3rem"
                        alt="Spaceship Logo Nav Home Icon" />
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
                        className={`nav-item ${className} ${iconClass}`} />
                </button>
                <RouterLink
                    url="/"
                    className="nav-item align-center"
                    isImage={true}
                >
                    <S.LogoImage
                        className="small"
                        src={logoSmall}
                        type={viewport.type}
                        height="3rem"
                        alt="Spaceship Logo Nav Home Icon" />
                </RouterLink>
                <button
                    className="align-right"
                    onClick={() => setSidebarNavStatus(true)}>
                    <Icon
                        xlinkHref={searchIcon}
                        width="28"
                        height="28"
                        className={`nav-item ${className} ${iconClass}`} />
                </button>
            </>
        );
    return (
        !sidebarNav.isActive &&
        <S.Navbar
            className={className}
            scrolledUp={scrolledUp}
            atTop={atTop}
            type={viewport.type}>
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
