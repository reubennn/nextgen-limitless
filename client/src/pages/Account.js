/* eslint-disable max-len */
import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { DateTime } from "luxon";
import { getRelativeTime } from "../scripts/getTime";

import Navbar from "../components/Navbar";
import Emoji from "../components/Emoji";

import trianglifyBackground from ".../images/trianglify2.svg";

import * as S from "../styles/styled-components/styled";

/**
 * A React Component page for the store.
 *
 * @return {Component} the store page
 */
const Account = () => {
    /** Store the current time in state which we can update */
    const [now, setNow] = useState(DateTime.local());

    /** Get the authenticated user data */
    const { user } = useAuth0();

    /** Deconstruct the data to make it easier to access */
    const {
        nickname,
        picture: avatarUrl,
        email,
        email_verified: emailVerified,
        updated_at: lastLogin,
    } = user;

    /** Get a nicely formatted date the last login occurred. */
    const lastLoginExact =
        DateTime
            .fromISO(lastLogin)
            .toLocaleString({
                weekday: "long",
                month: "long",
                day: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
            });

    /**
     * useEffect which sets up an interval, which will update the current
     * time every minute.
     */
    useEffect(() => {
        let isMounted = true;
        let updateTimeInterval;
        if (isMounted) {
            updateTimeInterval = setInterval(() =>
                setNow(DateTime.local()), 1000 * 60);
        }
        /** Clean-up: clear interval when unmounted to avoid memory leaks */
        return () => {
            isMounted = false;
            clearInterval(updateTimeInterval);
        };
    }, []);

    return (
        <>
            <Navbar />
            <S.TopHeader>
                <S.BackgroundImage src={trianglifyBackground} />
                <S.GradientOverlay className="account" opacity={0.15} />
                <S.Header
                    as="h1"
                    className="feature-text-dark"
                    color="grey-shade-dark" >
                    Hi, {nickname}! <Emoji emoji="👋" />
                </S.Header>
                <S.Header
                    as="h4"
                    className="feature-text-dark header-secondary"
                    color="grey-shade-dark" >
                    View your account information here.
                </S.Header>
            </S.TopHeader>
            <S.MainPageBody>
                <S.Section
                    color="grey-shade-dark">
                    <S.FlexContainer>
                        <S.Image
                            className="justify-right"
                            src={avatarUrl}
                            alt="User avatar"
                            height="50px"
                            width="50px"
                            circle />
                        <S.Header
                            as="h5"
                            className="feature-text-dark justify-left-1rem"
                            color="grey-shade-dark" >
                            {nickname}
                        </S.Header>
                    </S.FlexContainer>
                    {emailVerified ?
                        <S.Header as="h4">
                            Thanks for verifying your email
                            <S.InlineAnchor
                                color="blue-neutral"
                                href="/account"
                                rel="noreferrer">
                                {email}
                                <S.FullStop />
                            </S.InlineAnchor>
                        </S.Header> :
                        <S.Header as="h4">
                            You still need to verify your email
                            <S.InlineAnchor
                                color="blue-neutral"
                                href="/account"
                                rel="noreferrer">
                                {email}.
                            </S.InlineAnchor>
                        </S.Header>
                    }
                    <S.Header as="h5">
                        Your last login was {getRelativeTime(lastLogin, now)}:
                    </S.Header>
                    <S.Header as="h6" className="section-top">
                        {lastLoginExact}
                    </S.Header>
                </S.Section>
            </S.MainPageBody>
        </>
    );
};

export default Account;
