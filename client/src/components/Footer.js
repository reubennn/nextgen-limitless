import React, { useState, useEffect } from "react";
import RouterLink from "./RouterLink";
import { debounce } from "lodash";

import SocialMediaButton from "./SocialMediaButton";
import socialMediaIcons from "../data/socialMediaIcons";

import * as S from "../styles/styled-components";

/**
 * React Component which renders the website footer
 *
 * @return {Component} the website footer
 */
const Footer = () => {
    /**
     * Initialize state with undefined width/height,
     *  so server and client renders match.
     *  Important when implementing server-side rendering.
     */
    const [viewport, setViewport] = useState({
        width: undefined,
        height: undefined,
    });

    /**
     * useEffect used to add an event listener to handle window resizing event.
     */
    useEffect(() => {
        /**
         * Handler function called during window viewport resize.
         */
        function handleResize() {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        /**
         * Add the event listener and attach lodash debounce delay,
         * so that the function is not continuously called during
         * a window resize.
         */
        window.addEventListener("resize", debounce(handleResize, 200));

        /**
         * Call Handler immediately to update the initial window size
         * in state.
         */
        handleResize();

        /**
         * Clean-up to remove the event listener.
         */
        return () => {
            window.removeEventListener("resize", debounce(handleResize, 200));
        };
    }, []);

    /**
     * Set flag to allow for conditional rendering
     * based on the size of the viewport.
     */
    let minWidthDetected = false;
    if (viewport.width < 540) {
        minWidthDetected = true;
    };

    return (
        <S.Footer>
            <S.FlexContainer column className="footer-nav">
                <RouterLink url="/" label="Home" />
                <RouterLink url="/articles-list" label="Articles" />
                <RouterLink url="/about" label="About" />
                <RouterLink url="/contact" label="Contact" />
            </S.FlexContainer>
            <S.HorizontalRuler thin smallMargin color="grey" width={"50%"} />
            <S.TinyText
                margin="0.6rem"
                color="light"
            >
                Connect with us:
            </S.TinyText>
            <S.FlexContainer smallMargin wrapContent>
                {!minWidthDetected &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="25%" />
                }
                {socialMediaIcons.map((icon, key) => (
                    <SocialMediaButton
                        className="footer-icon"
                        key={key}
                        icon={icon} />
                ))}
                {!minWidthDetected &&
                    <S.HorizontalRuler
                        className="footer-hr"
                        width="25%" />
                }
            </S.FlexContainer>
            {minWidthDetected &&
                <S.HorizontalRuler
                    className="footer-hr"
                    width="50%" />
            }
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
            <S.FlexContainer smallMargin wrapContent>
                <RouterLink tiny url="/privacy" label="Privacy" />
                <RouterLink tiny url="/cookies" label="Cookies" />
                <RouterLink tiny url="/legal" label="Legal" />
            </S.FlexContainer>
        </S.Footer>
    );
};

export default Footer;
