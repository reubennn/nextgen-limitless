/**
 * Redux Reducers to change React App state depending on
 * the action received.
 */

import {
    SET_LOADING,
    RESET_LOADING,
    LOAD_ARTICLES_IN_PROGRESS,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE,
} from "../actions/articleActions";

const initialState = {
    /**
     * Load status of the content to be fetched from database.
     *
     * @property {Boolean} loading loading status for fetching data
     *                               from the server API.
     * @property {Boolean} failed flag indicating if fetching data from the
     *                              server API has failed.
     * @property {Number} code if loading failed, the error code if provided.
     */
    loadStatus: {
        loaded: false,
        loading: true,
        failed: false,
        code: null,
    },
    /**
     * The articles list.
     * Note: an article has the following properties:
     * @property {ObjectId} _id MongoDB ObjectId
     * @property {String} name article name
     * @property {String} title article title
     * @property {String} author article author
     * @property {Array} main main content, each index is a paragraph or image
     * @property {Number} upvotes article votes
     * @property {Array} comments article comments
     * @property {Array} categories categories article content addresses
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
        /**
         * Sets the loading state depending on the payload.
         */
        case (SET_LOADING): {
            const { loading } = payload;
            return {
                ...state,
                loadStatus: {
                    ...state.loadStatus,
                    loading,
                },
            };
        }
        /**
         * Resets the loading state.
         * For use when loading a new page, or reloading the current one.
         */
        case (RESET_LOADING): {
            return {
                ...state,
                loadStatus: {
                    ...state.loadStatus,
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
                loadStatus: {
                    ...state.loadStatus,
                    loaded: true,
                    loading: false,
                },
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
                loadStatus: {
                    ...state.loadStatus,
                    loaded: false,
                    loading: true,
                },
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
            /**
             * Checks if a code was provided in the payload.
             * - Immediately invokes the function to set the codeProvided const.
             */
            const codeProvided = (() => {
                if (code === undefined) {
                    return false;
                }
                return true;
            })();
            return {
                ...state,
                loadStatus: {
                    loading: false,
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
