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
 * Redux Actions and Action Creators
 */
export const SET_LOADING = "SET_LOADING";
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
});

export const RESET_LOADING = "RESET_LOADING";
export const resetLoading = () => ({
    type: RESET_LOADING,
});

/**
 * Thunk Actions
 */
export const LOAD_ARTICLES_IN_PROGRESS = "LOAD_ARTICLES_IN_PROGRESS";
export const loadArticlesInProgress = () => ({
    type: LOAD_ARTICLES_IN_PROGRESS,
});

export const FETCH_ARTICLES_SUCCESS = "FETCH_ARTICLES_SUCCESS";
export const fetchArticlesSuccess = (articles) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles },
});

export const FETCH_ARTICLES_FAILURE = "FETCH_ARTICLES_FAILURE";
export const fetchArticlesFailure = (code) => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { code },
});
