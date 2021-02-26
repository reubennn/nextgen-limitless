/* eslint-disable max-len */
import React from "react";

import Navbar from "../components/Navbar";
import LoadingIcon from "../components/LoadingIcon";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component loading screen page.
 *
 * @return {Component} loading screen page
 */
const Loading = () => {
    return (
        <>
            <Navbar />
            <S.MainPageBody>
            </S.MainPageBody>
            <S.LoadingPlaceholder>
                <S.CenterInViewport>
                    <LoadingIcon />
                </S.CenterInViewport>
            </S.LoadingPlaceholder>
        </>
    );
};

export default Loading;
