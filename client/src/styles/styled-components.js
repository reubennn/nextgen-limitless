/* eslint-disable valid-jsdoc */
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~ Themes ~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

const theme = {
    colorGrey: "#7b7b7b",
    colorDarkerGrey: "#515151",
    colorLighter: "#bdbdbd",
    colorLight: "#a6a6a6",
    colorDark: "#303030",
    colorDarker: "#222",
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~ Handlers ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Function to handle which color the property should be.
 * Created as some Components may need different color depending on background
 */
const handleColor = (color) => {
    switch (color) {
        case ("white"):
            return "#fff";
        case ("grey"):
            return theme.colorGrey;
        case ("darkerGrey"):
            return theme.colorDarkerGrey;
        case ("lighter"):
            return theme.colorLighter;
        case ("light"):
            return theme.colorLight;
        case ("dark"):
            return theme.colorDark;
        case ("darker"):
            return theme.colorDarker;
        default:
            return theme.colorDark;
    }
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~ Keyframes ~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

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

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~ styled-components ~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Header Component
 */
export const Header = styled.h1.attrs((props) => ({
    color: props.color || "#fff",
    bgColor: props.bgColor || theme.colorDark,
}))`
    & {
        color: ${(props) => props.color};
        background-color: ${(props) => props.bgColor};
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
                ${(props) => handleColor(props.color)};
    margin-bottom: ${(props) => props.smallMargin ? "1rem" : "2rem"};
    margin-top: ${(props) => props.smallMargin ? "0.8rem" : "1.5rem"};

    &.footer-hr {
        border-top: 0.05rem solid ${theme.colorGrey};
        margin-top: 0.8rem;
        margin-bottom: 1rem;
    }
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
    color: ${theme.colorDarkerGrey};
    display: flex;
    flex-direction: row;
    margin-left: 2rem;
    justify-content: flex-end;
    flex-wrap: wrap;

    i:first-of-type {
        /* display: block; */
        margin: auto 0.6rem;
        text-align: right;
    }
`;

/**
 * UpvoteSection Component
 */
export const NotFoundPage = styled.div`
    padding-bottom: calc(100vh - 38rem);
`;

/**
 * Button Component
 */
export const Button = styled.button`
    color: #fff;
    background-color: ${theme.colorDark};
    padding: 0.6rem 1.2rem;
    padding-top: 0.6rem;
    margin: auto;
    border-radius: 1.5rem;
    transition-duration: 0.4s;
    display: block;

    &:hover {
        background-color: #000;
    }

    &.upvote-button {
        padding: 0.35rem;
        padding-top: 0.25rem;
        margin: 0;
        border-radius: 0.6rem;
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

/**
 * Small Text Component
 */
export const TinyText = styled.p`
    margin: ${(props) => props.margin ? props.margin : "1rem"} 0;
    color: ${(props) => props.light ? theme.colorLight : theme.colorGrey};
    font-size: ${(props) => props.superTiny ? "0.75rem" : "0.85rem"};

    & > span {
        color: ${theme.colorLight};
    }
`;

/**
 * Inherit React Router Link to style it
 */
export const RouterLink = styled(Link)`
    & {
        color: ${(props) => handleColor(props.color)};
        font-size: 1.2rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        color: #303030;
        padding: 0.25rem 0.75rem;
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Inherit React Router Link to style it
 */
export const TinyRouterLink = styled(Link)`
    & {
        color: ${(props) => handleColor(props.color)};
        font-size: 0.75rem;
        margin: 0 0.85rem;
        text-align: center;
        text-decoration: none;
        padding: 0.25rem 0.1rem;
        border-radius: 0.25rem;
        transition: ease-in-out 0.25s;
    }

    &:hover {
        background-color: ${(props) => handleColor(props.color)};
        color: #303030;
        padding: 0.25rem 0.75rem;
        margin: 0 0.2rem;
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Flex-box Container
 */
export const FlexContainer = styled.ul.attrs((props) => ({
    justifyContent: props.justifyContent || "center",
}))`
    color: inherit;
    display: flex;
    flex-wrap: ${(props) => props.wrapContent ? "wrap" : "nowrap"};
    flex-direction: ${(props) => props.column ? "column" : "row"};
    justify-content: ${(props) => props.justifyContent};
    margin: ${(props) => props.smallMargin ? "0.25rem" : "1rem"};

    & > li {
        list-style-type: none;
    }

    & .footer-nav {
        margin: 1rem 3rem;
    }

    & ~ ${TinyRouterLink} {
        margin-top: 0;
    }
`;

/**
 * LoadingIcon Component
 */
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

/**
 * CenterInViewport Component
 *
 * For positioning the element in the center of the viewport
 */
export const CenterInViewport = styled.div`
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
`;

/**
 * Footer Component
 */
export const Footer = styled.footer`
    & {
        color: ${theme.textGrey};
        background-color: ${theme.colorDark};
        font-size: 1.25rem;
        text-align: center;
        text-decoration: none;
        padding: 2rem 0.25rem 0.5rem;
        margin: 0;
        margin-top: 4rem;
        width: 100%;
    }
`;

/**
 * Footer Component
 */
export const ListItem = styled.li`
    & {
        color: inherit;
        margin: 0.3rem 0;
    }
`;

/**
 * Anchor Component
 */
export const Anchor = styled.a`
    text-decoration: none;
    color: ${(props) => handleColor(props.color)};
    transition: ease-in-out 0.75s;

    &:hover {
        border-bottom: 1px solid ${(props) => handleColor(props.color)};
        transition: ease-in-out 0.25s;
    }
`;

/**
 * Inline Anchor Component
 */
export const InlineAnchor = styled(Anchor)`
    &::before {
        content: " ";
    }

    &:hover::before {
        text-decoration: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)}
    }

    &::after {
        content: " ";
    }

    &:hover::after {
        border-bottom: none;
        border-bottom: 1px solid ${(props) => handleColor(props.bgColor)}
    }
`;

/**
 * Loading Placeholder Component to leave blank space
 * while the page content is loading / fetching from the server.
 *
 * Particularly useful to ensure the footer stays off the screen.
 */
export const LoadingPlaceholder = styled.div`
    height: auto;
    min-height: 100vh;
    width: 100%;
`;

/**
 * Social Media Button Link Component
 */
export const SocialMediaButton = styled.a`
    text-decoration: none;
    margin: 0 0.5rem;

    & > svg {
        fill: ${(props) => handleColor(props.color)};
        transition: ease-in-out 0.3s;
    }

    & > svg:hover {
        fill: #000;
        transition: ease-in-out 0.4s;
        }

    &.footer-icon > svg:hover {
        fill: #fff;
    }
`;
