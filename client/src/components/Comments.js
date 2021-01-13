import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { DateTime } from "luxon";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import Icon from "./Icon";
import AddCommentForm from "./AddCommentForm";

import moreOptions from ".../icons/more-options.svg";
import thumbsUp from ".../icons/thumbs-up.svg";
import thumbsDown from ".../icons/thumbs-down.svg";

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
    comments,
    articlePath,
    setArticle,
    viewport,
}) => {
    const [now, setNow] = useState(DateTime.local());

    const smallerViewport = viewport.size.is.lessThan.small;
    const hasComments = comments.length > 0;

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
        return `${secondsAsInt} second${secondsAsInt === 1 ? "" : "s"} ago`;
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
                                    comments-section justify-center">
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
                            <S.SelectSort name="sort" className="uppercase">
                                <S.Option value="Popular">Popular</S.Option>
                                <S.Option value="Newest">Newest</S.Option>
                                <S.Option value="Oldest">Oldest</S.Option>
                            </S.SelectSort>
                        </S.FlexContainer>
                        {!smallerViewport &&
                            <S.Button
                                className="gradient uppercase comments-section
                            justify-right">
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
                {comments.map((item, key) => (
                    <S.CommentWrapper key={key}>
                        <S.FlexContainer
                            className="no-margin"
                            justifyContent="flex-start">
                            <S.UserAvatar
                                src={item.avatar}
                                alt="Avatar" />
                            <S.FlexContainer
                                column
                                className="no-margin">
                                <S.CommentUser>
                                    {item.name}
                                </S.CommentUser>
                                <S.CommentTimestamp>
                                    {getRelativeTime(item.timestamp)}
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
                            {item.comment}
                        </S.CommentText>
                        <S.FlexContainer
                            className="no-margin"
                            justifyContent="flex-start">
                            <S.OptionsButton className="keep-next no-bg">
                                Reply
                            </S.OptionsButton>
                            <S.TallyContainer>
                                <S.OptionsButton className="keep-next no-bg">
                                    <Icon
                                        className="dark-hover"
                                        xlinkHref={thumbsUp}
                                        height="16px"
                                        width="16px"
                                        fill="grey-tint-neutral" />
                                </S.OptionsButton>
                                <S.TallyCount>
                                    {item.upvotes}
                                </S.TallyCount>
                            </S.TallyContainer>
                            <S.TallyContainer>
                                <S.OptionsButton className="keep-next no-bg">
                                    <Icon
                                        className="dark-hover"
                                        xlinkHref={thumbsDown}
                                        height="16px"
                                        width="16px"
                                        fill="grey-tint-neutral" />
                                </S.OptionsButton>
                                <S.TallyCount>
                                    {item.downvotes}
                                </S.TallyCount>
                            </S.TallyContainer>
                        </S.FlexContainer>
                        <S.HorizontalRuler
                            className="small-margin"
                            color="grey-tint-lighter"
                            thin />
                    </S.CommentWrapper>
                ))}
            </S.ConversationSection>
            <AddCommentForm
                className={smallerViewport &&
                    "small-viewport"}
                articlePath={articlePath}
                setArticle={setArticle} />
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
     * useState React Hook passed down as props to update the article info.
     * Not used in this Component, but passed onto AddCommentForm.
     * - Originates from ArticlePage -> CommentsList -> AddCommentForm.
     * - TODO: Use Redux to avoid props drilling.
     */
    setArticle: PropTypes.func,
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
