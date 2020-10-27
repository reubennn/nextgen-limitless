// export const ADD_COMMENT = "ADD_COMMENT";
// export const addComment = (article, comment) => ({
//     type: ADD_COMMENT,
//     payload: { article, comment },
// });

// Thunk Actions
export const SET_LOADING = "SET_LOADING";
export const setLoading = (loading) => ({
    type: SET_LOADING,
    payload: { loading },
});

// Thunk Actions
export const LOAD_ARTICLES_IN_PROGRESS = "LOAD_ARTICLES_IN_PROGRESS";
export const loadArticlesInProgress = () => ({
    type: LOAD_ARTICLES_IN_PROGRESS,
});

export const LOAD_ARTICLES_SUCCESS = "LOAD_ARTICLES_SUCCESS";
export const fetchArticlesSuccess = (articles) => ({
    type: LOAD_ARTICLES_SUCCESS,
    payload: { articles },
});

export const LOAD_ARTICLES_FAILURE = "LOAD_ARTICLES_FAILURE";
export const fetchArticlesFailure = () => ({
    type: LOAD_ARTICLES_FAILURE,
});
