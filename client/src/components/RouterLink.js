import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which implements a styled React Router Link button
 * inside of a ListItem (html = li).
 *
 * Ideal for buttons to navigate to another page.
 *
 * @return {Component} React Router button link
 */
const RouterLink = ({
    className = "",
    label,
    url,
    tiny = false,
    isImage = false,
    children,
}) => {
    const content = isImage ?
        (
            <S.RouterLink to={url}>
                {children}
            </S.RouterLink>
        ) :
        (tiny ?
            (
                <S.TinyRouterLink
                    to={url}
                    color="grey-tint-neutral">
                    { label}
                </S.TinyRouterLink >
            ) :
            (
                <S.RouterLinkButton
                    to={url}
                    color="grey-tint-neutral">
                    { label}
                </S.RouterLinkButton >
            ));

    return (
        <S.ListItem className={className}>
            {content}
        </S.ListItem>
    );
};

RouterLink.propTypes = {
    /**
     * The class name to be passed onto styled-components ListItem.
     * - As the RouterLink React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
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
    /**
     * Flag to indicate if Router Link is an image/svg
     */
    isImage: PropTypes.bool,
    /**
     * The children of the Component.
     */
    children: PropTypes.object,
};

export default RouterLink;
