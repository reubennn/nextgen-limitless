import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

/**
 * React Component to push scrollbar to top of page when
 * navigating to a new page with React Router.
 *
 * This Component needs to be placed as a child of the React Router Component.
 *
 * @return {Component} wrapper for React Router to push scrollbar to top
 */
const ScrollToTop = ({ children }) => {
    /** Get the history object from React Router */
    const history = useHistory();

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
        <>
            {children}
        </>
    );
};

ScrollToTop.propTypes = {
    /**
     * React Router children Components.
     */
    children: PropTypes.object,
};

/*
 * Wrap ScrollToTop in withRouter function
 * to give component access to history prop.
 */
export default ScrollToTop;
