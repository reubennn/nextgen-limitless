import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for displaying a responsive image from a range of
 * different sized images, where the most optimal image is displayed based on
 * the viewport.
 *
 * - Can either be used as a normal image, or a background image which will
 * set the image as the background of the container.
 *
 *                      ~ Background Image ~
 * - On thinner viewports, such as smartphones, we are stretching
 * these images to cover the entire background to 100vh in some instances.
 * - Therefore, we need to ensure the picture will not be blurry.
 * - When in portrait mode, we can use <picture> sizes property
 * to ensure the most optimized image is used for 16:9 aspect ratio,
 * which is the most common for smartphones.
 *
 * @return {Component} background image for the current container
 */
const ResponsiveImage = ({
    className = "",
    srcset,
    alt = "Image",
    type = "image/jpg",
    lazy = false,
    gradient = false,
    opacity = 0.5,
    /** Background Image specific */
    xPos = "center",
    yPos = "center",
    scrollWithPage = false,
    background = false,
    /** Image specific */
    width = "100%",
    height = "auto",
    circle = false,
}) => {
    let srcSetString = "";
    let placeholder;
    let index = 0;

    /**
     * Generates the srcset string for the <source> of the <picture>.
     */
    for (const property in srcset) {
        if (Object.prototype.hasOwnProperty.call(srcset, property)) {
            if (index === 0) {
                placeholder = srcset[property];
                index++;
            }
            srcSetString === "" ?
                srcSetString = (srcset[property] + " " + property) :
                (srcSetString = srcSetString + ", " +
                    srcset[property] + " " + property);
        }
    };
    return (
        background ?
            (
                <S.BackgroundImageContainer>
                    <source
                        srcSet={srcSetString}
                        sizes="(orientation: landscape) 100vw,
                calc(100vh / 9 * 16)"
                        type={type} />
                    <S.BackgroundImage
                        src={placeholder}
                        alt={alt}
                        xPos={xPos}
                        yPos={yPos}
                        loading={lazy ? "lazy" : "eager"}
                        scrollWithPage={scrollWithPage} />
                    {gradient &&
                        <S.GradientOverlay
                            className={className}
                            opacity={opacity} />
                    }
                </S.BackgroundImageContainer>
            ) :
            (
                <S.Image
                    className={className}
                    src={placeholder}
                    srcSet={srcSetString}
                    alt={alt}
                    width={width}
                    height={height}
                    circle={circle} />
            )
    );
};

ResponsiveImage.propTypes = {
    /**
     * The HTML class name to pass to the components for CSS styling.
     */
    className: PropTypes.string,
    /**
     * Contains the url links for each image size, with the
     * property name as the associated width.
     *
     * @example
     * // 1920x1080 image
     * srcset = { "1920w": "www.some-url.com/link/to/image"}
     */
    srcset: PropTypes.object,
    /**
     * The alt for the image.
     */
    alt: PropTypes.string,
    /**
     * The type of the image supplied for modern filetypes.
     */
    type: PropTypes.string,
    /**
     * Indicates if the image should use lazy loading.
     */
    lazy: PropTypes.bool,
    /**
     * Indicates if the image should have a gradient overlay.
     */
    gradient: PropTypes.bool,
    /**
     * The opacity for the overlay gradient.
     */
    opacity: PropTypes.number,
    /** Background Image specific */
    /**
     * Horizontal positioning of the image.
     */
    xPos: PropTypes.string,
    /**
     * Vertical positioning of the image.
     */
    yPos: PropTypes.string,
    /**
     * Indicates if the image should scroll with the page.
     */
    scrollWithPage: PropTypes.bool,
    /**
     * Flag indicating that the image is to be used as a background.
     */
    background: PropTypes.bool,
    /** Image specific */
    /**
     * The width of the image.
     */
    width: PropTypes.string,
    /**
     * The height of the image.
     */
    height: PropTypes.string,
    /**
     * Indicates if the image should be a circle.
     */
    circle: PropTypes.bool,
};

export default ResponsiveImage;
