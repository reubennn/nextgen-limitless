import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import * as S from "../styles/styled-components/styled";

const LogoSlider = ({ logos, reverse, bgColor = "grey-shade-dark", type }) => {
    const values = ["first", "second", "third", "fourth", "fifth"];
    const logoSliders = [];
    for (let i = 0; i < 5; i++) {
        logoSliders.push(
            <S.LogoSlider
                key={i}
                element={values[i]}
                reverse={reverse}
                type={type}>
                {logos.map((logo, key) =>
                    <Icon
                        key={key}
                        xlinkHref={logo}
                        height="7rem"
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
            {/* <Icon
            xlinkHref={tesla}
            height="100%"
            width="150px"
            id="main"
            className="logo-slider"
            bgColor={bgColor} /> */}
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
     * The background color, so that inner parts of the SVG
     * can be inverted and visible.
     */
    bgColor: PropTypes.string,
    /**
     * REDUX
     */
    type: PropTypes.object,
};

export default LogoSlider;
