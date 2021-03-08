import { hot } from "react-hot-loader";
import React, { useEffect } from "react";
import Auth0ProviderWithHistory from "./auth/auth0ProviderWithHistory";
import PropTypes from "prop-types";
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import { throttle } from "lodash";
import { connect } from "react-redux";

import ProtectedRoute from "./auth/ProtectedRoute";

/** React Redux */
import {
    handleViewportChange,
} from "./thunks/viewportThunks";
import {
    getSidebarNavState,
} from "./selectors/viewportSelectors";

/** React Components */
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Store from "./pages/Store";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Legal from "./pages/Legal";
import Article from "./pages/Article";
import Account from "./pages/Account";
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
const App = ({ handleViewportChange, sidebarNav }) => {
    /**
     * useEffect used to add an event listener to handle window resizing event
     * for entire application, regardless of the current page.
     */
    useEffect(() => {
        let isMounted = true;
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

        if (isMounted) {
            /**
             * Add the event listener and attach lodash throttle delay,
             * so that the function is not continuously called during
             * a window resize.
             */
            window.addEventListener("resize", throttle(handleResize, 500));

            /**
             * Call Handler immediately to update the initial window size
             * in state.
             */
            handleResize();
        }

        /**
         * Clean-up to remove the event listener.
         */
        return () => {
            window.removeEventListener("resize", throttle(handleResize, 500));
            isMounted = false;
        };
    }, []);

    return (
        <Router>
            <Auth0ProviderWithHistory>
                <ScrollToTop>
                    <S.Container sidenav={sidebarNav.isActive}>
                        <SidebarNav />
                        <Switch>
                            <Route path="/" component={Home} exact />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} />
                            <Route path="/blog" component={Blog} exact />
                            <Route path="/store" component={Store} />
                            <Route path="/privacy" component={Privacy} />
                            <Route path="/cookies" component={Cookies} />
                            <Route path="/legal" component={Legal} />
                            <Route
                                path="/blog/:path"
                                component={Article} />
                            <ProtectedRoute
                                path="/account"
                                component={Account} />
                            <Route render={(props) => (
                                <NotFound {...props} item={"page"} />
                            )}
                            />
                        </Switch>
                        <Footer />
                    </S.Container >
                </ScrollToTop>
            </Auth0ProviderWithHistory>
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
    /**
     * The sidebarNav object which contains flag to indicate
     * if the sidebar nav is active.
     */
    sidebarNav: PropTypes.object,
};

/**
 * Assign props using Redux selectors
 * to connect the Component to the Redux store.
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    sidebarNav: getSidebarNavState(state),
});

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

export default connect(mapStateToProps, mapDispatchToProps)(hot(module)(App));
