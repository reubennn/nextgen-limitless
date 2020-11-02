/**
 * Redux Reducers to change React App state depending on
 * the action received.
 */

import {
    // ADD_COMMENT,
    SET_LOADING,
    RESET_LOADING,
    LOAD_ARTICLES_IN_PROGRESS,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
} from "../actions/articleActions";

const initialState = {
    /**
     * Loading status if data needs to be loaded from the server API.
     */
    loading: true,
    /**
     * Load status to notify if fetching data from the server API has failed,
     * and if so, populating the code if an error code has been provided.
     */
    loadStatus: {
        failed: false,
        code: null,
    },
    /**
     * The articles list.
     * Note: an article has the following properties:
     *      @param {ObjectId} _id MongoDB ObjectId
     *      @param {String} name article name
     *      @param {String} title article title
     *      @param {String} author article author
     *      @param {Array} main main content, each index is a paragraph or image
     *      @param {Number} upvotes article votes
     *      @param {Array} comments article comments
     *      @param {Array} categories categories article content addresses
     */
    list: [],
};

/**
 * Reducer functions for the articles reducer.
 *
 * @param {*} state Redux store state
 * @param {String} action Redux Action to determine what to do to the state
 * @return {*} new state of the React App
 */
export const articles = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        // TODO
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
        /**
         * Sets the loading state depending on the payload.
         */
        case (SET_LOADING): {
            const { loading } = payload;
            return {
                ...state,
                loading,
            };
        }
        /**
         * Resets the loading state.
         * For use when loading a new page, or reloading the current one.
         */
        case (RESET_LOADING): {
            return {
                ...state,
                loading: true,
                loadStatus: {
                    failed: false,
                    code: null,
                },
            };
        }
        /**
         * Function performed when fetching data from server API
         * has been successful.
         * - The payload contains the fetched data.
         */
        case (FETCH_ARTICLES_SUCCESS): {
            const { articles } = payload;
            return {
                ...state,
                loading: false,
                list: articles,
            };
        }
        /**
         * Function performed during fetching data from server API.
         * - Simply modifies the loading state.
         */
        case (LOAD_ARTICLES_IN_PROGRESS): {
            return {
                ...state,
                loading: true,
            };
        }
        /**
         * Function performed if fetching data from server API
         * has failed.
         * - loadStatus state sets failed property to true,
         * and code property is populated with the error code if provided.
         */
        case (FETCH_ARTICLES_FAILURE): {
            const { code } = payload;
            const codeProvided = (() => {
                if (code === undefined) {
                    return false;
                }
                return true;
            })();
            return {
                ...state,
                loading: false,
                loadStatus: {
                    failed: true,
                    code: codeProvided ? code : null,
                },
            };
        }
        default: {
            /**
             * Reducer gets called when any Action is triggered in the App
             * If switch block makes it to default case, then it is an action
             * that we aren't really concerned about so we can simply return the
             * state as it is
             */
            return state;
        }
    }
};
