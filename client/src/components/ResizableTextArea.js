import React, { useState } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "../scripts/empty";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a textarea which automatically resizes
 * the height as more text is added to the form so the user does
 * not have to use a scrollbar.
 *
 * @return {Component} navbar for navigating through website
 */
const ResizableTextarea = ({
    required = true,
    placeholder = "Enter your comment here...",
    onChangeHandler = undefined,
    errorMessage = "Please complete the field.",
}) => {
    /** React Hook for storing and setting the input text */
    const [text, setText] = useState("");
    /** Flag to indicate if the input is valid */
    const [isValid, setIsValid] = useState(true);

    /**
     * Function to handle the on change event.
     *
     * -Adjusts the textarea height as more lines of text
     * are added.
     * - Populates the text state with the text value.
     *
     * @param {Event} event the onchange event
     */
    const handleChange = (event) => {
        const textarea = event.target;
        const scrollHeight = textarea.scrollHeight;
        /**
         * Set the textarea height, adding 2px to stop
         * the scrollbar from displaying.
         */
        textarea.style.height = scrollHeight + 2 + "px";

        setText(textarea.value);

        if (required) {
            if (isEmpty(textarea.value)) {
                setIsValid(false);
            } else if (isValid === false) {
                setIsValid(true);
            }
        }

        if (onChangeHandler !== undefined) {
            onChangeHandler(textarea.value);
        }
    };

    return (
        <>
            <S.TextArea
                className={isValid ? "" : "invalid"}
                rows="4"
                value={text}
                placeholder={placeholder}
                onChange={(event) => handleChange(event)}
            />
            <S.InvalidInputHelper
                className={!isValid ? "show" : ""}>
                {errorMessage}
            </S.InvalidInputHelper>
        </>
    );
};

ResizableTextarea.propTypes = {
    /**
     * Flag indicating if it is a required input field.
     *
     * - If it is, then appropriate warning messages will display.
     */
    required: PropTypes.bool,
    /**
     * Placeholder text for the textarea.
     */
    placeholder: PropTypes.string,
    /**
     * onChange event handler function passed from parent to perform an
     * action with the input value.
     *
     * @param {String} value the textarea input value
     */
    onChangeHandler: PropTypes.func,
    /**
     * The error message to display if the field is required and the input
     * is not valid.
     */
    errorMessage: PropTypes.string,
};

export default ResizableTextarea;
