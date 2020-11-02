import React from "react";
import ReactDOM from "react-dom";
import "whatwg-fetch"; // Adds fetch support for IE browser

/** React Redux **/
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/lib/integration/react";
import { configureStore } from "./store";

/** Import React App **/
import App from "./App";

/** Import stylesheets **/
import "./styles/normalize.scss";
import "./styles/reset.local.scss";
import "./index.scss";

/**
 * Set up the Redux store and persistor
 */
const store = configureStore();
const persistor = persistStore(store);

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor} >
            <App />
        </PersistGate>
    </Provider >,
    document.getElementById("root"),
);
