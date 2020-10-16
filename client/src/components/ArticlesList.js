import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as S from "../styles/styled-components";

const ArticlesList = ({ articleToFilter }) => {
    const [currentArticle, setCurrentArticle] = useState(articleToFilter);
    const [articles, setArticles] = useState({});
    const [loading, setLoading] = useState(true);
    const [otherArticles, setOtherArticles] = useState([]);

    useEffect(() => {
        // Fetch all article content
        const fetchAllArticles = async () => {
            const result = await fetch("/api/articles");
            return await result.json();
        };

        fetchAllArticles().then(fetchedData => {
            setArticles(fetchedData);
        });
        setLoading(true);
    }, [currentArticle]);

    // Populate the other articles list without the current article
    if (typeof articles !== "undefined" && articles.length > 0 && loading) {
        for (let key in articles) {
            if (articles[key].name !== articleToFilter) {
                setOtherArticles((prevState => [
                    ...prevState,
                    articles[key]
                ]));
            }
        }
        setLoading(false);
    }

    // Update state with the clicked on article name and reset the other articles
    const linkOnClick = (articleName) => {
        setCurrentArticle(articleName);
        setOtherArticles([]);
    }

    const content = loading ? <p style={{ textAlign: "center" }}>Loading...</p> :
        otherArticles.map((article, key) => (
            <S.ArticleSample key={key}>
                <Link to={`/article/${article.name}`}
                    onClick={() => linkOnClick(article.name)}>
                    <h3>{article.title}</h3>
                    {/* Get the first 150 characters from the article */}
                    <p>{article.content[0].substring(0, 150)}...</p>
                </Link>
                <S.HorizontalRuler></S.HorizontalRuler>
            </S.ArticleSample>
        ))
    return (
        <>
            {content}
        </>
    )
};

ArticlesList.propTypes = {
    articleToFilter: PropTypes.string
};

export default ArticlesList;
