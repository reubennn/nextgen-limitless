import { keyframes, css } from "styled-components";
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

/**
 * Handler function to inject the correct code into the infinite
 * linear translate animation keyframes based on the slider offset position.
 *
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @return {String} keyframes code
 */
const infiniteTranslationKeyframes = (offset) => {
    {
        switch (offset) {
            case (-1): {
                return `0% {
                transform: translateX(-100%);
            }
            100% {
                transform: translateX(0%);
            }`;
            }
            case (0): {
                return `0% {
                transform: translateX(0%);
            }
            100% {
                transform: translateX(100%);
            }`;
            }
            case (1): {
                return `0% {
                transform: translateX(100%);
            }
            100% {
                transform: translateX(200%);
            }`;
            }
        };
    }
};

/**
 * Infinite linear translation animation.
 *
 * - Combined with other factors, allows an element to seamlessly
 * translate across the screen.
 * - Used for the logo slider.
 *
 * @param {Number} offset position of the slider (-1, 0 or 1)
 * @return {Keyframe} CSS keyframes for infinite linear translation animation
 */
export const infiniteLinearTranslate = (offset) => keyframes`
    ${infiniteTranslationKeyframes(offset)}
`;

// TRY styled-components offset -1, 0 and 1 keyframes!!!
