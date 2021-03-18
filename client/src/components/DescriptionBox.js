import React from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";
import { Link } from "react-router-dom";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a Description Box.
 *
 * Contains various components to make a sleek area filled
 * with an image, title and text to describe something.
 *
 * - Can display contents as either row or column, and in reverse order.
 *
 * @return {Component} description box with title, text and image
 */
const DescriptionBox = ({
    description,
    separator = false,
    column = false,
    reverse = false,
    textColor = "grey-tint-lighter",
    className = "",
}) => {
    /** Check if we need to shrink the image to fit the container */
    const shrinkImage = description.shrinkImage ? "shrink-image" : "";

    /** DescriptionBoxImage content */
    const imageBox =
        <S.DescriptionBoxImage
            className={`${className} ${description.gradient}`}>
            <span></span>
            <Icon
                className={`${shrinkImage}`}
                xlinkHref={description.image}
                height="100%"
                width="100%"
                id="main"
                fill={`${textColor}-x70`}
                bgColor="grey-shade-dark"
                alt={`Description ${description.title} image`} />
        </S.DescriptionBoxImage>;

    /** DescriptionTitle content */
    const titleBox =
        <S.DescriptionTitle
            className={className + " uppercase"}
            small
            color={textColor}
            textAlign="center">
            {description.title}
        </S.DescriptionTitle>;

    return (
        <>
            {separator && column && reverse &&
                <S.HorizontalRuler className="description-box full-width" />}
            <S.DescriptionBox
                column={column}
                reverse={reverse}
                className={className}>
                {description.url === undefined ?
                    imageBox :
                    <Link
                        to={description.url}
                        aria-label={`Link to ${description.title}`} >
                        {imageBox}
                    </Link>
                }
                <S.DescriptionBoxTextbox>
                    {description.url === undefined ?
                        titleBox :
                        <Link
                            to={description.url}
                            aria-label={`Link to ${description.title}`} >
                            {titleBox}
                        </Link>
                    }
                    <S.DescriptionBoxText
                        className={className}
                        color={textColor}>
                        {description.content.map((paragraph) => paragraph)}
                    </S.DescriptionBoxText>
                </S.DescriptionBoxTextbox>
            </S.DescriptionBox>
            {separator && column &&
                <S.HorizontalRuler className="description-box full-width" />}
            {separator && !column &&
                <S.HorizontalRuler className="description-box" />}
        </>
    );
};

DescriptionBox.propTypes = {
    /**
     * The description box object containing content properties.
     *
     * @property {String} title description title
     * @property {Array} content JSX HTML elements (needs key prop) to display
     * @property {String} image image asset path url
     * @property {Bool} shrinkImage flag to shrink the image to fit
     * @property {String} gradient gradient class name used for CSS styling
     * @property {String} url the url to navigate to on click
     */
    description: PropTypes.object,
    /**
     * Flag indicating the horizontal ruler should be included
     * if required.
     */
    separator: PropTypes.bool,
    /**
     * Flag indicating if the content should be displayed as
     * a column or as a row.
     */
    column: PropTypes.bool,
    /**
     * Flag indicating if the content should be reversed.
     */
    reverse: PropTypes.bool,
    /**
     * The color of the text and title.
     */
    textColor: PropTypes.string,
    /**
     * The HTML class name to pass to the components for CSS styling.
     */
    className: PropTypes.string,
};

export default DescriptionBox;
