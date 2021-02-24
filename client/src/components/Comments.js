import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import { connect } from "react-redux";
import { handleFetchWithController } from "../api/handleFetch";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import AddCommentForm from "./AddCommentForm";
import Comment from "./Comment";
import DropdownMenu from "./DropdownMenu";

import * as S from "../styles/styled-components/styled";

/**
 * React Component which displays a list of the articles comments.
 *
 * If the article has no comments, a message is displayed
 * to invite the user to make a new comment.
 *
 * @return {Component} list of comments if any exist
 */
const Comments = ({
    articlePath,
    viewport,
}) => {
    /** Store the current time into state */
    const [now, setNow] = useState(DateTime.local());

    /** Store comment states */
    const [sortingMethod, setSortingMethod] = useState("Interaction");
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState(null);

    const smallerViewport = viewport.size.is.lessThan.small;
    const hasComments = comments.length > 0;

    /** useRef for our AddCommentForm Component for the scrolling event */
    const commentFormRef = useRef(null);

    /**
     * Function which fetches all comments associated with the article.
     *
     * @param {AbortController} controller AbortController used to cancel fetch
     * @return {Object} HTTP response parameters
     * @return {*} HTTP response object or null if empty or aborted
     *      - @property {Object} result HTTP response values
     *      - @property {Object} body the data sent from the server
     */
    const fetchComments = async (controller) => {
        const result = await handleFetchWithController(
            controller,
            async (controller) => {
                const result = await fetch(`/api/comments/${articlePath}`,
                    { signal: controller.signal },
                );
                const body = await result.json();
                return {
                    result,
                    body,
                };
            });
        return result;
    };

    /**
     * useEffect which sets up an interval, which will update the current
     * time every minute.
     *
     * - Keeps the user updated about how long a commented was posted without
     * having to refresh the page.
     * - Only relevant for timestamps less than an hour ago.
     * - Unsubscribes the promise if component is unmounted, to avoid
     * any memory leaks.
     *
     */
    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();
        if (isMounted) {
            fetchComments(controller)
                .then((response) => {
                    if (isMounted && response !== null) {
                        if (response.result.status !== 200) {
                            console.log(
                                `Error code: ${response.result.status}`);
                        } else {
                            setComments(response.body);
                        }
                    }
                });
        }
        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [articlePath]);

    /**
     * useEffect called when a new comment has been added by the
     * New Comment Form.
     *
     * - Append the new comment to the comments array.
     * - Adding a new comment will trigger the sort useEffect.
     * - Reset newComment to initial state.
     *
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && newComment !== null) {
            setComments((prevState) => [
                ...prevState,
                newComment,
            ]);
            setNewComment(null);
        }
        return () => {
            isMounted = false;
        };
    }, [newComment]);

    /**
     * useEffect which sets up an interval, which will update the current
     * time every minute.
     *
     * - Keeps the user updated about how long a commented was posted without
     * having to refresh the page.
     * - Only relevant for timestamps less than an hour ago.
     *
     */
    useEffect(() => {
        let isMounted = true;
        let updateTimeInterval;
        if (isMounted) {
            updateTimeInterval = setInterval(() =>
                setNow(DateTime.local()), 1000 * 60);
        }
        /** Clean-up: clear interval when unmounted to avoid memory leaks */
        return () => {
            isMounted = false;
            clearInterval(updateTimeInterval);
        };
    }, []);

    /**
     * useEffect which is called when the sorting method is changed,
     * or a new comment is added.
     *
     * - Sorts the comments based on the sorting method and updates the state.
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
            setComments([
                ...comments.sort((a, b) => sortCompareAlgorithm(a, b)),
            ]);
        }
        return () => {
            isMounted = false;
        };
    }, [sortingMethod, comments.length]);

    /**
     * Algorithm to determine how to sort the elements depending
     * on the sorting method specified from the select drop-down.
     *
     * @param {Object} a first element to compare
     * @param {Object} b second element to compare
     * @return {Number} value which determines the sorting method
     */
    const sortCompareAlgorithm = (a, b) => {
        const dateTimeA = DateTime.fromISO(a.timestamp);
        const dateTimeB = DateTime.fromISO(b.timestamp);
        if (sortingMethod === "Interaction") {
            if ((a.upvotes + a.downvotes) > (b.upvotes + b.downvotes)) {
                return -1;
            } else if ((a.upvotes + a.downvotes) < (b.upvotes + b.downvotes)) {
                return 1;
            } else {
                return dateTimeB.minus(dateTimeA.ts);
            }
        } else if (sortingMethod === "Newest") {
            return dateTimeB.minus(dateTimeA.ts);
        } else if (sortingMethod === "Oldest") {
            return dateTimeA.minus(dateTimeB.ts);
        }
    };

    /**
     * Function which gets the relative time since a given date-time timestamp.
     *
     * - Uses Luxon library to determine deconstructed years, months, days,
     * hours, minutes and seconds since the timestamp to now.
     * - Depending how long ago, it will return that it was posted some time
     * ago.
     *
     * @param {Date} timestamp posted date-time
     * @return {String} time since the given date-time
     */
    const getRelativeTime = (timestamp) => {
        const posted = DateTime.fromISO(timestamp);
        const delta = now.diff(
            posted, ["years", "months", "days", "hours", "minutes", "seconds"])
            .toObject();
        const { years, months, days, hours, minutes, seconds } = delta;
        if (years > 0) {
            return `${years} year${years === 1 ? "" : "s"} ago`;
        } else if (months > 0) {
            return `${months} month${months === 1 ? "" : "s"} ago`;
        } else if (days > 0) {
            return `${days} day${days === 1 ? "" : "s"} ago`;
        } else if (hours > 0) {
            return `${hours} hour${hours === 1 ? "" : "s"} ago`;
        } else if (minutes > 0) {
            return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
        }
        const secondsAsInt = parseInt(seconds);
        return seconds < 1 ?
            "Just now" :
            `${secondsAsInt} second${secondsAsInt === 1 ? "" : "s"} ago`;
    };

    /**
     * Handler function to smoothly scroll the page so the add comment
     * form is in the center of the viewport.
     *
     * - Called when the user presses the "quick" comment button
     * at the top of the conversation section.
     */
    const scrollToCommentForm = () => {
        commentFormRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
        });
    };

    return (
        <>
            <S.FlexContainer
                smallMargin
                justifyContent="flex-start"
                column={smallerViewport}>
                <S.Header
                    as="h2"
                    className={`uppercase no-margin ${smallerViewport &&
                        "justify-left"}`}>
                    Conversation
                </S.Header>
                {hasComments &&
                    <S.HeaderAssistant
                        as="h3"
                        className={`align-center uppercase ${smallerViewport &&
                            "justify-left"}`}>
                        <b>{comments.length}</b> Comment
                        {comments.length !== 1 ? "s" : ""}
                    </S.HeaderAssistant>}
            </S.FlexContainer>
            <S.HorizontalRuler
                color="grey-tint-neutral"
                noMargin
                thin />
            <S.ConversationSection type={viewport.type}>
                {hasComments &&
                    <S.FlexContainer smallMargin column={smallerViewport}>
                        {smallerViewport &&
                            <>
                                <S.Button
                                    className="gradient uppercase
                                    comments-section justify-center"
                                    $radius="0.5rem"
                                    onClick={scrollToCommentForm}>
                                    Comment
                                </S.Button>
                                <br />
                            </>
                        }
                        <S.FlexContainer className="no-margin">
                            <S.Label className="uppercase align-center
                        comments-section">
                                Sort by:
                            </S.Label>
                            <DropdownMenu
                                onSelection={setSortingMethod}>
                                <S.DropdownChild value="Interaction">
                                    Interaction
                                </S.DropdownChild>
                                <S.DropdownChild value="Newest">
                                    Newest
                                </S.DropdownChild>
                                <S.DropdownChild value="Oldest">
                                    Oldest
                                </S.DropdownChild>
                            </DropdownMenu>
                        </S.FlexContainer>
                        {!smallerViewport &&
                            <S.Button
                                className="gradient uppercase comments-section
                                justify-right"
                                $radius="0.5rem"
                                onClick={scrollToCommentForm}>
                                Comment
                            </S.Button>
                        }
                    </S.FlexContainer>
                }
                <S.HorizontalRuler
                    className="small-margin"
                    color="grey-tint-lighter"
                    thin />
                {!hasComments &&
                    <>
                        <p className="center-text">
                            There are no comments to display.
                            Feel free to comment using the form below!
                        </p>
                        <S.HorizontalRuler
                            className="small-margin"
                            color="grey-tint-lighter"
                            thin />
                    </>
                }
                {comments.map((comment) => (
                    <Comment
                        key={comment._id}
                        data={comment}
                        getRelativeTime={getRelativeTime}
                        viewport={viewport} />
                ))}
            </S.ConversationSection>
            <AddCommentForm
                className={smallerViewport &&
                    "small-viewport"}
                articlePath={articlePath}
                setNewComment={setNewComment}
                ref={commentFormRef} />
        </>
    );
};

Comments.propTypes = {
    /**
     * Array of comments
     */
    comments: PropTypes.array,
    /**
     * The article url articlePath.
     */
    articlePath: PropTypes.string,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props as Redux Selectors to connect the Component to the Redux store
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    viewport: {
        dimensions: getViewportDimensions(state),
        size: getViewportSize(state),
        type: getViewportType(state),
    },
});

export default connect(mapStateToProps)(Comments);
