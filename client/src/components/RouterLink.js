import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components";

/**
 * React Component which implements a styled React Router Link button
 * inside of a ListItem (html = li).
 *
 * Ideal for buttons to navigate to another page.
 *
 * @return {Component} React Router button link
 */
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
    /**
     * Button label.
     */
    label: PropTypes.string,
    /**
     * URL to navigate to on click.
     */
    url: PropTypes.string.isRequired,
    /**
     * Boolean to indicate if the button should be "tiny"
     * using conditional rendering.
     * - For elements like footnote buttons in footer.
     */
    tiny: PropTypes.bool,
};

export default RouterLink;
