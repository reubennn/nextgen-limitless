/**
 * Carousel Component React Hook Actions
 *
 * Actions contain payloads of information to send
 * data to the React Hook Reducer.
 */

/**
* Sets the desired position for the Carousel to move to.
*/
export const MOVE_CAROUSEL = "MOVE_CAROUSEL";
export const moveCarousel = (desired) => ({
    type: MOVE_CAROUSEL,
    payload: { desired },
});

/**
* Moves the Carousel to the next slide.
*/
export const MOVE_TO_NEXT = "MOVE_TO_NEXT";
export const moveToNext = () => ({
    type: MOVE_TO_NEXT,
});

/**
* Moves the Carousel to the previous slide.
*/
export const MOVE_TO_PREV = "MOVE_TO_PREV";
export const moveToPrev = () => ({
    type: MOVE_TO_PREV,
});

/**
* Updates the current position of the Carousel with the
* desired position.
*/
export const UPDATE_CURRENT = "UPDATE_CURRENT";
export const updateCurrent = () => ({
    type: UPDATE_CURRENT,
});

/**
* Switches the current position to the new position.
* - When the Carousel reaches a buffer element, it needs to
* switch to the position that the buffer represents.
*/
export const SWITCH_CURRENT = "SWITCH_CURRENT";
export const switchCurrent = (newPos) => ({
    type: SWITCH_CURRENT,
    payload: { newPos },
});
