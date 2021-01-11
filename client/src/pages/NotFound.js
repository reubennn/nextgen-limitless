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
const NotFound = ({ item }) => (
    <S.NotFound>
        <Navbar />
        <S.MainPageBody>
            <S.Section bgColor="#f1f1f1">
                <S.Header
                    as="h3"
                    className="uppercase">
                    Oops...
                </S.Header>
                <p style={{ textAlign: "center" }}>
                    We couldn&apos;t seem to find that {item}!
                </p>
                <S.Image
                    src="https://res.cloudinary.com/reuben/image/upload/v1604039753/fullstack-react/assets/istockphoto-robot-404-not-found_l5gqt7.jpg"
                    alt="Error 404 Not Found Robot"
                    width="509" />
            </S.Section>
        </S.MainPageBody>
    </S.NotFound>
);

NotFound.propTypes = {
    /**
     * Resource not able to be found.
     * - e.g. a page or an article.
     */
    item: PropTypes.string,
};

export default NotFound;
