import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import styled from "styled-components";

// React Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesList from "./pages/ArticlesList";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components/NavBar";

/**
 * Styled-Components
 */
const S = {}; // Differentiate styled-components

S.AppContainer = styled.div.attrs({
    className: "App",
})`
    margin: 1rem;
    color: #222222;
    width: auto;
    height: 100vh;
    /* max-width: 100%; */
    margin: 0;
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
                <S.AppContainer>
                    <NavBar />
                    <div id="page-body">
                        <Route path="/" component={HomePage} exact />
                        <Route path="/about" component={AboutPage} />
                        <Route path="/articles-list" component={ArticlesList} />
                        <Route path="/article" component={ArticlePage} />
                    </div>
                </S.AppContainer >
            </Router>
        );
    }
}

export default hot(module)(App);
