import styled from "styled-components";

export const Header = styled.h1`
    & {
        color: #fff;
        background-color: ${(props) => props.theme.colorDark};
        padding: 0.5rem;
        padding-left: 0.75rem;
        border-radius: 0.2rem;
        font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
        margin: ${(props) => props.small ? "2.5rem 0 1.5rem 0" : "1rem 0"};
    }
`;

Header.defaultProps = {
    theme: {
        colorDark: "#303030",
    },
};

export const HorizontalRuler = styled.hr`
    border: 0;
    height: 0;
    border-top: ${(props) => props.thin ? "0.05rem" : "0.1rem"}
                solid
                ${(props) =>
        props.light ? props.theme.colorLight : props.theme.colorDark};
    margin-bottom: 2rem;
`;

HorizontalRuler.defaultProps = {
    theme: {
        colorDark: "#303030",
        colorLight: "#bdbdbd",
    },
};

export const ArticleSample = styled.div`
    transition: ease-in-out 0.25s;

    p {
        /* Stop word-wrap when hovering */
        max-width: 520px;
    }

    &:hover {
        border-left: 0.1rem solid ${(props) => props.theme.colorDark};
        border-right: 0.1rem solid ${(props) => props.theme.colorDark};
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

ArticleSample.defaultProps = {
    theme: {
        colorDark: "#303030",
    },
};

export const ArticlePage = styled.div`
    i:last-of-type {
        display: block;
        margin: 1rem auto 1.5rem auto;
        text-align: right;
    }
`;

export const CommentsList = styled.div`
    & > *:not(${Header}) {
        padding-left: 2rem;
    }

    h4 {
        color: #7B7B7B;
        font-size: 0.85rem;
        font-style: italic;
        font-weight: normal;
        margin-bottom: 0.5rem;
    }

    p {
        margin: 0.5rem 0 1rem 0.5rem;
    }
`;
