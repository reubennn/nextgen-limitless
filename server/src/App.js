import { hot } from "react-hot-loader";
import React from "react";

import Homepage from "./components/Homepage";

/**
 * The main React App; parent of all other Components.
 *
 * @return {Component} home page for a website
 */
const App = () => (
    <Homepage />
);

export default process.env.NODE_ENV !== "production" ? hot(module)(App) : App;
