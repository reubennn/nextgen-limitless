import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an animated logo slider.
 *
 * Displays a list of logos which translate across the screen
 * in an infinite loop animation.
 *
 * @return {Component} logo slider
 */
const LogoSlider = ({
    logos,
    reverse,
    duration,
    bgColor = "grey-shade-dark",
}) => {
    const offset = [-1, 0, 1];
    const logoSliders = [];
    for (let i = 0; i < 3; i++) {
        logoSliders.push(
            <S.LogoSlider
                key={i}
                offset={offset[i]}
                reverse={reverse}
                duration={duration}>
                {logos.map((logo, key) =>
                    <Icon
                        key={key}
                        xlinkHref={logo}
                        height="100px"
                        width="150px"
                        id="main"
                        className="logo-slider"
                        bgColor={bgColor} />,
                )}
            </S.LogoSlider>,
        );
    }
    return (
        <>
            <S.ZingerStackerSliders>
                {logoSliders}
            </S.ZingerStackerSliders>
        </>
    );
};

LogoSlider.propTypes = {
    /**
     * The logos to display in the slider.
     *
     * - Array containing the paths to the logo files.
     */
    logos: PropTypes.array.isRequired,
    /**
     * Indicates if the slider should translate in reverse direction.
     */
    reverse: PropTypes.bool,
    /**
     * The duration the slider takes to get from the first logo to the last.
     */
    duration: PropTypes.number,
    /**
     * The background color, so that inner parts of the SVG
     * can be inverted and visible.
     */
    bgColor: PropTypes.string,
};

export default LogoSlider;
