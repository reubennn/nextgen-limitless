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
    setSidebarNavStatus,
} from "../actions/viewportActions";

import media from "../data/media";

/**
 * Function which handles any viewport resizing.
 *
 * @param {Object} viewport the viewport dimensions
 * @return {Function} async function with dispatch as the argument
 */
export const handleViewportChange = (viewport) => (
    async (dispatch, getState) => {
        /**
         * Dispatch Redux Action to set the viewport dimensions
         */
        dispatch(setViewportDimensions(viewport.dimensions));

        const viewportWidth = viewport.dimensions.width;
        /**
         * Create default object with all size classifications true or false.
         * - Used to reset all size state values
         */
        const trueDefaults = {
            superSmall: true,
            extraSmall: true,
            small: true,
            medium: true,
            large: true,
            extraLarge: true,
            superLarge: true,
        };
        const falseDefaults = {
            superSmall: false,
            extraSmall: false,
            small: false,
            medium: false,
            large: false,
            extraLarge: false,
            superLarge: false,
        };

        /**
         * Only reset the sidebar nav status if viewport size is greater
         * than medium breakpoint.
         */
        if (viewportWidth >= media.breakpoints.superLarge) {
            console.log("Super Large viewport 1920px (horizontal) or greater");
            dispatch(setSidebarNavStatus(false));
            dispatch(setViewportType("super-large"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    superLarge: true,
                    greaterThan: {
                        ...trueDefaults,
                        superLarge: false,
                    },
                    lessThan: {
                        ...falseDefaults,
                    },
                },
            }));
        } else if (viewportWidth >= media.breakpoints.extraLarge) {
            console.log("Extra Large viewport 1366px (horizontal) or greater");
            dispatch(setSidebarNavStatus(false));
            dispatch(setViewportType("extra-large"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    extraLarge: true,
                    greaterThan: {
                        ...trueDefaults,
                        extraLarge: false,
                        superLarge: false,
                    },
                    lessThan: {
                        ...falseDefaults,
                        superLarge: true,
                    },
                },
            }));
        } else if (viewportWidth >= media.breakpoints.large) {
            console.log("Large viewport 1024px (horizontal) or greater");
            dispatch(setSidebarNavStatus(false));
            dispatch(setViewportType("large"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    large: true,
                    greaterThan: {
                        ...trueDefaults,
                        large: false,
                        extraLarge: false,
                        superLarge: false,
                    },
                    lessThan: {
                        ...falseDefaults,
                        extraLarge: true,
                        superLarge: true,
                    },
                },
            }));
        } else if (viewportWidth >= media.breakpoints.medium) {
            console.log("Medium viewport 768px (horizontal) or greater");
            dispatch(setSidebarNavStatus(false));
            dispatch(setViewportType("medium"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    medium: true,
                    greaterThan: {
                        ...falseDefaults,
                        superSmall: true,
                        extraSmall: true,
                        small: true,
                    },
                    lessThan: {
                        ...falseDefaults,
                        large: true,
                        extraLarge: true,
                        superLarge: true,
                    },
                },
            }));
        } else if (viewportWidth >= media.breakpoints.small) {
            console.log("Small viewport 480px (horizontal) or greater");
            dispatch(setViewportType("small"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    small: true,
                    greaterThan: {
                        ...falseDefaults,
                        superSmall: true,
                        extraSmall: true,
                    },
                    lessThan: {
                        ...trueDefaults,
                        superSmall: false,
                        extraSmall: false,
                        small: false,
                    },
                },
            }));
        } else if (viewportWidth >= media.breakpoints.extraSmall) {
            console.log("Extra Small viewport 360px (horizontal) or greater");
            dispatch(setViewportType("extra-small"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    extraSmall: true,
                    greaterThan: {
                        ...falseDefaults,
                        superSmall: true,
                    },
                    lessThan: {
                        ...trueDefaults,
                        superSmall: false,
                        extraSmall: false,
                    },
                },
            }));
        } else {
            console.log("Super Small viewport less than 360px (horizontal)");
            dispatch(setViewportType("super-small"));
            dispatch(setViewportSize({
                is: {
                    ...falseDefaults,
                    superSmall: true,
                    greaterThan: {
                        ...falseDefaults,
                    },
                    lessThan: {
                        ...trueDefaults,
                        superSmall: false,
                    },
                },
            }));
        };
    });
