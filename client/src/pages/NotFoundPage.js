import React, { useEffect } from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const NotFoundPage = ({ item }) => {
    /* useEffect function to modify the background color of the DOM body object
     * to match the 404 not found image background
     * */
    useEffect(() => {
        document.body.style.backgroundColor = "#f1f1f1";

        // Clean-up to return the body background color back to white
        return () => {
            document.body.style.backgroundColor = "#fff";
        };
    }, []);

    return (
        <S.NotFoundPage>
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
                src="https://media.istockphoto.com/photos/oops-404-error-page-not-found-futuristic-robot-concept-with-wire-picture-id642741626?b=1&k=6&m=642741626&s=170667a&w=0&h=X86PhDZkjhn_1Z5aEhd2rtBawIOoi3G6Bn7cEK7kGK4="
                alt="Error 404 Not Found"/>
        </S.NotFoundPage>
    );
};

NotFoundPage.propTypes = {
    item: PropTypes.string,
};

export default NotFoundPage;
