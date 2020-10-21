import React from "react";
import RouterLink from "./RouterLink";
import * as S from "../styles/styled-components";

const Footer = () => (
    <S.Footer>
        <S.FlexContainer column className="footer-nav">
            <RouterLink url="/" label="Home" />
            <RouterLink url="/articles-list" label="Articles" />
            <RouterLink url="/about" label="About" />
            <RouterLink url="/contact" label="Contact" />
        </S.FlexContainer>
        <S.FlexContainer>
            <RouterLink tiny url="/privacy" label="Privacy" />
            <RouterLink tiny url="/cookies" label="Cookies" />
            <RouterLink tiny url="/legal" label="Legal" />

        </S.FlexContainer>
        <S.HorizontalRuler thin smallMargin color="grey" width={"85%"} />
        <S.TinyText>
            <span>© 2020 Reuben Smith.&nbsp;</span>
            All Rights Reserved.
        </S.TinyText>
        <S.TinyText superTiny>
            Special thanks to
            <S.InlineAnchor
                color="light"
                bgColor="dark"
                href="https://www.linkedin.com/learning/"
                target="_blank"
                rel="noreferrer"
            >
                LinkedIn Learning
            </S.InlineAnchor>
            and
            <S.InlineAnchor
                color="light"
                bgColor="dark"
                href="https://www.linkedin.com/in/shaun-wassell/"
                target="_blank"
                rel="noreferrer"
            >
                Shaun Wassell
            </S.InlineAnchor>
            for initial content and ideas.
        </S.TinyText>
    </S.Footer>
);

export default Footer;
