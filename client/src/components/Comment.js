import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "./Icon";

import moreOptions from ".../icons/more-options.svg";
import thumbsUp from ".../icons/thumbs-up.svg";
import thumbsDown from ".../icons/thumbs-down.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a comment and its replies.
 *
 * This component will be called recursively for comments that have
 * replies within replies.
 *
 * @return {Component} list of comments if any exist
 */
const Comment = ({
    data,
    getRelativeTime,
    viewport,
}) => {
    /** Initial state values for the interaction buttons */
    const initialInteractionValues = {
        clicked: false,
        success: false,
        failure: false,
    };

    const initialInteractionState = {
        reply: {
            ...initialInteractionValues,
        },
        upvote: {
            ...initialInteractionValues,
        },
        downvote: {
            ...initialInteractionValues,
        },
    };

    /** Store the state of the replies for the comment */
    const [replies, setReplies] = useState([]);
    const [hasReplies, setHasReplies] = useState(false);

    /** Store the state of the interaction buttons for the comment */
    const [interaction, setInteraction] = useState(initialInteractionState);

    const isRoot = data.depth === 0 ? true : false;
    let maxDepth;

    const INTERACTIONS = {
        reply: "reply",
        upvote: "upvote",
        downvote: "downvote",
    };

    /**
     * Function which fetches all replies associated with the comment.
     *
     * @return {Object} HTTP response parameters
     * @property {Object} result HTTP response values
     * @property {Object} body the data sent from the server
     */
    const fetchReplies = async () => {
        const result = await fetch(
            `/api/comments/${data.path}/${data._id}`);
        const body = await result.json();
        return {
            result,
            body,
        };
    };

    /**
     * Dynamic function which performs a HTTP request to the server, based
     * on the desired interaction with the comment.
     *
     * - Either reply, upvote or downvote.
     *
     * @param {String} interaction the interaction method to perform
     * @return {Object} HTTP response parameters
     * @property {Object} result HTTP response values
     * @property {Object} body the data sent from the server
     */
    const commentInteractionRequest = async (interaction) => {
        if (interaction === INTERACTIONS.upvote ||
            interaction === INTERACTIONS.downvote) {
            const result = await fetch(
                `/api/comments/${data.path}/${data._id}/${interaction}`,
                { method: "POST" },
            );
            const body = await result.json();
            return {
                result,
                body,
            };
        } else {
            // Reply to the comment POST request to server
        }
    };

    /**
     * useEffect which fetches the replies of the comment when mounted.
     *
     * - Unsubscribes the promise if component is unmounted, to avoid
     * any memory leaks.
     *
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            fetchReplies()
                .then((response) => {
                    if (isMounted) {
                        if (response.result.status !== 200) {
                            console.log(
                                `Error code: ${response.result.status}`);
                        } else if (response.body.length > 0) {
                            setReplies(response.body);
                        }
                    }
                });
        }
        return () => {
            isMounted = false;
        };
    }, []);

    /**
     * useEffect triggered when the replies state array has been updated.
     *
     * - Set flag indicating that the comment does have replies.
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setHasReplies(replies.length > 0);
        }
        /** Clean-up */
        return () => {
            isMounted = false;
        };
    }, [replies]);

    /**
     * useEffect triggered when the upvote button is clicked.
     *
     * - Performs the interaction request with the server and
     * updates the state depending on the result response.
     *
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && interaction.upvote.clicked) {
            commentInteractionRequest(INTERACTIONS.upvote)
                .then((response) => {
                    if (isMounted) {
                        if (response.result.status !== 200) {
                            console.log(
                                `Error code: ${response.result.status}`);
                            setInteraction((prevState) => {
                                return {
                                    ...prevState,
                                    upvote: {
                                        clicked: false,
                                        success: false,
                                        failure: true,
                                    },
                                };
                            });
                        } else {
                            setInteraction((prevState) => {
                                return {
                                    ...prevState,
                                    upvote: {
                                        clicked: true,
                                        success: true,
                                        failure: false,
                                    },
                                };
                            });
                        }
                    }
                });
        };
        return () => {
            isMounted = false;
        };
    }, [interaction.upvote.clicked]);

    /**
     * useEffect triggered when the downvote button is clicked.
     *
     * - Performs the interaction request with the server and
     * updates the state depending on the result response.
     *
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && interaction.downvote.clicked) {
            commentInteractionRequest(INTERACTIONS.downvote)
                .then((response) => {
                    if (isMounted) {
                        if (response.result.status !== 200) {
                            console.log(
                                `Error code: ${response.result.status}`);
                            setInteraction((prevState) => {
                                return {
                                    ...prevState,
                                    downvote: {
                                        clicked: false,
                                        success: false,
                                        failure: true,
                                    },
                                };
                            });
                        } else {
                            setInteraction((prevState) => {
                                return {
                                    ...prevState,
                                    downvote: {
                                        clicked: true,
                                        success: true,
                                        failure: false,
                                    },
                                };
                            });
                        }
                    }
                });
        };
        return () => {
            isMounted = false;
        };
    }, [interaction.downvote.clicked]);

    /**
     * useEffect which is called when the HTTP request to the server
     * to upvote the comment failed.
     *
     * - Updates the corresponding state, to display a helper error message.
     * - Sets a timeout to reset the interaction after the delay period.
     *
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted) {
            timeout = setTimeout(() =>
                resetInteraction(INTERACTIONS.upvote), 5000);
        };
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [interaction.upvote.failure]);

    /**
     * useEffect which is called when the HTTP request to the server
     * to downvote the comment failed.
     *
     * - Updates the corresponding state, to display a helper error message.
     * - Sets a timeout to reset the interaction after the delay period.
     *
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted) {
            timeout = setTimeout(() =>
                resetInteraction(INTERACTIONS.downvote), 4000);
        };
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [interaction.downvote.failure]);

    /**
     * Function which resets the specified interaction state values.
     *
     * @param {String} interaction the interaction state to reset
     */
    const resetInteraction = (interaction) => {
        setInteraction((prevState) => {
            return {
                ...prevState,
                [interaction]: {
                    ...initialInteractionValues,
                },
            };
        });
    };

    /**
     * Interaction button click handler.
     *
     * - Set the associated interaction clicked state to true.
     *
     * @param {String} _interaction the interaction type
     */
    const handleInteractionClick = async (_interaction) => {
        if (!interaction[_interaction].clicked) {
            setInteraction((prevState) => {
                return {
                    ...prevState,
                    [_interaction]: {
                        ...prevState[_interaction],
                        clicked: true,
                    },
                };
            });
        }
    };

    /**
     * Switch statement to dynamically select the maxDepth of
     * the replies.
     *
     * For smaller viewports, we do not have enough room to
     * continue to indent replies, so this limits the number
     * of indents.
     */
    switch (viewport.type) {
        case ("super-small"): maxDepth = 2; break;
        case ("extra-small"): maxDepth = 3; break;
        case ("small"): maxDepth = 4; break;
        case ("medium"): maxDepth = 7; break;
        case ("large"): maxDepth = 10; break;
        case ("extra-large"): maxDepth = 12; break;
        case ("super-large"): maxDepth = 15; break;
        default: maxDepth = 2; break;
    };

    /** Determine flag status to display server error message */
    const interactServerError = interaction.upvote.failure ||
        interaction.downvote.failure ||
        interaction.reply.failure ? true : false;

    /** Interaction button class names */
    const upvoteButtonClassName = interaction.upvote.success ?
        "highlight" : "";
    const downvoteButtonClassName = interaction.downvote.success ?
        "highlight" : "";

    return (
        <S.CommentWrapper>
            <S.FlexContainer
                className="no-margin"
                justifyContent="flex-start">
                <S.UserAvatar
                    src={data.avatar}
                    alt="Avatar" />
                <S.FlexContainer
                    column
                    className="no-margin">
                    <S.CommentUser>
                        {data.name}
                    </S.CommentUser>
                    <S.CommentTimestamp>
                        {getRelativeTime(data.timestamp)}
                    </S.CommentTimestamp>
                </S.FlexContainer>
                <S.OptionsButton className="justify-right">
                    <Icon
                        className="dark-hover"
                        xlinkHref={moreOptions}
                        height="16px"
                        width="16px"
                        fill="grey-tint-neutral" />
                </S.OptionsButton>
            </S.FlexContainer>
            <S.CommentText>
                {data.comment}
            </S.CommentText>
            <S.FlexContainer
                className="no-margin"
                justifyContent="flex-start">
                <S.OptionsButton
                    className="keep-next no-bg"
                    onClick={() => handleInteractionClick(INTERACTIONS.reply)}>
                    Reply
                </S.OptionsButton>
                <S.TallyContainer>
                    <S.OptionsButton
                        className="keep-next no-bg"
                        onClick={() =>
                            handleInteractionClick(INTERACTIONS.upvote)}>
                        <Icon
                            className={`dark-hover ${upvoteButtonClassName}`}
                            xlinkHref={thumbsUp}
                            height="16px"
                            width="16px"
                            fill="grey-tint-neutral" />
                    </S.OptionsButton>
                    <S.TallyCount>
                        {interaction.upvote.success ?
                            data.upvotes + 1 : data.upvotes}
                    </S.TallyCount>
                </S.TallyContainer>
                <S.TallyContainer>
                    <S.OptionsButton
                        className="keep-next no-bg"
                        onClick={() =>
                            handleInteractionClick(INTERACTIONS.downvote)}>
                        <Icon
                            className={`dark-hover ${downvoteButtonClassName}`}
                            xlinkHref={thumbsDown}
                            height="16px"
                            width="16px"
                            fill="grey-tint-neutral" />
                    </S.OptionsButton>
                    <S.TallyCount>
                        {interaction.downvote.success ?
                            data.downvotes + 1 : data.downvotes}
                    </S.TallyCount>
                </S.TallyContainer>
            </S.FlexContainer>
            <S.ServerErrorHelper
                className={interactServerError ? "show" : ""}>
                Error connecting with the server at this time.
            </S.ServerErrorHelper>
            {!hasReplies && isRoot &&
                <S.HorizontalRuler
                    className="small-margin hover-color"
                    color="grey-tint-lighter"
                    thin />
            }
            {
                hasReplies &&
                <>
                    {data.depth > maxDepth ?
                        replies.map((reply) => (
                            <Comment
                                key={reply._id}
                                data={reply}
                                getRelativeTime={getRelativeTime}
                                viewport={viewport} />
                        )) :
                        <S.RepliesWrapper>
                            {replies.map((reply) => (
                                <Comment
                                    key={reply._id}
                                    data={reply}
                                    getRelativeTime={getRelativeTime}
                                    viewport={viewport} />
                            ))}
                        </S.RepliesWrapper>
                    }
                    {isRoot &&
                        <S.HorizontalRuler
                            className="small-margin hover-color"
                            color="grey-tint-lighter"
                            thin />
                    }
                </>
            }
        </S.CommentWrapper>
    );
};

Comment.propTypes = {
    /**
     * The comment data object.
     */
    data: PropTypes.object,
    /**
     * Function which gets the relative time the comment
     * was posted, based on a given timestamp.
     */
    getRelativeTime: PropTypes.func,
    /**
     * Viewport Redux state.
     *
     * - Contains information about the viewport.
     * - We are passing it down from the parent to avoid
     * having to connect each comment component to the Redux store
     * and fetch the viewport state.
     */
    viewport: PropTypes.object,
};

export default Comment;
