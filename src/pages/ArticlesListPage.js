/* eslint-disable max-len */
import React from "react";
import { Link } from "react-router-dom";

import articleContent from "./articleContent";

import * as S from "../styles/styled-components";

const ArticlesListPage = () => (
    <>
        <S.Header>Articles</S.Header>
        {articleContent.map((article, key) => (
            <S.ArticleSample key={key}>
                <Link to={`/article/${article.name}`}>
                    <h3>{article.title}</h3>
                    {/* Get the first 150 characters from the article */}
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
                <hr></hr>
            </S.ArticleSample>
        ))}
    </>
);

export default ArticlesListPage;
