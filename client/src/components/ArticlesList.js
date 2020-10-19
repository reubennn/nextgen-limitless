import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import * as S from "../styles/styled-components";
import LoadingIcon from "./LoadingIcon";

const ArticlesList = ({ articleToFilter, inArticlePage }) => {
    const [currentArticle, setCurrentArticle] = useState(articleToFilter);
    const [articles, setArticles] = useState({});
    const [loading, setLoading] = useState(true);
    const [otherArticles, setOtherArticles] = useState([]);

    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status

        // Fetch all article content
        const fetchAllArticles = async () => {
            const result = await fetch("/api/articles");
            return await result.json();
        };

        fetchAllArticles().then((fetchedData) => {
            if (isMounted) {
                setArticles(fetchedData);
            }
        });
        if (isMounted) {
            setLoading(true);
        }

        /**
         * useEffect clean-up:
         * if unmounted, set mount status flag to false
         */
        return () => {
            isMounted = false;
        };
    }, [currentArticle]);

    // Populate the other articles list without the current article
    if (typeof articles !== "undefined" && articles.length > 0 && loading) {
        for (const key in articles) {
            if (articles[key].name !== articleToFilter) {
                setOtherArticles((prevState => [
                    ...prevState,
                    articles[key],
                ]));
            }
        }
        setLoading(false);
    }

    /*
     * If linked clicked to navigate to another article,
     * update the state with the clicked on article name,
     * then reset the other articles.
    */
    const linkClicked = (articleName) => {
        setCurrentArticle(articleName);
        setOtherArticles([]);
    };

    /*
     * Ternary operators to determine the content to render.
     *
     * If article list is within an article page, we don't want
     * to display the loading spinner in the center of the viewport
    */
    const content = loading ?
        (
            inArticlePage ?
                <LoadingIcon /> :
                <S.CenterInViewport>
                    <LoadingIcon />
                </S.CenterInViewport>
        ) :
        (
            otherArticles.map((article, key) => (
                <S.ArticleSample key={key}>
                    <Link to={`/article/${article.name}`}
                        onClick={() => linkClicked(article.name)}>
                        <h3>{article.title}</h3>
                        {/* Get the first 150 characters from the article */}
                        <p>{article.content[0].substring(0, 150)}...</p>
                    </Link>
                    <S.HorizontalRuler></S.HorizontalRuler>
                </S.ArticleSample>
            ))
        );

    return (
        <>
            {content}
        </>
    );
};

ArticlesList.propTypes = {
    articleToFilter: PropTypes.string,
    inArticlePage: PropTypes.bool,
};

export default ArticlesList;
