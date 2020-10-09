import React, { useEffect, useRef, useState } from "react";
import * as S from "../styles/styled-components";

const ResizableTextarea = ({ commentText, setCommentText }) => {

    const handleChange = (event) => {
        const textarea = event.target;
        const scrollHeight = textarea.scrollHeight;
        textarea.style.height = scrollHeight + 2 + "px";

        setCommentText(textarea.value);
    };

    return (
        <S.TextArea
            rows="4"
            value={commentText}
            placeholder={'Enter your comment here...'}
            onChange={(event) => handleChange(event)}
        />
    );
}

export default ResizableTextarea;
