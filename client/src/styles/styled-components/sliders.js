/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import { sliderAnimation } from "./mixins";

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
 * To DO
 *
 */
export const TestimonialStacker = styled.div`
    height: auto;
    margin: 0.75rem 0;
    overflow: hidden;
`;

/**
 * To DO
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const TestimonialSlider = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: inline-block;
    overflow: hidden;
    /* position: absolute; */
    display: flex;
    flex-direction: row;
`;

/**
 * To DO
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 */
export const TestimonialBlock = styled.div.attrs((props) => ({
    offset: props.offset || 0,
    duration: props.duration || 10,
}))`
    display: flex;
    flex-direction: column;
`;
