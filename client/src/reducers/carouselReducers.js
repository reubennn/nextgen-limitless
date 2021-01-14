/**
 * Carousel Component React Hook Reducers
 *
 * Reducers modify/manipulate carousel state depending on
 * the action received.
 */

import {
    MOVE_CAROUSEL,
    MOVE_TO_NEXT,
    MOVE_TO_PREV,
    UPDATE_CURRENT,
    SWITCH_CURRENT,
} from "../actions/carouselActions";

const getPrevious = (length, current) => {
    return (current - 1) % length;
};

const getNext = (length, current) => {
    return (current + 1) % length;
};

/**
 * Reducer functions for the carousel reducers.
 *
 * @param {*} state current Carousel state
 * @param {String} action to determine what to do to the state
 * @return {*} new state of the Carousel
 */
export const carouselReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case (MOVE_CAROUSEL): {
            const { desired } = payload;
            return {
                ...state,
                desired,
            };
        }
        case (MOVE_TO_NEXT): {
            return {
                ...state,
                desired: getNext(state.length, state.current),
            };
        }
        case (MOVE_TO_PREV): {
            return {
                ...state,
                desired: getPrevious(state.length, state.current),
            };
        }
        case (UPDATE_CURRENT): {
            return {
                ...state,
                current: state.desired,
            };
        }
        case (SWITCH_CURRENT): {
            const { newPos } = payload;
            return {
                ...state,
                current: newPos,
            };
        }
        default:
            return state;
    }
};
