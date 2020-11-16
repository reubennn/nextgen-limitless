/**
 * Viewport Redux Actions.
 *
 * Redux Actions containing payloads of information to send
 * data from React App to the Redux store.
 */

/**
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
* Redux Actions and Action Creators
* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
/**
* Sets the sidebar nav status.
*/
export const SET_SIDEBAR_NAV_STATUS = "SET_SIDEBAR_NAV_STATUS";
export const setSidebarNavStatus = (status) => ({
    type: SET_SIDEBAR_NAV_STATUS,
    payload: { status },
});

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~ Thunk Actions ~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
* Sets the viewport dimensions using the payload.
*/
export const SET_VIEWPORT_DIMENSIONS = "SET_VIEWPORT_DIMENSIONS";
export const setViewportDimensions = (dimensions) => ({
    type: SET_VIEWPORT_DIMENSIONS,
    payload: { dimensions },
});

/**
* Sets the viewport size using the payload.
*/
export const SET_VIEWPORT_SIZE = "SET_VIEWPORT_SIZE";
export const setViewportSize = (size) => ({
    type: SET_VIEWPORT_SIZE,
    payload: { size },
});

/**
* Sets the viewport type classification.
*/
export const SET_VIEWPORT_TYPE = "SET_VIEWPORT_TYPE";
export const setViewportType = (type) => ({
    type: SET_VIEWPORT_TYPE,
    payload: { type },
});
