import React from "react";
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
    skipRuler = false,
    depth = 0,
    viewport,
}) => {
    const currentDepth = depth + 1;
    let maxDepth;

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

    const upvoteComment = (objectID) => {
        console.log(objectID);
    };

    const downvoteComment = (objectID) => {
        console.log(objectID);
    };

    const replyToComment = (objectID) => {
        console.log(objectID);
    };

    return (
        <>
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
                        onClick={() => replyToComment(data._id)}>
                        Reply
                    </S.OptionsButton>
                    <S.TallyContainer>
                        <S.OptionsButton
                            className="keep-next no-bg"
                            onClick={() => upvoteComment(data._id)}>
                            <Icon
                                className="dark-hover"
                                xlinkHref={thumbsUp}
                                height="16px"
                                width="16px"
                                fill="grey-tint-neutral" />
                        </S.OptionsButton>
                        <S.TallyCount>
                            {data.upvotes}
                        </S.TallyCount>
                    </S.TallyContainer>
                    <S.TallyContainer>
                        <S.OptionsButton
                            className="keep-next no-bg"
                            onClick={() => downvoteComment(data._id)}>
                            <Icon
                                className="dark-hover"
                                xlinkHref={thumbsDown}
                                height="16px"
                                width="16px"
                                fill="grey-tint-neutral" />
                        </S.OptionsButton>
                        <S.TallyCount>
                            {data.downvotes}
                        </S.TallyCount>
                    </S.TallyContainer>
                </S.FlexContainer>
                {!skipRuler &&
                    <S.HorizontalRuler
                        className="small-margin"
                        color="grey-tint-lighter"
                        thin />
                }
                {
                    data.replies.length > 0 &&
                    <>
                        {currentDepth > maxDepth ?
                            data.replies.map((reply, key) => (
                                <Comment
                                    key={key}
                                    data={reply}
                                    getRelativeTime={getRelativeTime}
                                    skipRuler={key === data.replies.length - 1 ?
                                        true : false}
                                    depth={currentDepth}
                                    viewport={viewport} />
                            )) :
                            <S.RepliesWrapper>
                                {data.replies.map((reply, key) => (
                                    <Comment
                                        key={key}
                                        data={reply}
                                        getRelativeTime={getRelativeTime}
                                        skipRuler={key === data.replies.length - 1 ?
                                            true : false}
                                        depth={currentDepth}
                                        viewport={viewport} />
                                ))}
                            </S.RepliesWrapper>
                        }
                        <S.HorizontalRuler
                            className="small-margin"
                            color="grey-tint-lighter"
                            thin />
                    </>
                }
            </S.CommentWrapper>
        </>
    );
};

Comment.propTypes = {
    data: PropTypes.object,
    getRelativeTime: PropTypes.func,
    skipRuler: PropTypes.bool,
    depth: PropTypes.number,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

export default Comment;
