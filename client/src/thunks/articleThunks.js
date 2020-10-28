import {
    loadArticlesInProgress,
    fetchArticlesSuccess,
    fetchArticlesFailure,
} from "../actions/articleActions";

/**
 * Fetches the articles list from the server API
 * @return {Function} async function with dispatch as the argument
 */
export const fetchAllArticles = () => async (dispatch, getState) => {
    try {
        dispatch(loadArticlesInProgress()); // Update Loading state
        const response = await fetch("/api/articles");
        // const articles = await response.json();

        if (response.status === 200) {
            const articles = await response.json();
            // Update the articles list
            dispatch(fetchArticlesSuccess(articles));
        } else {
            dispatch(fetchArticlesFailure(response.status));
        }
    } catch (e) {
        dispatch(fetchArticlesFailure());
        dispatch(clog(e));
    }
};

export const clog = (text) => () => {
    console.log(text);
};
