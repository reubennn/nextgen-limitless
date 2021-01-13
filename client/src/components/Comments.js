import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
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

import {
    avatars,
    getRandomAvatar,
    getRandomAvatars,
} from "../data/avatars";

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
    /** Store random avatars into state so they do not update and change */
    const initialState = getRandomAvatars(avatars, comments.length);
    const [randomAvatars, setRandomAvatars] = useState(initialState);

    const smallerViewport = viewport.size.is.lessThan.small;
    const hasComments = comments.length > 0;

    /**
     * useEffect which is called when a new comment is added
     *
     * - For generating a mock data avatar for a new comment.
     */
    useEffect(() => {
        setRandomAvatars((prevState) => [
            ...prevState,
            getRandomAvatar(avatars),
        ]);
    }, [comments.length]);

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
                                src={randomAvatars[key]}
                                alt="Avatar" />
                            <S.FlexContainer
                                column
                                className="no-margin">
                                <S.CommentUser>
                                    {item.name}
                                </S.CommentUser>
                                <S.CommentTimestamp>
                                    2 days ago
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
                                    {typeof item.upvotes !== "undefined" ?
                                        item.upvotes : "17"}
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
                                    {typeof item.downvotes !== "undefined" ?
                                        item.downvotes : "4"}
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
