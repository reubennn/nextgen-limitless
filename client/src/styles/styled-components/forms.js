/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import {
    handleContactFormWidth,
    handleContactFormPadding,
} from "./responsive";
import {
    color,
    transparency,
} from "./colors";

/**
 * Contact Form component which contains all input fields.
 *
 * To avoid the form collapsing suddenly due to React re-rendering the content:
 *      - When form is complete, .done class hides the new content text, and
 *      extends the bottom padding so it does not jump.
 *      - A timeout should be used to then add .collapse class which will
 *      cause the form to collapse gracefully using CSS transitions.
 *
 * @param {Object} viewport viewport object used for responsive design
 *      - @property {String} type type classification
 */
export const ContactForm = styled.form.attrs((props) => ({
    viewport: {
        type: props.type || "default",
    },
}))`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    margin: 2rem auto 7rem auto;
    border-radius: 0.4rem;
    color: ${color.grey.shade.dark};
    background-color: ${color.white};
    box-shadow: 0 1rem 2rem 0 ${color.black + transparency.x30};
    border: 0.05rem solid ${color.grey.tint.lightest};
    transition: all 0.4s ease-in-out 0s;

    /** Responsive design*/
    width: ${(props) => handleContactFormWidth(props.viewport.type)};
    padding: ${(props) => handleContactFormPadding(props.viewport.type)};

    &.done {
        padding-bottom: 15rem;
        color: transparent;
        transition: all 0.4s ease-in-out 0s,
                    padding-bottom 0s linear 0s,
                    color 0s linear 0s;
    }

    &.done.collapse {
        padding-top: 2rem;
        padding-bottom: 3rem;
        color: ${color.grey.shade.dark};
        transition: all 0.4s ease-in-out 0s,
                    padding-bottom 0.7s ease-in-out 0s,
                    color 1.2s ease-in-out 0s
    }
`;

/**
 * Invalid input helper text which displays red helper text
 * under the input field when the form detects that the input is invalid.
 */
export const InvalidInputHelper = styled.label`
    color: transparent;
    font-size: 0.8rem;
    max-height: 0;
    transition: all 0.5s ease-in-out 0s,
                max-height 0.8s ease-in-out 0s;

    &.show {
        max-height: 10rem;
        color: ${color.red.neutral};
    }

    &:last-of-type {
        text-align: center;
        margin-top: 2rem;
    }
`;
