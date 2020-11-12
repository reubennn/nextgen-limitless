import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component to display an SVG icon as an image.
 *
 * This allows any SVG file to be displayed simply by calling this Component.
 * - Keeps interactivity and enables CSS styling.
 *
 * Important: the SVG file must have an id attribute
 *
 * @return {Component} a stylable svg icon
 */
const Icon = ({ xlinkHref, id, width, height, alt, className }) => (
    <S.Icon
        width={width}
        height={height}
        viewbox={`0 0 ${width} ${height}`}
        alt={alt}
        className={className}>
        <use xlinkHref={`${xlinkHref}#${id}`} width={width} height={height}/>
    </S.Icon>
);

Icon.propTypes = {
    /**
     * The SVG xlink:href attribute pointing to the svg file location.
     */
    xlinkHref: PropTypes.string.isRequired,
    /**
     * The id attribute for the SVG.
     * - the SVG file must have an id attribute to reference.
     */
    id: PropTypes.string.isRequired,
    /**
     * The width of the SVG icon.
     */
    width: PropTypes.string,
    /**
     * The height of the SVG icon.
     */
    height: PropTypes.string,
    /**
     * The SVG alt if it cannot be displayed.
     */
    alt: PropTypes.string,
    /**
     * The class name to be passed onto styled-components Icon.
     * - As the Icon React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
};

export default Icon;
