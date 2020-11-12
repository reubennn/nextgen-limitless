/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getLoadStatus } from "../selectors/articleSelectors";

import ArticlesList from "../components/ArticlesList";
import Navbar from "../components/Navbar";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page that displays a list of the articles
 *
 * @return {Component} a page full of article lists
 */
const Articles = ({ loadStatus }) => (
    <>
        <Navbar />
        <S.MainPageBody>
            {!loadStatus.failed && <S.Header>Articles</S.Header>}
            <ArticlesList />
        </S.MainPageBody>
    </>
);

Articles.propTypes = {
    /**
     * Load status of fetching the data
     */
    loadStatus: PropTypes.object,
};

/**
 * Assign props as Redux Selectors to connect the Component to the Redux store
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    loadStatus: getLoadStatus(state),
});

export default connect(mapStateToProps)(Articles);
