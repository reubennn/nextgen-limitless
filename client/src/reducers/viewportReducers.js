/**
 * Viewport Redux Reducers.
 *
 * Redux Reducers to modify/manipulate viewport state depending on
 * the action received.
 *
 * - Used to implement a responsive website.
 */

import {
    SET_VIEWPORT_DIMENSIONS,
    SET_VIEWPORT_SIZE,
    SET_VIEWPORT_TYPE,
    SET_SIDEBAR_NAV_STATUS,
    SET_AT_TOP,
} from "../actions/viewportActions";

const initialState = {
    /**
     * The current viewport window size classification.
     *
     * Mobile-first design approach: default to extra small,
     * which is the media breakpoint for older and mid-range phones.
     *
     * @property {Object} is makes property calls simpler to understand
     *      - @property {Boolean} superSmall super small classification
     *      - @property {Boolean} extraSmall extra small classification
     *      - @property {Boolean} small small classification
     *      - @property {Boolean} medium medium classification
     *      - @property {Boolean} large large classification
     *      - @property {Boolean} extraLarge extra large classification
     *
     * @property {Object} greaterThan flags indicate viewport is greater than
     * @property {Object} lessThan flags indicate viewport is less than
     */
    size: {
        is: {
            superSmall: false,
            extraSmall: true,
            small: false,
            medium: false,
            large: false,
            extraLarge: false,
            superLarge: false,

            greaterThan: {
                superSmall: false,
                extraSmall: false,
                small: true,
                medium: true,
                large: true,
                extraLarge: true,
                superLarge: true,
            },

            lessThan: {
                superSmall: true,
                extraSmall: false,
                small: false,
                medium: false,
                large: false,
                extraLarge: false,
                superLarge: false,
            },
        },
    },
    /**
     * The viewport dimensions.
     *
     * Initialize state with undefined width/height,
     * so server and client renders match.
     * - Important when implementing server-side rendering.
     *
     * @property {Number} width viewport width in px
     * @property {Number} height viewport height in px
     */
    dimensions: {
        width: undefined,
        height: undefined,
    },
    /**
     * The current viewport window type classification.
     *
     * Mobile-first design approach: extra-small set as default size.
     *
     * Possible choices:
     * - super-small
     * - extra-small
     * - small
     * - medium
     * - large
     * - extra-large
     * - super-large
     *
     */
    type: "extra-small",
    /**
     * Flag to indicate if the sidebar is active (displayed).
     *
     * @property {Boolean} isActive flag indicating sidebar nav status
     */
    sidebarNav: {
        isActive: false,
    },
    /**
     * Flag to indicate if window is at the top of the page.
     */
    atTop: true,
};

/**
 * Reducer functions for the viewport reducer.
 *
 * @param {*} state Redux store state
 * @param {String} action Redux Action to determine what to do to the state
 * @return {*} new state of the React App
 */
export const viewport = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        /**
         * Sets the viewport window height and width.
         */
        case (SET_VIEWPORT_DIMENSIONS): {
            const { dimensions } = payload;
            return {
                ...state,
                dimensions,
            };
        };
        case (SET_VIEWPORT_SIZE): {
            const { size } = payload;
            return {
                ...state,
                size,
            };
        };
        case (SET_VIEWPORT_TYPE): {
            const { type } = payload;
            return {
                ...state,
                type,
            };
        };
        case (SET_SIDEBAR_NAV_STATUS): {
            const { status } = payload;
            return {
                ...state,
                sidebarNav: {
                    isActive: status,
                },
            };
        };
        case (SET_AT_TOP): {
            const { status } = payload;
            return {
                ...state,
                atTop: status,
            };
        };
        default: {
            /**
             * Reducer gets called when any Action is triggered in the App
             * If switch block makes it to default case, then it is an action
             * that we aren't really concerned about so we can simply return the
             * state as it is
             */
            return state;
        };
    };
};
