import styled from "styled-components";

export const Header = styled.h1`
    & {
        color: #fff;
        background-color: ${(props) => props.theme.colorDark};
        padding: 0.5rem;
        padding-left: 0.75rem;
        border-radius: 0.2rem;
        margin: 1rem 0;
        font-size: ${(props) => props.small ? "1.5rem" : "2.25rem"};
    }
`;

Header.defaultProps = {
    theme: {
        colorDark: "#303030",
        small: false,
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

    & hr:nth-child(2) {
        border: 0;
        height: 0;
        border-top: 0.1rem solid ${(props) => props.theme.colorDark};
        margin-bottom: 2rem;
    }
`;

ArticleSample.defaultProps = {
    theme: {
        colorDark: "#303030",
    },
};
