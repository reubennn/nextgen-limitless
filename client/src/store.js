import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { articles } from "./reducers/articleReducers";

const reducers = {
    articles,
};

/** Set up Redux persist configuration */
const persistConfig = {
    key: "root",
    storage, // Defaults to local storage on the web
    stateReconciler: autoMergeLevel2,
    /* ^ Tells Redux persist how to reconcile initial
    * and stored states of the Application
    * - as in how deep should it go
    */
};

/** Put Reducers into a form which we can pass to the createStore function */
const rootReducer = combineReducers(reducers);

/**
 * persistConfig => Object which tells Redux Persist how to save and
 * where to store the applications data
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () =>
    createStore(
        persistedReducer,
        /** Connect App to Redux Chrome Extension */
        composeWithDevTools(
            applyMiddleware(thunk),
        ),
    );
