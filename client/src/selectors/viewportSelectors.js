/**
 * Viewport Redux Selectors.
 *
 * Redux Selectors to access viewport state data from the Redux store.
 */

/**
 * Gets the viewport size classification.
 *
 * @param {*} store Redux store reference
 * @return {Object} the viewport size classification
 */
export const getViewportSize = (store) => store.viewport.size;

/**
 * Gets the viewport dimensions.
 *
 * @param {*} store Redux store reference
 * @return {Object} the viewport dimensions
 */
export const getViewportDimensions = (store) => store.viewport.dimensions;

/**
 * Gets the viewport type classification.
 *
 * @param {*} store Redux store reference
 * @return {Object} the viewport dimensions
 */
export const getViewportType = (store) => store.viewport.type;

/**
 * Gets the sidebar navigation status.
 *
 * @param {*} store Redux store reference
 * @return {Object} the sidebar nav status
 */
export const getSidebarNavState = (store) => store.viewport.sidebarNav;

/**
 * Gets the viewport atTop flag status.
 *
 * @param {*} store Redux store reference
 * @return {Object} the atTop flag status
 */
export const getAtTopState = (store) => store.viewport.atTop;
