import React from "react";
import PropTypes from "prop-types";

/**
 * React Component to display an Emoji.
 *
 * @return {Component} the emoji inline
 */
const Emoji = ({ emoji, label }) => (
    <span
        role="img"
        aria-label={label ? label : undefined}
        aria-hidden={label ? undefined : "true"}>
        {emoji}
    </span>
);

Emoji.propTypes = {
    /**
     * The emoji to display.
     */
    emoji: PropTypes.string,
    /**
     * Label to display if Emoji cannot be displayed.
     */
    label: PropTypes.string,
};

export default Emoji;
