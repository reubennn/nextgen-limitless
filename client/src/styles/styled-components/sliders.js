/* eslint-disable valid-jsdoc */
import styled, { css } from "styled-components";

import { sliderAnimation } from "./mixins";
import { color } from "./colors";
import {
    handleTogglePosition,
    handleCarouselBlockWidth,
} from "./responsive";

/**
 * Sliders parent container so they stack and overlay on top of each other.
 *
 * This is required to create an infinite linear translation
 * animation so it appears as though the logos list never ends.
 *
 * - Sure don't mind a good ol' Zinger Stacker!
 *
 */
export const ZingerStackerSliders = styled.div`
    height: 7rem;
    margin: 0.75rem 0;
    overflow: hidden;

    /* Span the slider over the entire screen */
    position: relative;
    width: 100vw;
    left: calc(-50vw + 50%);
`;

/**
 * Logo Slider which displays company logos across the screen.
 *
 * - To create the infinite linear translation, we need to use three
 * sliders containing the logos, which each have a different offset positions.
 * The different offsets make it appear as though the logos translate
 * seamlessly and infinitely.
 * - We need the three sliders to have an offset value of either -1, 0 and 1,
 * respectively.
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const LogoSlider = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    display: flex;
    flex-direction: row;
    height: 7rem;
    ${(props) => {
        return sliderAnimation(
            props.duration * 3,
            props.offset,
            props.reverse,
        );
    }}
`;

/**
 * Carousel Container Component used to contain
 * the Carousel Slider.
 * - Used as placeholder since the Carousel slider has absolute
 * positioning so that the offset can be toggled to display the
 * items.
 *
 */
export const CarouselContainer = styled.div`
    height: auto;
    margin: 0;
    overflow: hidden;
    position: relative;
    width: 100vw;
    padding: 1rem 0;
    left: calc(-50vw + 50%);
`;

/**
 * Carousel Toggle Left button.
 *
 * - Pressed to move to the previous slide in the Carousel.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const CarouselToggleLeft = styled.button.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    /* Generous amount of area available to press button */
    margin-top: auto;
    margin-bottom: auto;
    padding-right: 2rem;
    padding-left: ${(props) => handleTogglePosition(props.viewport.type)};
    z-index: 1; /* Keep on top */
`;

/**
 * Carousel Toggle Right button.
 *
 * - Pressed to move to the next slide in the Carousel.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 *
 */
export const CarouselToggleRight = styled.button.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    /* Generous amount of area available to press button */
    margin-top: auto;
    margin-bottom: auto;
    padding-left: 2rem;
    padding-right: ${(props) => handleTogglePosition(props.viewport.type)};
    z-index: 1; /* Keep on top */
`;

/**
 * Carousel Slider Component which consists of all the elements
 * in a row, spanning off the screen. One item is displayed at a time.
 *
 * - The offset indicates the Carousel position, thus the element to display.
 *
 * @param {Number} $offset transient prop indicates translateX(offset)
 * @param {String} width the width of the Carousel
 * @param {String} transition the transition style to be used
 */
export const CarouselSlider = styled.div.attrs((props) => ({
    $offset: props.$offset,
    width: props.width || "100%",
    transition: props.transition,

}))`
    display: flex;
    flex-direction: row;
    left: calc(-50vw + 50%);
    width: ${(props) => props.width};
    ${(props) => props.$offset ?
        css`transform: translateX(${props.$offset}vw)` : ""};
    transition: ${(props) => props.transition};

`;

/**
 * Carousel Block Component container for the child elements
 * inside the Carousel.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const CarouselBlock = styled.div.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    display: flex;
    flex-direction: column;
    text-align: center;
    ${(props) => handleCarouselBlockWidth(props.viewport.type)}
`;

/**
 * Carousel Navigation Container for the navigation buttons.
 *
 * - Small buttons at the bottom of the Carousel slider are used for
 * navigation to move the Carousel to the corresponding slide position.
 */
export const CarouselNav = styled.ol`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    margin: 2rem auto;
    width: 95vw;
    left: calc(-47.5vw + 50%);
    position: relative;
`;

/**
 * Carousel Navigation Button Component.
 *
 * - A small button which can be pressed to move the Carousel
 * to the slide position the button index represents.
 *
 * @param {Number} current flag indicating if it is the active navigation button
 * @param {Boolean} hidden flag indicating the button must be hidden
 */
export const CarouselNavButton = styled.li.attrs((props) => ({
    current: props.current,
}))`
    cursor: pointer;
    margin: 0 0.3rem;
    margin-bottom: 1.5rem;
    border-radius: 50%;
    display: ${(props) => props.hidden ? "hidden" : "inline-block"};
    padding: 0.25rem;
    border:  0.1rem solid ${color.grey.tint.light};
    background-color: ${(props) => props.current ?
        color.grey.tint.light : "transparent"};
    transform: ${(props) => props.current ? "scale(1.1)" : ""};
    transition: ease-in-out 0.2s;

    &:hover {
        background-color: ${(props) => props.current ?
        color.grey.tint.light : color.black};
    }
`;
