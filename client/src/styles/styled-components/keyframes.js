import { keyframes } from "styled-components";
import media from "../../data/media";

/**
 * Rotation Keyframe.
 *
 * - Makes the element continuously rotate.
 */
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/** Create the universal properties for the selector */
const selectorProperties = `% {
  transform: translateX(-100%);
}`;

/**
 * Handler function to inject the correct code into the infinite
 * linear translate animation based on the viewport size.
 *
 * @param {String} viewportType viewport classification type
 * @return {String} keyframe selector code
 */
const handleKeyframeSelector = (dimensions) => {
    // switch (viewportType) {
    //     case ("super-small"):
    //         return 22 + selectorProperties;
    //     case ("extra-small"):
    //         return 22.5 + selectorProperties;
    //     case ("small"):
    //         return 24 + selectorProperties;
    //     case ("medium"):
    //         return 25 + selectorProperties;
    //     case ("large"):
    //         return 27 + selectorProperties;
    //     case ("extra-large"):
    //         return 29 + selectorProperties;
    //     case ("super-large"):
    //         return 33 + selectorProperties;
    //     default:
    //         return 24 + selectorProperties;
    // }
    const viewportWidth = dimensions.width;
    let selector;
    if (viewportWidth >= 4000) {
        selector = Math.round(viewportWidth * 0.0115, 2);
    } else if (viewportWidth >= 3600) {
        selector = Math.round(viewportWidth * 0.012, 2);
    } else if (viewportWidth >= 3900) {
        selector = Math.round(viewportWidth * 0.012, 2);
    } else if (viewportWidth >= 3300) {
        selector = Math.round(viewportWidth * 0.0125, 2);
    } else if (viewportWidth >= 3000) {
        selector = Math.round(viewportWidth * 0.013, 2);
    } else if (viewportWidth >= 2850) {
        selector = Math.round(viewportWidth * 0.0135, 2);
    } else if (viewportWidth >= 2600) {
        selector = Math.round(viewportWidth * 0.014, 2);
    } else if (viewportWidth >= 2450) {
        selector = Math.round(viewportWidth * 0.0145, 2);
    } else if (viewportWidth >= 2400) {
        selector = Math.round(viewportWidth * 0.015, 2);
    } else if (viewportWidth >= 2250) {
        selector = Math.round(viewportWidth * 0.0155, 2);
    } else if (viewportWidth >= 2100) {
        selector = Math.round(viewportWidth * 0.016, 2);
    } else if (viewportWidth >= 2000) {
        selector = Math.round(viewportWidth * 0.0165, 2);
    } else if (viewportWidth >= 1900) {
        selector = Math.round(viewportWidth * 0.017, 2);
    } else if (viewportWidth >= 1850) {
        selector = Math.round(viewportWidth * 0.0175, 2);
    } else if (viewportWidth >= 1600) {
        selector = Math.round(viewportWidth * 0.018, 2);
    } else if (viewportWidth >= 1550) {
        selector = Math.round(viewportWidth * 0.019, 2);
    } else if (viewportWidth >= 1500) {
        selector = Math.round(viewportWidth * 0.02, 2);
    } else if (viewportWidth >= 1450) {
        selector = Math.round(viewportWidth * 0.02, 2);
    } else if (viewportWidth >= 1350) {
        selector = Math.round(viewportWidth * 0.021, 2);
    } else if (viewportWidth >= 1250) {
        selector = Math.round(viewportWidth * 0.022, 2);
    } else if (viewportWidth >= 1150) {
        selector = Math.round(viewportWidth * 0.023, 2);
    } else if (viewportWidth >= 1100) {
        selector = Math.round(viewportWidth * 0.024, 2);
    } else if (viewportWidth >= 1050) {
        selector = Math.round(viewportWidth * 0.025, 2);
    } else if (viewportWidth >= 1000) {
        selector = Math.round(viewportWidth * 0.026, 2);
    } else if (viewportWidth >= 900) {
        selector = Math.round(viewportWidth * 0.027, 2);
    } else if (viewportWidth >= 850) {
        selector = Math.round(viewportWidth * 0.029, 2);
    } else if (viewportWidth >= 800) {
        selector = Math.round(viewportWidth * 0.031, 2);
    } else if (viewportWidth >= 750) {
        selector = Math.round(viewportWidth * 0.032, 2);
    } else if (viewportWidth >= 700) {
        selector = Math.round(viewportWidth * 0.034, 2);
    } else if (viewportWidth >= 650) {
        selector = Math.round(viewportWidth * 0.036, 2);
    } else if (viewportWidth >= 600) {
        selector = Math.round(viewportWidth * 0.037, 2);
    } else if (viewportWidth >= 550) {
        selector = Math.round(viewportWidth * 0.04, 2);
    } else if (viewportWidth >= 500) {
        selector = Math.round(viewportWidth * 0.044, 2);
    } else if (viewportWidth >= 450) {
        selector = Math.round(viewportWidth * 0.047, 2);
    } else if (viewportWidth >= 400) {
        selector = Math.round(viewportWidth * 0.052, 2);
    } else if (viewportWidth >= 350) {
        selector = Math.round(viewportWidth * 0.058, 2);
    } else if (viewportWidth >= 300) {
        selector = Math.round(viewportWidth * 0.064, 2);
    } else {
        /** Super small viewport */
        selector = Math.round(viewportWidth * 0.07, 2);
    };
    return selector + selectorProperties;
};

/**
 * Infinite linear translation animation.
 *
 * - Combined with other factors, allows an element to seamlessly
 * translate across the screen.
 * - Used for the logo slider.
 *
 * !!! The middle percentage needs to be adjusted based
 * on the number of elements inside the slider !!!
 * - Once you get the value correct so the last part of the element
 * aligns with the first part of the next, the rest will align perfectly.
 *
 * @param {String} viewportType viewport classification type
 * @return {Keyframe} CSS keyframes for infinite linear translation animation
 */
export const infiniteLinearTranslate = (viewportType) => keyframes`
  0% {
    transform: translateX(100vw);
  }
  ${handleKeyframeSelector(viewportType)}
  100% {
    transform: translateX(-100%);
  }
`;

// TRY styled-components offset -1, 0 and 1 keyframes!!!
