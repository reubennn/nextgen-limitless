import React, { Component } from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

class NotFoundPage extends Component {
    render() {
        return (
            <S.FooterPaddingPlaceholder>
                <S.Header>404 Error: Page Not Found</S.Header>
                <p style={{ textAlign: "center" }}>
                    Oops.. We couldn&apos;t seem to find that {this.props.item}!
                </p>
            </S.FooterPaddingPlaceholder>
        );
    }
}

NotFoundPage.propTypes = {
    item: PropTypes.string,
};

export default NotFoundPage;
