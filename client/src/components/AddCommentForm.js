import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { isEmpty } from "../scripts/empty";
import useSecuredApi from "../hooks/useSecuredApi";

import { getViewportType } from "../selectors/viewportSelectors";

import {
    cloudAvatars,
    getRandomAvatar,
} from "../data/avatars";

import ResizableTextarea from "./ResizableTextArea";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for an add comment form.
 *
 * - Allows a user to enter their name, a comment and then post it.
 * - In order to useRef the component (ie, when scrolling to the component),
 * we need to use React.forwardRef as we are using a Functional React
 * Component.
 *
 *
 * @return {Component} add comment form for posting a comment to an article
 */
const AddCommentForm = React.forwardRef((
    { articlePath, setNewComment, viewport },
    ref,
) => {
    const initialState = {
        /** Input field values */
        input: {
            name: "",
            comment: "",
        },
        /** Flags indicating if field is valid */
        isValid: {
            name: true,
            comment: true,
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
        /** When post request to server fails, is populated with error code */
        postToServerFailure: null,
    };

    const [form, setForm] = useState(initialState);

    /** Check if user is authenticated with Auth0 authentication */
    const { isAuthenticated } = useAuth0();

    /**
     * Input field property strings.
     */
    const PROPERTY = {
        name: "name",
        comment: "comment",
    };

    const SERVER_URL = process.env.REACT_APP_SERVER_URL;

    const addCommentRequestUrl =
        `${SERVER_URL}/api/comments/${articlePath}/add-comment`;

    /** Use custom React Hook for sending HTTP request to secure API endpoint */
    const {
        state: addCommentRequest,
        securedApiRequestWithOptions,
    } = useSecuredApi(addCommentRequestUrl);

    /**
     * Reset the form state to initial values.
     */
    const resetFormState = () => {
        setForm(initialState);
    };

    /**
     * Function called when the form is confirmed to be complete and
     * the user submits the comment.
     *
     * - Store the form data for our HTTP request body.
     * - Sends POST request to server API to post the comment to the database
     * using useSecuredApi hook.
     * - Until user login is implemented, we will create a mock avatar for each
     * comment to display.
     */
    const postCommentToServer = () => {
        const options = {
            method: "POST",
            headers: {
                /** Tell the server we are passing JSON */
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: form.input.name,
                comment: form.input.comment,
                avatar: getRandomAvatar(cloudAvatars),
            }),
        };
        securedApiRequestWithOptions(options);
    };

    /**
     * useEffect called when the the secure API HTTP request
     * returns a response, or an error has occurred.
     */
    useEffect(() => {
        if (addCommentRequest.data !== null) {
            const { body, response } = addCommentRequest.data;
            if (response.status !== 200) {
                handlePostToServerFailure(response.status);
            } else {
                handlePostToServerSuccess();
                setNewComment(body);
            }
        } else if (addCommentRequest.error !== null) {
            if (addCommentRequest.error.error === "login_required") {
                process.env.NODE_ENV !== "production" &&
                    console.log("Not logged in!");
            } else if (addCommentRequest.error.error === "consent_required") {
                process.env.NODE_ENV !== "production" &&
                    console.log("Do not have the required consent");
            } else {
                console.error(addCommentRequest.error);
            }
        }
    }, [addCommentRequest]);

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
     * useEffect which is triggered when posting to the server failed.
     *
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted) {
            timeout = setTimeout(() => resetServerFailureFlag(), 10000);
        }
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [form.postToServerFailure]);

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
        updateFormState(value, PROPERTY.comment);
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
     * Uses Regular Expressions to test if the input is valid,
     * depending on the input type.
     *
     * @param {String} value the value to check
     * @param {String} property the input property value
     * @return {Boolean} true if the input is valid, false otherwise
     */
    const checkInputIsValid = (value) => {
        return isEmpty(value) ? false : true;
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
                if (isEmpty(form.input[key])) {
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
            postCommentToServer();
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
    const handlePostToServerSuccess = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                submitted: true,
            };
        });
    };

    /**
     * Handler function if the submit button was pressed and
     * the form is complete and valid.
     *
     * @param {Number} error server response error code
     *
     */
    const handlePostToServerFailure = (error) => {
        setForm((prevState) => {
            return {
                ...prevState,
                postToServerFailure: error,
            };
        });
    };

    /**
     * Handler function if the submit button was pressed and
     * the form is complete and valid.
     *
     */
    const resetServerFailureFlag = () => {
        setForm((prevState) => {
            return {
                ...prevState,
                postToServerFailure: null,
            };
        });
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
    const getFormClasses = () => {
        const done = form.submitted ? "done" : "";
        const collapse = form.isCollapsed ? " collapse" : "";
        return done + collapse;
    };

    const [commentAgain, setCommentAgain] = useState(false);

    /**
     * Handler function when a user presses the button
     * to add another comment.
     *
     * - This allows a method to confirm if the user is sure they
     * want to post another comment.
     */
    const handleCommentAgainButton = () => {
        if (!commentAgain) {
            setCommentAgain(true);
        } else {
            setCommentAgain(false);
            resetFormState();
        }
    };

    const formContent = !form.submitted ?
        (
            <>
                <S.Header
                    as="h3"
                    className="uppercase">
                    Add Comment
                </S.Header>
                <S.Label className="uppercase">
                    Name:
                </S.Label>
                <S.Input
                    type="text"
                    placeholder="Big Joe"
                    onChange={(e) =>
                        updateFormState(e.target.value, PROPERTY.name)}
                />
                <S.InvalidInputHelper
                    className={!form.isValid.name ? "show" : ""}>
                    Please provide a name.
                </S.InvalidInputHelper>
                <S.Label className="uppercase">
                    Comment:
                </S.Label>
                <ResizableTextarea
                    onChangeHandler={textAreaHandleOnChange}
                    errorMessage="Please enter a comment."
                />
                <br />
                <S.Button
                    className="full gradient uppercase"
                    $radius="0.4rem"
                    onClick={() => handleButtonClick()}>
                    Add Comment
                </S.Button>
                <S.InvalidInputHelper
                    className={form.showError ? "show" : ""}
                    after>
                    Please complete the form to add a comment.
                </S.InvalidInputHelper>
            </>
        ) :
        (
            <>
                <S.Header as="h4">
                    Thanks for taking the time to comment!
                </S.Header>
                <S.Button
                    className="full gradient uppercase"
                    $radius="0.4rem"
                    onClick={() => handleCommentAgainButton()}>
                    {
                        commentAgain ?
                            "Yes, let me comment again!" :
                            "Comment Again"
                    }
                </S.Button>
                <S.InvalidInputHelper
                    className={commentAgain ? "show" : ""}
                    after>
                    Woah. Are you really sure you want to make another comment?
                </S.InvalidInputHelper>
            </>
        );

    const loginContent =
        <>
            <S.Header
                as="h4">
                Please log in or sign up to comment.
            </S.Header>
            <S.FlexContainer className="no-margin">
                <LoginButton left />
                <SignupButton right />
            </S.FlexContainer>
        </>;

    return (
        <S.Form
            className={getFormClasses()}
            onSubmit={(e) => handleSubmitEvent(e)}
            type={viewport.type}
            ref={ref}>
            {isAuthenticated ?
                formContent :
                loginContent
            }
            <S.InvalidInputHelper
                className={form.postToServerFailure !== null ? "show" : ""}
                after>
                Oops.. there seems to be a problem with our servers at the
                moment.
                <br />
                Please try again later.
                <br /><br />
                Server error code: {form.postToServerFailure !== null ?
                    form.postToServerFailure : "N/A"}
            </S.InvalidInputHelper>
        </S.Form>
    );
});

AddCommentForm.propTypes = {
    /**
     * Name of the article
     */
    articlePath: PropTypes.string,
    /**
     * useState React Hook passed down as props to add the new comment info
     * if successfully posted to the database.
     *
     * - Allows client to append the comment to the existing comments.
     * - Avoids having to do another fetch request to the server.
     * - Originates from Comment -> AddCommentForm.
     */
    setNewComment: PropTypes.func,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Add the Display Name for the Component.
 * - Required as React.forwardRef hides the name.
 */
AddCommentForm.displayName = "AddCommentForm";

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

/** We need to add forwardRef option to ensure our ref is passed through */
export default connect(
    mapStateToProps,
    null,
    null,
    { forwardRef: true },
)(AddCommentForm);
