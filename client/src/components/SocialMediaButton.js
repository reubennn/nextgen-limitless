import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a social media button generated using
 * SVG data
 *
 * This Component needs to be placed as a direct child
 * of the React Router Component.
 *
 * @return {Component} wrapper for React Router to push scrollbar to top
 */
const SocialMediaButton = ({ icon, className, color = "grey-tint-darker" }) => {
    return (
        <S.SocialMediaButton
            className={className}
            color={color}
            href={icon.href}
            target="_blank"
            rel="noreferrer">
            <svg
                alt={icon.name + " Icon"}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                aria-label={icon.name + "-icon"}
                viewBox="0 0 24 24"
            >
                {icon.dVals.map((dVal, key) => (
                    <path
                        key={key}
                        fillRule="evenodd"
                        d={dVal}
                    />
                ))}
            </svg>
        </S.SocialMediaButton>
    );
};

SocialMediaButton.propTypes = {
    /**
     * The social media icon data.
     *
     * To render correctly, each social media icon must be an
     * object with the following properties:
     *     - @param {String} name social media name
     *     - @param {String} href href url for the social media website,
     *     - @param {Array} dVals d values as a {String}
     *                            One index for each d value
     */
    icon: PropTypes.object.isRequired,
    /**
     * The class name to be passed onto styled-components SocialMediaButton.
     * - As the SocialMediaButton React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
    /**
     * The color of the icon.
     */
    color: PropTypes.string,
};

export default SocialMediaButton;
