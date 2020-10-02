import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import styled from "styled-components";
import HomePage from "./pages/HomePage";

/**
 * Styled-Component
 */
const AppContainer = styled.div.attrs({
    className: "App",
})`
    margin: 1rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    width: 100vw;
    height: 100vh;
`;

/**
 * React Router => render HomePage when url is a "/"
 * "/" would match every single route,
 * So Route "exact" tells React Router needs to match the url exactly
 */
class App extends Component {
    render() {
        return (
            <Router>
                <AppContainer>
                    <Route
                        path="/"
                        component={HomePage}
                        exact/>
                </AppContainer >
            </Router>
        );
    }
}

export default hot(module)(App);
