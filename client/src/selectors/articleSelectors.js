/**
 * Redux Selectors to access state data from the Redux store.
 */

/**
 * Gets the articles list state
 *
 * @param {*} store Redux store reference
 * @return {Array} the articles list
 */
export const getArticlesList = (store) => store.articles.list;

/**
 * Gets the loading state
 *
 * @param {*} store Redux store reference
 * @return {Boolean} the loading state
 */
export const getLoadingState = (store) => store.articles.loading;

/**
 * Gets the load status.
 * Is populated after an API server request
 *
 * @param {*} store Redux store reference
 * @return {Object} the loadStatus of an API server request
 */
export const getLoadStatusState = (store) => store.articles.loadStatus;
