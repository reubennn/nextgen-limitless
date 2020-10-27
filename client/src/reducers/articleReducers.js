import {
    // ADD_COMMENT,
    SET_LOADING,
    LOAD_ARTICLES_IN_PROGRESS,
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLES_FAILURE,
} from "../actions/articleActions";

const initialState = {
    loading: true,
    loadingFailed: false,
    list: [], // Articles list
};

/** A single article takes the form:
 * article = {
 *     _id: null,
 *     name: name,
 *     title: null,
 *     content: [],
 *     upvotes: null,
 *     comments: [],
 * }
 */

export const articles = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // case (ADD_COMMENT): {
        //     /** TO DO */
        //     const { article, comment } = payload;
        //     return {
        //         ...state, // Use spread operator to return the rest of state
        //         articles: state.articles.map((article) => {
        //             if (article.name === article.name) {

        //             }
        //         })
        //     };
        // }
        case (SET_LOADING): {
            const { loading } = payload;
            return {
                ...state,
                loading,
            };
        }
        case (LOAD_ARTICLES_SUCCESS): {
            const { articles } = payload;
            return {
                ...state,
                loading: false,
                list: articles,
            };
        }
        case (LOAD_ARTICLES_IN_PROGRESS): {
            return {
                ...state,
                loading: true,
            };
        }
        case (LOAD_ARTICLES_FAILURE): {
            return {
                ...state,
                loading: false,
                loadingFailed: true,
            };
        }
        default: {
            /** Reducer gets called when any Action is triggered in the App
             * If switch block makes it to default case, then it is an action
             * that we aren't really concerned about so we can simple return the
             * state as it is
             */
            return state;
        }
    }
};
