import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays the navigation bar to access
 * links to different pages on the website.
 *
 * @return {Component} navbar for navigating through website
 */
const SidebarNav = ({ className }) => (
    <S.Navbar className={className}>
        <S.FlexContainer column className="no-margin" justifyContent="flex-end">
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
        </S.FlexContainer>
    </S.Navbar>
);

SidebarNav.propTypes = {
    /**
     * The class name to be passed onto styled-components Navbar.
     * - As the Navbar React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
};

export default SidebarNav;
