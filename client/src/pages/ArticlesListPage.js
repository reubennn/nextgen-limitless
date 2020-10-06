/* eslint-disable max-len */
import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./articleContent";

import * as S from "../styles/styled-components";

const ArticlesListPage = () => (
    <>
        <S.Header>Articles</S.Header>
        <ArticlesList articles={articleContent}/>
    </>
);

export default ArticlesListPage;
