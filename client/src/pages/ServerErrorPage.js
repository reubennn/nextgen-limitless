import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const ServerErrorPage = ({ errorCode }) => (
    <S.FooterPaddingPlaceholder>
        <S.Header>500 Internal Server Error</S.Header>
        <S.Header
            className="no-background center-text"
            small
        >
            Oops...
            <br></br><br></br>
            It&apos;s not you, it&apos;s us!
        </S.Header>
        <p className="center-text">
            We&apos;re unable to connect to our servers at the moment.
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
);

ServerErrorPage.propTypes = {
    errorCode: PropTypes.number,
};

export default ServerErrorPage;
