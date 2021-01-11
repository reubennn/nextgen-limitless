import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportType,
} from "../selectors/viewportSelectors";

import ResizableTextarea from "./ResizableTextArea";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for the Contact Form to send a message to the company
 * to get in contact.
 *
 * - Displays an invalid helper tip if an input field was entered
 * incorrectly.
 * - Gracefully collapses once submitted.
 * - Displays thank you message on submit.
 * - Displays warning message if user tries to submit an incomplete form.
 *
 * @return {Component} contact form for the contact page
 *
 */
const ContactForm = ({ viewport }) => {
    const [form, setForm] = useState({
        /** Input field values */
        input: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        },
        /** Flags indicating if field is valid */
        isValid: {
            firstName: true,
            lastName: true,
            email: true,
            message: true,
        },
        /** Flag indicating if the form is complete with valid inputs */
        isComplete: false,
        /** Flag indicating if the form has been submitted */
        submitted: false,
        /** Flag state which indicates if the form should be collapsed */
        isCollapsed: false,
        /** Flag triggered when user tries to submit an incomplete form */
        showError: false,
        /** Flag indicating if the submit button was clicked */
        buttonClicked: false,
    });

    /**
     * Input field property strings.
     */
    const PROPERTY = {
        firstName: "firstName",
        lastName: "lastName",
        email: "email",
        message: "message",
    };

    /**
     * useEffect which is called when any input field valid status changes.
     *
     * - Checks if all input fields in the form
     * are valid and updates the isComplete flag accordingly.
     * - If all inputs are valid and an error message is being shown, it will
     * be hidden immediately regardless of the timeout to hide it.
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            if (formHasValidInput()) {
                setForm((prevState) => {
                    return {
                        ...prevState,
                        isComplete: true,
                        showError: false,
                    };
                });
            } else if (form.isComplete === true) {
                setForm((prevState) => {
                    return {
                        ...prevState,
                        isComplete: false,
                    };
                });
            }
        }
        return () => {
            isMounted = false;
        };
    }, [form.isValid]);

    /**
     * Function which sets the isCollapsed flag state to true.
     */
    const collapseFormDelay = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                isCollapsed: true,
            };
        });
    };

    /**
     * useEffect which is called once the form has been submitted.
     *
     * - Sets a timeout to set the isCollapsed state to true after 100ms,
     * which gives some buffer time to collapse the form after the content
     * has been re-rendered.
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted && form.submitted) {
            timeout = setTimeout(() =>
                collapseFormDelay(), 100);
        }
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [form.submitted]);

    /**
     * useEffect which is triggered when buttonClicked flag is toggled.
     *
     * - When the submit button is clicked, two events could occur:
     *      1. The form is complete and then is submitted.
     *      2. The form is incomplete, so we should show a helper to let
     *      the user know some input fields are incomplete.
     *
     * - First, reset the flag.
     * - If the form is complete, the showError flag will not be true,
     * so hiding the error does nothing.
     * - If the form is incomplete, the showError flag will trigger the
     * error helper message to display, then the timeout created in this
     * function hides the error message after the specified time.
     * - If the button is clicked again before hideError() is called,
     * the useEffect cleanup clears the timeout and creates a new one,
     * so the message will hide after the specified time from the last click.
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted) {
            setForm((prevState) => {
                return {
                    ...prevState,
                    buttonClicked: false,
                };
            });
            timeout = setTimeout(() => hideError(), 4000);
        }
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [form.buttonClicked]);

    /**
     * Handler function for the onChange event of the resizable text area.
     *
     * - Uses the value inside the textarea to update the form.
     * - We can pass this function to the child ResizableTextArea Component
     * so that it can perform the function at the onChange event.
     *
     * @param {String} value input of the resizable text area
     */
    const textAreaHandleOnChange = (value) => {
        updateFormState(value, PROPERTY.message);
    };

    /**
     * Handler function for the onChange event of the email input field.
     *
     * - Email field is generally updated using onBlur.
     * - This is required so the user is not immediately told their email is
     * incorrect on the first character.
     * - However, we need to use the onChange event for some edge cases:
     *      1. When we know the email is invalid, keep updating/checking it
     *      until it is correct so the user has immediate feedback.
     *      2. When a form is auto-filled, the onBlur event is not called,
     *      so we should use onChange to update it when the input is empty.
     *
     * @param {String} value input of the email field
     */
    const emailInputHandleOnChange = (value) => {
        if (!form.isValid.email || form.input.email === "") {
            updateFormState(value, PROPERTY.email);
        }
    };

    /**
     * Function which is called to update the form state
     * dynamically depending on the input property supplied.
     *
     * - Checks if the input is valid for the field and updates
     * the isValid flag accordingly.
     *
     * @param {String} value the new value to set
     * @param {String} property the input property name
     */
    const updateFormState = (value, property) => {
        /** Check if the input was valid */
        const valid = checkInputIsValid(value, property);
        setForm((prevState) => {
            return {
                ...prevState,
                isValid: {
                    ...prevState.isValid,
                    [property]: valid,
                },
                input: {
                    ...prevState.input,
                    [property]: value,
                },
            };
        });
    };

    /**
     * Function which uses Regular Expression to test if the message
     * contains whitespace only (spaces, line-breaks or tabs) or is an
     * empty string.
     *
     * @param {String} value the input value to check
     * @return {Boolean} true if the input is empty, otherwise false
     */
    const checkIfInputIsEmpty = (value) => {
        return value.trim() === "" ? true : false;
    };

    /**
     * Uses Regular Expressions to test if the input is valid,
     * depending on the input type.
     *
     * @param {String} value the value to check
     * @param {String} property the input property value
     * @return {Boolean} true if the input is valid, false otherwise
     */
    const checkInputIsValid = (value, property) => {
        if (property === PROPERTY.firstName || property === PROPERTY.lastName) {
            /** Test if it has a number in it */
            const hasNumber = /\d/.test(value);
            /** Test if it has an invalid character */
            const hasInvalidCharacter =
                /[`!@#$%^&*()_+=[\]{};':"\\|,.<>/?~]/.test(value);
            /** Test if input is whitespace only */
            const hasSpacesOnly = !value.replace(/\s/g, "").length;
            if (hasNumber || hasInvalidCharacter || hasSpacesOnly) {
                return false;
            }
        } else if (property === PROPERTY.email) {
            /** Test if email looks like it could be valid */
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        } else if (property === PROPERTY.message) {
            const isEmpty = checkIfInputIsEmpty(value);
            return isEmpty ? false : true;
        }
        return true;
    };

    /**
     * Function which checks if all input fields in the form
     * have valid input.
     *
     * @return {Boolean} true if form has valid inputs, false otherwise
     */
    const formHasValidInput = () => {
        for (const key in PROPERTY) {
            if (Object.prototype.hasOwnProperty.call(PROPERTY, key)) {
                /** Check if the input field is valid */
                if (form.isValid[key] === false) {
                    return false;
                }
                /** Check if the input field is empty*/
                const isEmpty = checkIfInputIsEmpty(form.input[key]);
                if (isEmpty) {
                    return false;
                }
            }
        }
        return true;
    };

    /**
     * Function which sets the showError flag state to false,
     * which causes the error message to be hidden.
     */
    const hideError = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                showError: false,
            };
        });
    };

    /**
     * Function handler for the button click event.
     *
     * - Call the corresponding handler functions depending if the
     * form is complete or not.
     */
    const handleButtonClick = () => {
        if (form.isComplete) {
            handleCompleteSubmit();
        } else {
            handleIncompleteSubmit();
        }
    };

    /**
     * Handler function if the submit button was pressed,
     * but the form is incomplete.
     *
     * - Sets showError and buttonClicked flags to true.
     */
    const handleIncompleteSubmit = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                showError: true,
                buttonClicked: true,
            };
        });
    };

    /**
     * Handler function if the submit button was pressed and
     * the form is complete and valid.
     *
     * - If the form is complete, set the submitted flag to true,
     * which triggers the form thank you message to display and the
     * form to collapse.
     * - It is here that we would use the information to send to the database.
     */
    const handleCompleteSubmit = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                submitted: true,
            };
        });
        /** Now send the information + message to database */
    };

    /**
     * Handler which prevents the default event from occurring when
     * submitting the form.
     *
     * @param {Event} event event object
     */
    const handleSubmitEvent = (event) => {
        event.preventDefault();
    };

    /**
     * Function which checks the form submitted and isCollapsed flags.
     *
     * - Depending on the flag state, a class name is given to the ContactForm
     * so the appropriate CSS styling is used.
     * - Using timeouts, the form collapsed momentarily after the form is
     * submitted.
     * - Due to the content re-render, the "done" class adds bottom padding
     * to the form to stop it from suddenly shrinking.
     *
     * @return {String} ContactForm class names
     */
    const getContactFormClasses = () => {
        const done = form.submitted ? "done" : "";
        const collapse = form.isCollapsed ? " collapse" : "";
        return done + collapse;
    };

    const formContent = !form.submitted ?
        (
            <>
                <S.Label className="uppercase">
                    First name:
                </S.Label>
                <S.Input
                    className={form.isValid.firstName ? "" : "invalid"}
                    type="text"
                    placeholder="Jonathon"
                    onChange={(e) =>
                        updateFormState(e.target.value, PROPERTY.firstName)}
                />
                <S.InvalidInputHelper
                    className={!form.isValid.firstName ? "show" : ""}>
                    Please enter a name with letters and symbols.
                </S.InvalidInputHelper>
                <S.Label className="uppercase">
                    Last name:
                </S.Label>
                <S.Input
                    className={form.isValid.lastName ? "" : "invalid"}
                    type="text"
                    placeholder="Doerty"
                    onChange={(e) =>
                        updateFormState(e.target.value, PROPERTY.lastName)}
                />
                <S.InvalidInputHelper
                    className={!form.isValid.lastName ? "show" : ""}>
                    Please enter a name with letters and symbols.
                </S.InvalidInputHelper>
                <S.Label className="uppercase">
                    Email:
                </S.Label>
                <S.Input
                    className={form.isValid.email ? "" : "invalid"}
                    type="email"
                    placeholder="turtlez-rock45@xyz.com"
                    onBlur={(e) =>
                        updateFormState(e.target.value, PROPERTY.email)}
                    onChange={(e) => emailInputHandleOnChange(e.target.value)}
                />
                <S.InvalidInputHelper
                    className={!form.isValid.email ? "show" : ""}>
                    Please enter a valid email address.
                </S.InvalidInputHelper>
                <S.Label className="uppercase">
                    Message:
                </S.Label>
                <ResizableTextarea
                    placeholder="Let's have a conversation about..."
                    onChangeHandler={textAreaHandleOnChange}
                    errorMessage="Please let us know why you'd
                    like to get in contact." />
                <br />
                <S.Button
                    className="full gradient uppercase"
                    onClick={() => handleButtonClick()}
                    $radius="0.4rem">
                    Send message
                </S.Button>
                <S.InvalidInputHelper
                    className={form.showError ? "show" : ""}>
                    Please complete the form before sending the message.
                </S.InvalidInputHelper>
            </>
        ) :
        (
            <>
                <S.Header as="h4">
                    Thanks for getting in contact with us!
                </S.Header>
                <S.Header as="h5">
                    Our Ninjas will do their best to get back to you
                    as soon as possible.
                </S.Header>
            </>
        );

    return (
        <S.Form
            className={getContactFormClasses()}
            onSubmit={(e) => handleSubmitEvent(e)}
            type={viewport.type} >
            {formContent}
        </S.Form >
    );
};

ContactForm.propTypes = {
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props using Redux selectors
 * to connect the Component to the Redux store.
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    viewport: {
        type: getViewportType(state),
    },
});

export default connect(mapStateToProps)(ContactForm);
