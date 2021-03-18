import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a simple clear text button.
 *
 * - You will need to use an onClick handler function which clears the text
 * when this button is clicked on.
 *
 * @return {Component} clear text button
 */
const ClearText = ({ hidden = false, onClick }) => {
    return (
        <S.ClearTextContainer
            hidden={hidden}
            onClick={onClick}
            aria-label="Clear Text">
            <S.ClearTextCross />
            <S.ClearTextCross shift />
        </S.ClearTextContainer>
    );
};

ClearText.propTypes = {
    /**
     * Flag indicating if the ClearText button should be hidden.
     */
    hidden: PropTypes.bool,
    /**
     * onClick handler function to perform an action
     * when this component has been clicked on.
     */
    onClick: PropTypes.func,
};

export default ClearText;
