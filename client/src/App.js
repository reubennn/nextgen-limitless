import { hot } from "react-hot-loader";
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import styled from "styled-components";

/** React Components */
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

/**
 * Styled-Components
 * - Separate from styles/styled-components.js file
 * as we only need to style the base App.
 */
const S = {}; // Differentiate styled-components

S.AppContainer = styled.div.attrs({
    className: "App",
})`
    margin: 1rem;
    color: #222222;
    width: auto;
    height: 100vh;
    min-height: 100vh;
    margin: 0;

    /* Ensures the Footer does not go above the bottom of the screen */
    display: flex;
    flex-direction: column;
`;

/**
 * The main React App which houses all other Components.
 *
 * React Router => render HomePage when url is a "/":
 * "/" would match every single route, so Route "exact" tells
 * React Router needs to match the url exactly.
 *
 * @return {Component} the React App
 */
const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <S.AppContainer>
                    <Navbar />
                    <main id="page-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact />
                            <Route path="/about" component={AboutPage} />
                            <Route
                                path="/articles-list"
                                component={ArticlesListPage}
                            />
                            <Route
                                path="/article/:name"
                                component={ArticlePage} />
                            <Route render={(props) => (
                                <NotFoundPage {...props} item={"page"} />
                            )}
                            />
                        </Switch>
                    </main>
                    <Footer />
                </S.AppContainer >
            </ScrollToTop>
        </Router>
    );
};

export default hot(module)(App);
