import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as S from "../styles/styled-components";

const ArticlesList = ({ articles }) => (
    <>
        {articles.map((article, key) => (
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

ArticlesList.propTypes = {
    articles: PropTypes.array.isRequired,
};

export default ArticlesList;
