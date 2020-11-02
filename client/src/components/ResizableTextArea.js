import React from "react";
import PropTypes from "prop-types";

import * as S from "../styles/styled-components";

/**
 * React Component for a textarea which automatically resizes
 * the height as more text is added to the form so the user does
 * not have to use a scrollbar.
 *
 * @return {Component} navbar for navigating through website
 */
const ResizableTextarea = ({ commentText, setCommentText }) => {
    /**
     * Function to handle the on change event.
     *
     * -Adjusts the textarea height as more lines of text
     * are added.
     * - Populates the commentText state with the text value.
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

        setCommentText(textarea.value);
    };

    return (
        <S.TextArea
            rows="4"
            value={commentText}
            placeholder={"Enter your comment here..."}
            onChange={(event) => handleChange(event)}
        />
    );
};

ResizableTextarea.propTypes = {
    /**
     * React Hook state for the current text inside the textarea.
     */
    commentText: PropTypes.string,
    /**
     * React Hook to set the comment text state in the add
     * comment form.
     * - Originates from AddCommentForm -> ResizableTextArea.
     */
    setCommentText: PropTypes.func,
};

export default ResizableTextarea;
