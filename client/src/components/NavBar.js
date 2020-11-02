import React from "react";

import * as S from "../styles/styled-components";

/**
 * React Component which displays the navigation bar to access
 * links to different pages on the website.
 *
 * @return {Component} navbar for navigating through website
 */
const Navbar = () => (
    <S.Navbar>
        <S.FlexContainer className="no-margin">
            <S.ListItem>
                <S.NavbarLink to="/"
                    activeClassName="active"
                    exact>Home </S.NavbarLink>
            </S.ListItem>
            <S.ListItem>
                <S.NavbarLink to="/about"
                    activeClassName="active">About</S.NavbarLink>
            </S.ListItem>
            <S.ListItem>
                <S.NavbarLink to="/articles-list"
                    activeClassName="active">Articles</S.NavbarLink>
            </S.ListItem>
        </S.FlexContainer>
    </S.Navbar>
);

export default Navbar;
