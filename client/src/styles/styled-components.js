/* eslint-disable valid-jsdoc */
import styled, { keyframes } from "styled-components";

const theme = {
    colorDark: "#303030",
    colorLight: "#bdbdbd",
    colorGrey: "#7b7b7b",
};


/**
 * Rotation Keyframe
 */
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

/**
 * Header Component
 */
export const Header = styled.h1`
    & {
        color: #fff;
        background-color: ${theme.colorDark};
        padding: 0.5rem;
        padding-left: 0.75rem;
        border-radius: 0.2rem;
        font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
        margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
    }
`;

/**
 * HorizontalRuler Component
 */
export const HorizontalRuler = styled.hr`
    border: 0;
    height: 0;
    width: ${(props) => props.width};
    border-top: ${(props) => props.thin ? "0.05rem" : "0.1rem"}
                solid
                ${(props) =>
        props.light ? theme.colorLight : theme.colorDark};
    margin-bottom: ${(props) => props.smallMargin ? "1rem" : "2rem"};
    margin-top: ${(props) => props.smallMargin ? "0.8rem" : "inherit"};
`;

HorizontalRuler.defaultProps = {
    width: "100%",
};

/**
 * ArticleSample Component
 */
export const ArticleSample = styled.div`
    transition: ease-in-out 0.25s;

    p {
        /* Stop word-wrap when hovering */
        max-width: 520px;
    }

    &:hover {
        border-left: 0.1rem solid ${(props) => theme.colorDark};
        border-right: 0.1rem solid ${(props) => theme.colorDark};
        padding: 0 0.5rem;
        transition: ease-in-out 0.25s;
    }

    & > h3 {
        margin-bottom: 0.5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.2;
        display: inline-block;
        font-size: 1.3em;
    }
`;

/**
 * CommentsList Component
 */
export const CommentsList = styled.div`
    & > *:not(${Header}) {
        padding-left: 2rem;
    }

    & > .no-comments {
        margin: 0.5rem auto 2rem auto;
        padding-left: 0rem;
        text-align: center;
    }

    h4 {
        color: ${theme.colorGrey};
        font-size: 0.85rem;
        font-style: italic;
        font-weight: normal;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.5rem 0 1rem 0.5rem;
    }
`;

/**
 * UpvoteSection Component
 */
export const UpvoteSection = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    justify-content: flex-end;

    i:first-of-type {
        /* display: block; */
        margin: auto 0.6rem;
        text-align: right;
    }
`;

/**
 * Button Component
 */
export const Button = styled.button`
    color: #fff;
    background-color: ${theme.colorDark};
    padding: 0.6rem 0.8rem;
    border-radius: 1.5rem;
    transition-duration: 0.4s;
    width: ${(props) => props.width ? props.width : "inherit"};
    margin: auto;

    &:hover {
        background-color: #000;
    }

    &.upvote-button {
        margin: 0;
    }
`;

/**
 * AddCommentForm Component
 */
export const AddCommentForm = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
`;

/**
 * Label Component
 */
export const Label = styled.label`
    margin-top: 0.5rem;
    margin-bottom: 0.25rem;
`;

/**
 * Input Component
 */
export const Input = styled.input`
    outline: 0;
    border: 0.05rem solid ${theme.colorDark};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid #4195fc;
        box-shadow: 0 0 0.3rem #4195fc;
        transition: box-shadow linear 0.2s
    }
`;

/**
 * Input Component
 */
export const TextArea = styled.textarea`
    resize: none;
    outline: 0;
    border: 0.05rem solid ${theme.colorDark};
    padding: 0.5rem 0.7rem;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    resize: none;
    overflow: auto;
	height: auto;
    line-height: 1.2rem;
    box-shadow: none;
    transition: box-shadow linear 0.2s;

    &:focus {
        outline: 0;
        border: 0.05rem solid #4195fc;
        box-shadow: 0 0 0.3rem #4195fc;
        transition: box-shadow linear 0.2s
    }
`;

export const LoadingIcon = styled.nav.attrs({
    className: "LoadingIcon",
})`
    &&& {
        display: block;
        position: relative;
        width: 3rem;
        height: 3rem;
        margin: auto;
    }

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 2rem;
        height: 2rem;
        margin: 0.5rem;
        border: 0.35rem solid ${theme.colorDark};
        border-radius: 50%;
        animation: ${rotate} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: ${theme.colorDark} transparent transparent transparent;

        &:nth-child(1) {
            animation-delay: -0.45s;
        }

        &:nth-child(2) {
            animation-delay: -0.3s;
        }

        &:nth-child(3) {
            animation-delay: -0.15s;
        }
    }
`;

export const CenterInViewport = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%)
`;
