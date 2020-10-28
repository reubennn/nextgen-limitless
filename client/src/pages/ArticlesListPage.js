/* eslint-disable max-len */
import React from "react";
import PropTypes from "prop-types";

/** ~~~~ Redux ~~~~ **/
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
    getloadStatusState,
} from "../selectors/articleSelectors";

/** ~~~~ styled-components ~~~~ **/
import * as S from "../styles/styled-components";

/** ~~~~ React Components ~~~~ **/
import ArticlesList from "../components/ArticlesList";

const ArticlesListPage = ({ loadStatus }) => (
    <>
        {!loadStatus.failed && <S.Header>Articles</S.Header>}
        <ArticlesList />
    </>
);

ArticlesListPage.propTypes = {
    loadStatus: PropTypes.object,
};

const mapStateToProps = (state) => ({
    loadStatus: getloadStatusState(state),
});

export default connect(mapStateToProps)(ArticlesListPage);
