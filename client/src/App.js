import { hot } from "react-hot-loader";
import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import styled from "styled-components";

// React Components
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticlePage from "./pages/ArticlePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import ScrollToTop from "./components/ScrollToTop";

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
    min-height: 100vh;
    margin: 0;

    /* Ensures the Footer does not go above the bottom of the screen */
    display: flex;
    flex-direction: column;
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
                <ScrollToTop>
                    <S.AppContainer>
                        <NavBar />
                        <div id="page-body">
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
                        </div>
                        <Footer />
                    </S.AppContainer >
                </ScrollToTop>
            </Router>
        );
    }
}

export default hot(module)(App);
