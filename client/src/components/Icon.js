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
const Icon = ({
    xlinkHref,
    id = "main",
    width,
    height,
    alt,
    fill,
    bgColor = "grey-shade-dark",
    navbar = false,
    $atTop,
    className = "",
}) => {
    const useElement =
        <use
            xlinkHref={`${xlinkHref}#${id}`}
            width={width}
            height={height} />;
    return (
        navbar ?
            (
                <S.NavIcon
                    width={width}
                    height={height}
                    viewbox={`0 0 ${width} ${height}`}
                    alt={alt}
                    fill={fill}
                    bgColor={bgColor}
                    $atTop={$atTop}
                    className={className}>
                    {useElement}
                </S.NavIcon>
            ) :
            (
                <S.Icon
                    width={width}
                    height={height}
                    viewbox={`0 0 ${width} ${height}`}
                    alt={alt}
                    fill={fill}
                    bgColor={bgColor}
                    className={className}>
                    {useElement}
                </S.Icon>
            )
    );
};

Icon.propTypes = {
    /**
     * The SVG xlink:href attribute pointing to the svg file location.
     */
    xlinkHref: PropTypes.string.isRequired,
    /**
     * The id attribute for the SVG.
     * - the SVG file must have an id attribute to reference.
     */
    id: PropTypes.string,
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
     * The fill of the SVG icon.
     */
    fill: PropTypes.string,
    /**
     * The background color, so that inner parts of the SVG
     * can be inverted and visible.
     *
     * - The inverted elements in the SVG file need to have property:
     * fill="currentColor".
     */
    bgColor: PropTypes.string,
    /**
     * Flag indicating if the Icon is for the navbar.
     */
    navbar: PropTypes.bool,
    /**
     * Flag indicating if the window is at the top of the page.
     *
     * Prefixed with $ for consistency among other navbar components.
     * - $ prefix indicates it is a styled-component transient prop,
     * to avoid passing it to the underlying React node or rendering
     * it to the DOM element.
     */
    $atTop: PropTypes.bool,
    /**
     * The class name to be passed onto styled-components Icon.
     * - As the Icon React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
};

export default Icon;
