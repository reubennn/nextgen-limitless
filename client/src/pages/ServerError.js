import React from "react";
import PropTypes from "prop-types";

import Icon from "../components/Icon";

import chromeDinosaur from ".../images/chrome-dinosaur.svg";

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
        <S.Section bgColor="transparent">
            <S.FooterPaddingPlaceholder>
                <S.Header
                    as="h2"
                    className="uppercase dark-background">
                    500 Internal Server Error
                </S.Header>
                <Icon
                    className="justify-center"
                    xlinkHref={chromeDinosaur}
                    height="128px"
                    width="128px"
                    fill="grey-shade-dark"
                    alt="Server Error Chrome Dinosaur" />
                <S.Header
                    as="h4">
                    It&apos;s not you, it&apos;s us!
                </S.Header>
                <p className="center-text">
                    We&apos;re unable to connect to our
                    servers at the moment.
                </p>
                <p className="center-text">
                    Please try again later.
                </p>
                <br />
                {errorCode &&
                    <p className="center-text">
                        <b>Error code: {errorCode}</b>
                    </p>}
            </S.FooterPaddingPlaceholder>
        </S.Section>
    </>
);

ServerError.propTypes = {
    /**
     * Error code returned from the server if supplied.
     */
    errorCode: PropTypes.number,
};

export default ServerError;
