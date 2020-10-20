import React from "react";

// import ScrollToTop from "./components/ScrollToTop";

import * as S from "../styles/styled-components";

const Footer = () => (
    <S.Footer>
        <S.FlexContainer column>
            <S.ListItem>
                <S.RouterLink to="/"
                    exact>
                    Home
                </S.RouterLink>
            </S.ListItem>
            <S.ListItem>
                <S.RouterLink to="/about">
                    About
                </S.RouterLink>
            </S.ListItem>
            <S.ListItem>
                <S.RouterLink to="/articles-list">
                    Articles
                </S.RouterLink>
            </S.ListItem>
            <S.ListItem>
                <S.RouterLink to="/contact">
                    Contact
                </S.RouterLink>
            </S.ListItem>
        </S.FlexContainer>
        <S.HorizontalRuler light thin width={"85%"} />
        <S.TinyText>© 2020 Reuben Smith. All Rights Reserved.</S.TinyText>
        <S.TinyText>
            Special thanks to&nbsp;
            <S.InlineAnchor
                darkBackground
                href="https://www.linkedin.com/learning/"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn Learning
            </S.InlineAnchor>
            &nbsp;and&nbsp;
            <S.InlineAnchor
                darkBackground
                href="https://www.linkedin.com/in/shaun-wassell/"
                target="_blank"
                rel="noreferrer"
            >
                Shaun Wassell
            </S.InlineAnchor>
            &nbsp;for initial content and ideas.
        </S.TinyText>
    </S.Footer>
);

export default Footer;
