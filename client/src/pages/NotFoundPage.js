import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const NotFoundPage = ({ item }) => (
    <S.FooterPaddingPlaceholder>
        <S.Header>404 Error: Page Not Found</S.Header>
        <p style={{ textAlign: "center" }}>
            Oops.. We couldn&apos;t seem to find that {item}!
        </p>
    </S.FooterPaddingPlaceholder>
);

NotFoundPage.propTypes = {
    item: PropTypes.string,
};

export default NotFoundPage;
