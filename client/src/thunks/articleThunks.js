/**
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
    loadArticlesInProgress,
    fetchArticlesSuccess,
    fetchArticlesFailure,
} from "../actions/articleActions";

/**
 * Fetches the articles list from the server API
 *
 * @return {Function} async function with dispatch as the argument
 */
export const fetchAllArticles = () => async (dispatch, getState) => {
    try {
        /**
         * Dispatch Redux Action to modify loading state progress
         */
        dispatch(loadArticlesInProgress());
        const response = await fetch("/api/articles");

        /**
         * If response is 200 OK, dispatch Redux Action for fetch success,
         * with the articles as the payload.
         *
         * Otherwise, an error occurred, so dispatch the Redux Action for
         * fetch failure, with the response status as the payload.
         */
        if (response.status === 200) {
            const articles = await response.json();
            // Update the articles list
            dispatch(fetchArticlesSuccess(articles));
        } else {
            dispatch(fetchArticlesFailure(response.status));
        }
    } catch (e) {
        /**
         * An error occurred, so dispatch the Redux Action for
         * fetch failure, with the response status as the payload.
         */
        dispatch(fetchArticlesFailure());
        console.error(e);
    }
};
