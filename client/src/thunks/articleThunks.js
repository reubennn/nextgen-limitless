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
        const articles = await response.json();

        dispatch(fetchArticlesSuccess(articles)); // Update the articles list
    } catch (e) {
        dispatch(fetchArticlesFailure());
        dispatch(displayAlert(e));
    }
};

export const displayAlert = (text) => () => {
    console.log(text);
};
