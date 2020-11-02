import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

/**
 * React Component to push scrollbar to top of page when
 * navigating to a new page with React Router.
 *
 * This Component needs to be placed as a child of the React Router Component.
 *
 * @return {Component} wrapper for React Router to push scrollbar to top
 */
const ScrollToTop = ({ history, children }) => {
    /**
     * useEffect to track any URL change with React Router.
     */
    useEffect(() => {
        /**
         * Check for changes in the current history location.
         */
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });

        /**
         * useEffect clean-up:
         * Once the page has scrolled to the top, we can stop listening.
         */
        return () => {
            unlisten();
        };
    }, []);

    return (
        <Fragment>
            {children}
        </Fragment>
    );
};

ScrollToTop.propTypes = {
    /**
     * history API used when navigating to other pages.
     */
    history: PropTypes.object,
    /**
     * React Router children Components.
     */
    children: PropTypes.object,
};

/*
 * Wrap ScrollToTop in withRouter function
 * to give component access to history prop.
 */
export default withRouter(ScrollToTop);
