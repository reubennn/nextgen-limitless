import React from "react";
import PropTypes from "prop-types";

import Navbar from "../components/Navbar";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a server error page
 *
 * Internal server error may occur when a client is unable to
 * connect to the server API. Or the server API is unable to
 * fetch resources from the database.
 *
 * @return {Component} internal server error page
 */
const ServerError = ({ errorCode }) => (
    <>
        <Navbar />
        <S.MainPageBody>
            <S.Section>
                <S.FooterPaddingPlaceholder>
                    <S.Header>500 Internal Server Error</S.Header>
                    <S.Header
                        className="no-background center-text"
                        small >
                        Oops...
                        <br></br><br></br>
                        It&apos;s not you, it&apos;s us!
                    </S.Header>
                    <p className="center-text">
                        We&apos;re unable to connect to our &nbsp;
                        servers at the moment.
                        <br></br>
                        Please try again later.
                        <br></br>
                        <br></br>
                    </p>
                    {errorCode &&
                        <p className="center-text">
                            <b>Error code: {errorCode}</b>
                        </p>}
                </S.FooterPaddingPlaceholder>
            </S.Section>
        </S.MainPageBody>
    </>
);

ServerError.propTypes = {
    /**
     * Error code returned from the server if supplied.
     */
    errorCode: PropTypes.number,
};

export default ServerError;
