import { hot } from "react-hot-loader";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { debounce } from "lodash";
import { connect } from "react-redux";

/** React Redux */
import {
    handleViewportChange,
} from "./thunks/viewportThunks";

/** React Components */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Article from "./pages/Article";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import SidebarNav from "./components/SidebarNav";

import * as S from "./styles/styled-components/styled";

/**
 * The main React App; parent of all other Components.
 *
 * React Router => render Home when url is a "/":
 * "/" would match every single route, so Route "exact" tells
 * React Router needs to match the url exactly.
 *
 * @return {Component} the React App
 */
const App = ({ handleViewportChange }) => {
    /**
     * useEffect used to add an event listener to handle window resizing event
     * for entire application, regardless of the current page.
     */
    useEffect(() => {
        /**
         * Handler function called during window viewport resize.
         */
        function handleResize() {
            const viewport = {
                dimensions: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                },
            };
            handleViewportChange(viewport);
        }

        /**
         * Add the event listener and attach lodash debounce delay,
         * so that the function is not continuously called during
         * a window resize.
         */
        window.addEventListener("resize", debounce(handleResize, 200));

        /**
         * Call Handler immediately to update the initial window size
         * in state.
         */
        handleResize();

        /**
         * Clean-up to remove the event listener.
         */
        return () => {
            window.removeEventListener("resize", debounce(handleResize, 200));
        };
    }, []);

    return (
        <Router>
            <ScrollToTop>
                <S.Container>
                    <SidebarNav />
                    <Switch>
                        <Route path="/" component={Home} exact />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={Contact} />
                        <Route
                            path="/blog"
                            component={Blog}
                        />
                        <Route
                            path="/article/:name"
                            component={Article} />
                        <Route render={(props) => (
                            <NotFound {...props} item={"page"} />
                        )}
                        />
                    </Switch>
                    <Footer />
                </S.Container >
            </ScrollToTop>
        </Router>
    );
};

App.propTypes = {
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
    /**
     * Redux Thunk function to handle viewport resizing
     * and dispatch Actions to manipulate the Redux store.
     */
    handleViewportChange: PropTypes.func,
};

/**
 * Assign props to dispatch actions to the Redux Store.
 *
 * @param {*} dispatch action to dispatch
 * @return {Function} functions mapped to the Component as props
 */
const mapDispatchToProps = (dispatch) => ({
    handleViewportChange: (viewport) =>
        dispatch(handleViewportChange(viewport)),
});

export default connect(null, mapDispatchToProps)(hot(module)(App));
