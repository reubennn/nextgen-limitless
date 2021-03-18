import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { throttle } from "lodash";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
    getSidebarNavState,
    getAtTopState,
} from "../selectors/viewportSelectors";

import {
    setSidebarNavStatus,
    setAtTopStatus,
} from "../actions/viewportActions";

import menuIcon from ".../icons/menu.svg";
import searchIcon from ".../icons/magnifying-glass.svg";
import apiIcon from ".../icons/api.svg";
import userIcon from ".../icons/user.svg";
import dropdownIcon from ".../icons/dropdown-arrow-shifted.svg";
import logoSmall from ".../images/logo-small.svg";
import gitHubIcon from ".../logos/github.svg";

import RouterLink from "./RouterLink";
import Icon from "./Icon";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import SignupButton from "./SignupButton";
import DropdownMenu from "./DropdownMenu";

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
    setAtTopStatus,
}) => {
    const [scrolledUp, setScrolledUp] = useState(true);
    const [scrollPos, setScrollPos] = useState(window.pageYOffset);
    const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
    /** Get the atTop status from the Redux Store */
    const atTop = viewport.atTop;

    /** Check if Auth0 user is authenticated */
    const { isAuthenticated } = useAuth0();

    /**
     * useEffect used to add an event listener to handle window scroll
     * and update the Component state.
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status
        /**
         * Handler function called during window scrolling.
         */
        const handleNav = () => {
            if (isMounted) {
                setScrollPos(window.pageYOffset);
            }
        };

        /**
         * Add the event listener and attach lodash throttle delay,
         * so that the function is not continuously called during
         * window scrolling.
         */
        window.addEventListener("scroll", throttle(handleNav, 300));

        /**
         * Clean-up to remove the event listener.
         */
        return () => {
            window.removeEventListener("scroll", throttle(handleNav, 300));
            isMounted = false;
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
            scrollPos > 0 ?
                setAtTopStatus(false) : setAtTopStatus(true);
            setPrevScrollPos(scrollPos);
        }
        /**
         * useEffect clean-up:
         * If unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
    }, [scrollPos]);

    const accountImageComponent =
        <S.FlexContainer className="no-margin">
            <Icon
                navbar
                $atTop={atTop}
                xlinkHref={userIcon}
                width="32px"
                height="32px"
                alt="User Account Icon Nav Button"
                className={`${className} ${iconClass}`} />
            <Icon
                navbar
                $atTop={atTop}
                xlinkHref={dropdownIcon}
                width="16px"
                height="16px"
                alt="Dropdown Arrow Icon Nav Button"
                className={`${className} ${iconClass}`} />
        </S.FlexContainer>;

    const authOptions = isAuthenticated ?
        <>
            <Link to="/account" value="Account">Account</Link>
            <LogoutButton
                value="Log out"
                noStyle
                bgHoverColor="red-neutral" />
        </> :
        <>
            <LoginButton noStyle value="Log in" />
            <SignupButton
                value="Sign up"
                noStyle
                bgHoverColor="grey-tint-dark" />
        </>;

    const iconClass = atTop ? "at-top" : "";
    const content = viewport.size.is.greaterThan.small ?
        (
            <>
                <RouterLink
                    url="/"
                    className="justify-left nav-item"
                    isImage={true}
                    ariaLabel="Home" >
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
                        className={className + " uppercase nav-item"}
                        $atTop={atTop} >
                        About
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/blog"
                        exact
                        activeClassName="active"
                        className={className + " uppercase nav-item"}
                        $atTop={atTop} >
                        Blog
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/store"
                        activeClassName="active"
                        className={className + " uppercase nav-item"}
                        $atTop={atTop} >
                        Store
                    </S.NavbarLink>
                </S.ListItem>
                <S.ListItem className="nav-item">
                    <S.NavbarLink
                        to="/contact"
                        activeClassName="active"
                        className={className + " uppercase nav-item"}
                        $atTop={atTop} >
                        Contact
                    </S.NavbarLink>
                </S.ListItem>
                {
                    viewport.size.is.greaterThan.small &&
                    <S.ListItem className="nav-icon">
                        <button
                            onClick={() => null}
                            aria-label="Search">
                            <Icon
                                navbar
                                $atTop={atTop}
                                xlinkHref={searchIcon}
                                width="22px"
                                height="22px"
                                alt="Search Icon Nav Button"
                                className={`${className} ${iconClass}`} />
                        </button>
                    </S.ListItem>
                }
                <S.ListItem className="nav-item">
                    <DropdownMenu
                        imageComponent={accountImageComponent}
                        options={authOptions}
                        hide={!scrolledUp}
                        ariaLabel="Account" >
                        {authOptions}
                    </DropdownMenu>
                </S.ListItem>
                {
                    viewport.size.is.greaterThan.medium &&
                    <S.ListItem className="nav-icon">
                        <a href={`${process.env.REACT_APP_SERVER_URL}`}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Server API">
                            <Icon
                                navbar
                                $atTop={atTop}
                                xlinkHref={apiIcon}
                                width="30px"
                                height="30px"
                                alt="Server API Nav Button"
                                className={`${className} ${iconClass}`} />
                        </a>
                    </S.ListItem>
                }
                <S.ListItem className="nav-icon">
                    <a href="https://github.com/reubennn/fullstack-react"
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Github Repo">
                        <Icon
                            navbar
                            $atTop={atTop}
                            xlinkHref={gitHubIcon}
                            width="28px"
                            height="28px"
                            alt="GitHub Repo Icon Nav Button"
                            className={`${className} ${iconClass}`} />
                    </a>
                </S.ListItem>
            </>
        ) :
        (
            <>
                <li className="justify-left">
                    <button
                        onClick={() => setSidebarNavStatus(true)}
                        aria-label="Menu">
                        <Icon
                            navbar
                            $atTop={atTop}
                            xlinkHref={menuIcon}
                            width="36px"
                            height="36px"
                            alt="Menu Icon Nav Button"
                            className={`${className} ${iconClass}`} />
                    </button>
                </li>
                <li className="no-margin">
                    <S.AbsoluteElement justifyCenter>
                        <Link
                            to="/"
                            aria-label="Home">
                            <S.LogoImage
                                className="small no-margin"
                                src={logoSmall}
                                type={viewport.type}
                                height="3rem"
                                alt="Spaceship Logo Nav Home Icon" />
                        </Link>
                    </S.AbsoluteElement>
                </li>
                <li>
                    <S.FlexContainer className="no-margin">
                        {viewport.size.is.greaterThan.extraSmall &&
                            <button
                                onClick={() => null}
                                aria-label="Seach">
                                <Icon
                                    navbar
                                    $atTop={atTop}
                                    xlinkHref={searchIcon}
                                    width="28px"
                                    height="28px"
                                    alt="Search Icon Nav Button"
                                    className={"nav " + className +
                                        " " + iconClass} />
                            </button>}
                        <DropdownMenu
                            imageComponent={accountImageComponent}
                            hide={!scrolledUp}
                            ariaLabel="Account">
                            {authOptions}
                        </DropdownMenu>
                    </S.FlexContainer>
                </li>
            </>
        );
    return (
        <S.Navbar
            className={className}
            scrolledUp={scrolledUp}
            $atTop={atTop}
            type={viewport.type}
            sidenav={sidebarNav.isActive}>
            <S.FlexList
                className="no-margin"
                justifyContent="flex-end">
                {content}
            </S.FlexList>
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
    /**
     * Function to dispatch Redux Action to set viewport atTop flag status.
     */
    setAtTopStatus: PropTypes.func,
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
        atTop: getAtTopState(state),
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
    setAtTopStatus: (status) => dispatch(setAtTopStatus(status)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
