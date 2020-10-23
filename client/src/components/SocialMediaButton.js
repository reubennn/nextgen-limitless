import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

// Use Fandom.com icons
const SocialMediaButton = ({ icon, className }) => {
    return (
        <S.SocialMediaButton
            className={className}
            color="grey"
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
    icon: PropTypes.object.isRequired,
    className: PropTypes.string,
};

export default SocialMediaButton;
