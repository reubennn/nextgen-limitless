import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

/**
 * Styled-Components
 */
const S = {};

S.NavBar = styled.nav.attrs({
    className: "NavBar",
})`
    &&& {
        background-color: #303030;
        margin: 0;
        padding: 0.3rem;
    }
`;

S.FlexContainer = styled.ul`
    &&& {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0;
    }
    & > li {
        list-style-type: none;
    }
`;

const activeClassName = "active";
/**
 * Inherit React Router Link to style it
 */
S.NavLink = styled(NavLink).attrs({
    activeClassName,
})`
    & {
        color: #fff;
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.25rem;
        border-radius: 0.25rem;
        margin: 0 0.3rem;
    }

    &:hover {
        background-color: #fff;
        color: #303030;
        transition: ease-in-out 0.25s;
    }

    &.${activeClassName} {
        /* TO IMPLEMENT */
        background-color: #ee6868;
        color: white;
        border-radius: 0;
        padding: 0.42rem 0.25rem;
        transition-delay: 0.25s;
        transition: ease-in-out 0.25s;

        &:hover {
            border-radius: 0.25rem;
            transition: ease-in-out 0.25s;
        }
    }
`;

const NavBar = () => (
    <S.NavBar>
        <S.FlexContainer>
            <li>
                <S.NavLink to="/"
                    activeClassName="active"
                    exact>Home </S.NavLink>
            </li>
            <li>
                <S.NavLink to="/about"
                    activeClassName="active">About</S.NavLink>
            </li>
            <li>
                <S.NavLink to="/articles-list"
                    activeClassName="active">Articles</S.NavLink>
            </li>
        </S.FlexContainer>
    </S.NavBar>
);

export default NavBar;
