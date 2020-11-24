import { css } from "styled-components";

import { infiniteLinearTranslate } from "./keyframes";

/**
 * CSS to create a gradient transition effect.
 *
 * - Adds a pseudo element :before
 *
 * @param {String} start linear gradient start color
 * @param {String} end linear gradient end color
 * @param {String} properties other CSS styles to add
 * @return {String} CSS styling for linear gradient transition effect
 *
 */
export const gradientTransition = (start, end, properties) => css`
    position: relative;
    z-index: 1;

    &:before {
        ${properties} /* Add any additional properties */
        background: ${`linear-gradient(
        245deg,
        ${start} -90%,
        ${end} 120%)`};
        content: "";
        display: block;
        height: 100%;
        position: absolute;
        top: 0; left: 0;
        opacity: 0;
        width: 100%;
        z-index: -1;
        transition: cubic-bezier(0.9, 0.75, 1, 1) 0.3s;
    }

    &:hover {
        &:before {
        opacity: 1;
        }
    }
`;

/**
 * CSS for creating a sliding effect animation.
 *
 * - The elements will translate across the screen.
 *
 * @param {Number} duration the duration to span the logos across the screen
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @param {Boolean} reverse flag to indicate slider to move in reverse direction
 * @return {String} CSS for a slider animation
 */
export const sliderAnimation = (duration, offset, reverse) => css`
    animation:
    ${duration}s /* duration */
    linear /* timing-function */
    0s /* delay */
    infinite /* iteration-count */
    ${reverse ? "reverse" : "normal"} /* direction */
    both /* fill-mode */
    running /* play-state */
    ${infiniteLinearTranslate(offset)}; /* animation-name */
`;
