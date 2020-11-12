/**
 * Viewport Redux Thunks.
 *
 * Middleware to handle viewport initial size and resizing.
 *
 * Redux Thunks are middleware containing async logic to interact with the
 * Redux Store by returning a function instead of an action which can
 * consequently trigger the dispatch of Redux Actions.
 *
 * - Used to perform subroutines, such as an API call,
 * then dispatch (return) other Redux Actions.
 * - These are particularly useful to dispatch actions asynchronously
 * and resolve promises.
 */

import {
    setViewportSize,
    setViewportDimensions,
    setViewportType,
} from "../actions/viewportActions";

import media from "../data/media";

export const handleViewportChange = (viewport) => (
    async (dispatch, getState) => {
        /**
         * Dispatch Redux Action to set the viewport dimensions
         */
        dispatch(setViewportDimensions(viewport.dimensions));

        const viewportWidth = viewport.dimensions.width;
        /**
         * Create default size Object with all sizes false.
         * - Used to reset all size state values
         */
        const defaults = {
            superSmall: false,
            extraSmall: false,
            small: false,
            medium: false,
            large: false,
            extraLarge: false,
            superLarge: false,
        };

        if (viewportWidth >= media.breakpoints.superLarge) {
            console.log("Super Large viewport 1920px (horizontal) or greater");
            dispatch(setViewportSize({
                ...defaults,
                is: {
                    superLarge: true,
                },
            }));
            dispatch(setViewportType("super-large"));
        } else if (viewportWidth >= media.breakpoints.extraLarge) {
            console.log("Extra Large viewport 1366px (horizontal) or greater");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    extraLarge: true,
                },
            }));
            dispatch(setViewportType("extra-large"));
        } else if (viewportWidth >= media.breakpoints.large) {
            console.log("Large viewport 1024px (horizontal) or greater");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    large: true,
                },
            }));
            dispatch(setViewportType("large"));
        } else if (viewportWidth >= media.breakpoints.medium) {
            console.log("Medium viewport 768px (horizontal) or greater");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    medium: true,
                },
            }));
            dispatch(setViewportType("medium"));
        } else if (viewportWidth >= media.breakpoints.small) {
            console.log("Small viewport 480px (horizontal) or greater");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    small: true,
                },
            }));
            dispatch(setViewportType("small"));
        } else if (viewportWidth >= media.breakpoints.extraSmall) {
            console.log("Extra Small viewport 360px (horizontal) or greater");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    extraSmall: true,
                },
            }));
            dispatch(setViewportType("extra-small"));
        } else {
            console.log("Super Small viewport less than 360px (horizontal)");
            dispatch(setViewportSize({
                is: {
                    ...defaults,
                    superSmall: true,
                },
            }));
            dispatch(setViewportType("super-small"));
        };
    });
