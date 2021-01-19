/* eslint-disable valid-jsdoc */
import styled from "styled-components";

import {
    handleFormWidth,
    handleFormPadding,
} from "./responsive";
import {
    color,
    transparency,
} from "./colors";

/**
 * Label Component.
 */
export const Label = styled.label`
    margin-bottom: 0.4rem;
    margin-top: 0;

    &:not(:first-of-type) {
        margin-top: 1rem;
    }

    &.comments-section {
        margin-right: 0.5rem;
    }
`;


/**
 * Input Component.
 */
export const Input = styled.input`
    outline: 0;
    border: 0.05rem solid ${color.grey.shade.light};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;
    margin-bottom: 0.2rem;
    line-height: 1.4;

    &:focus {
        outline: 0;
        border: 0.05rem solid ${color.blue.neutral};
        box-shadow: 0 0 0.3rem ${color.blue.neutral};
        transition: box-shadow linear 0.2s
    }

    &.invalid {
        border: 0.05rem solid ${color.red.neutral};

        &:focus {
            border: 0.05rem solid ${color.red.neutral};
            box-shadow: 0 0 0.3rem ${color.red.neutral};
        }
    }
`;

/**
 * Select Component.
 */
export const Select = styled.select`
    margin: auto 0.25rem;
    padding: 0.25rem 0.75rem;
    border-radius: 0.4rem;
    border: 0.05rem solid ${color.grey.tint.darker};
    cursor: pointer;
`;

/**
 * Option Component for a Select.
 */
export const Option = styled.option`
    /* text-transform: uppercase; */
`;

/**
 * General Form Component which contains input fields.
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
export const Form = styled.form.attrs((props) => ({
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
    width: ${(props) => handleFormWidth(props.viewport.type)};
    padding: ${(props) => handleFormPadding(props.viewport.type)};

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
 *
 * @param {Boolean} after label for after the form submit button
 */
export const InvalidInputHelper = styled.label.attrs((props) => ({
    after: props.after || false,
}))`
    color: transparent;
    display: block;
    font-size: 0.8rem;
    max-height: 0;
    transition: all 0.5s ease-in-out 0s,
                max-height 0.8s ease-in-out 0s;
    text-align: ${(props) => props.after ? "center" : ""};

    &.show {
        max-height: 10rem;
        color: ${color.red.neutral};
        margin-top: ${(props) => props.after ? "1.5rem" : ""};
        transition: all 0.5s ease-in-out 0s,
                    max-height 0.8s ease-in-out 0s;
    }
`;
