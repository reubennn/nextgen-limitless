import React from "react";
import PropTypes from "prop-types";
import * as S from "../styles/styled-components";

const RouterLink = ({ label, url, tiny }) => {
    const content = tiny ?
        (
            <S.TinyRouterLink
                to={url}
                color="lighter">
                { label}
            </S.TinyRouterLink >
        ) :
        (
            <S.RouterLink
                to={url}
                color="lighter">
                { label}
            </S.RouterLink >
        );

    return (
        <S.ListItem>
            {content}
        </S.ListItem>
    );
};

RouterLink.propTypes = {
    label: PropTypes.string,
    url: PropTypes.string.isRequired,
    tiny: PropTypes.bool,
};

export default RouterLink;
