import React from "react";
import articleContent from "./articleContent";
import * as S from "../styles/pageStyling";

/**
 * Component for displaying an Article page
 *
 * @param {String} props.match passed down from :name in URL
 * @return {*} an article page for a given topic
 */
const ArticlePage = ({ match }) => {
    const name = match.params.name;
    const article = articleContent.find((article) => article.name === name);

    if (!article) {
        return (
            <>
                <S.Header>404 Error: Page Not Found</S.Header>
                <p style={{ textAlign: "center" }}>
                    Oops.. That article doesn&apos;t seem to exist!
                </p>
            </>
        );
    }

    return (
        <>
            <S.Header>{article.title}</S.Header>
            {article.content.map((paragraph, key) => (
                <p key={key}>{paragraph}</p>
            ))}
        </>
    );
};

export default ArticlePage;
