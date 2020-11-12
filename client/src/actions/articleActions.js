/**
 * Redux Actions containing payloads of information to send
 * data from React App to the Redux store.
 */

/**
 * TO-DO
 */
// export const ADD_COMMENT = "ADD_COMMENT";
// export const addComment = (article, comment) => ({
//     type: ADD_COMMENT,
//     payload: { article, comment },
// });

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * Redux Actions and Action Creators
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Sets the loading status using the payload.
 */
export const SET_LOADING = "SET_LOADING";
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
});

/**
 * Resets the loading status.
 */
export const RESET_LOADING = "RESET_LOADING";
export const resetLoading = () => ({
    type: RESET_LOADING,
});

/**
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~ Thunk Actions ~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Called before fetching data.
* - Sets flag indicating that fetching data is under progress.
*/
export const LOAD_ARTICLES_IN_PROGRESS = "LOAD_ARTICLES_IN_PROGRESS";
export const loadArticlesInProgress = () => ({
    type: LOAD_ARTICLES_IN_PROGRESS,
});

/**
* Called when fetching data is successful.
* - Payload contains the fetched data.
*/
export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles },
});

/**
* Called when fetching data has failed.
* - Payload contains the error code.
*/
export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const fetchArticlesFailure = (code) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { code },
});
