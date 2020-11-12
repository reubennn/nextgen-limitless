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
 * Gets the load status.
 * Is populated before and after an API server request is initiated
 *
 * @param {*} store Redux store reference
 * @return {Object} the loadStatus for fetching data using API server request
 */
export const getLoadStatus = (store) => store.articles.loadStatus;
