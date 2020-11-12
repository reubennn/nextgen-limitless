import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a not found page.
 *
 * When the content is unable to be displayed, cannot be found (e.g. wrong URL),
 * or when the server API is unable to find the resource.
 *
 * @return {Component} not found page
 */
const NotFound = ({ item }) => {
    /*
     * useEffect function to modify the background color of the DOM body object
     * to match the 404 not found image background.
     *
     */
    useEffect(() => {
        document.body.style.backgroundColor = "#f1f1f1";

        /**
         * useEffect clean-up: Return the body background color back to white.
         */
        return () => {
            document.body.style.backgroundColor = "#fff";
        };
    }, []);

    return (
        <S.NotFound>
            <Navbar />
            <S.MainPageBody>
                <S.Header
                    className="no-background center-text"
                    small
                >
                    Oops...
                </S.Header>
                <p style={{ textAlign: "center" }}>
                    We couldn&apos;t seem to find that {item}!
                </p>
                <S.Image
                    src="https://res.cloudinary.com/reuben/image/upload/v1604039753/fullstack-react/assets/istockphoto-robot-404-not-found_l5gqt7.jpg"
                    alt="Error 404 Not Found Robot"
                    width="509" />
            </S.MainPageBody>
        </S.NotFound>
    );
};

NotFound.propTypes = {
    /**
     * Resource not able to be found.
     * - e.g. a page or an article.
     */
    item: PropTypes.string,
};

export default NotFound;
