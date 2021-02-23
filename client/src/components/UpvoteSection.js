import React, { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";
import useSecuredApi from "../hooks/useSecuredApi";

import * as S from "../styles/styled-components/styled";

/**
 * React Component to display the upvotes section of an article.
 *
 * @return {Component} upvote section
 */
const UpvoteSection = ({ articlePath, upvotes, setArticle }) => {
    const [hasUpvoted, setHasUpvoted] = useState(false);

    /** useRef Mount status for cleanup and avoiding memory leaks  */
    const isMounted = useRef(true);

    /** Check if user is authenticated with Auth0 authentication */
    const { isAuthenticated, loginWithRedirect } = useAuth0();

    const upvoteRequestUrl = `/api/articles/${articlePath}/upvote`;
    const downvoteRequestUrl = `/api/articles/${articlePath}/downvote`;
    const requestOptions = { method: "POST" };

    /** Custom React Hooks for sending HTTP request to secure API endpoints */
    const {
        state: upvoteRequestState,
        securedApiRequest: securedApiUpvoteRequest,
    } = useSecuredApi(upvoteRequestUrl, requestOptions);
    const {
        state: downvoteRequestState,
        securedApiRequest: securedApiDownvoteRequest,
    } = useSecuredApi(downvoteRequestUrl, requestOptions);

    /**
     * Handler function which redirects the user
     * to the account log in page for Auth0, while storing the current
     * url to the appState to use upon redirect callback.
     */
    const redirectToAuthLogin = () => {
        loginWithRedirect({
            /** Pass the current url so Auth0 knows where to redirect back to */
            appState: {
                returnTo: window.location.pathname,
            },
        });
    };

    /**
     * Function called during upvote button on click event.
     * - Sends POST request to server API to add an upvote to the database.
     * - Updates the article info with the new upvote number.
     */
    const upvoteArticle = async () => {
        if (isAuthenticated) {
            if (!hasUpvoted) {
                securedApiUpvoteRequest();
            } else {
                securedApiDownvoteRequest();
            }
        } else {
            redirectToAuthLogin();
        }
    };

    /**
     * useEffect which performs cleanup, setting isMounted to false.
     *
     * - This ensures subscriptions and async tasks are cancelled
     * while the component is unmounted.
     */
    useEffect(() => {
        return () => {
            isMounted.current = false;
        };
    }, []);

    /**
     * useEffect triggered when the upvoteRequestState receives a response
     * from the API.
     *
     * - If no errors, update the article and set hasUpvoted flag.
     */
    useEffect(() => {
        if (isMounted.current) {
            if (upvoteRequestState.data !== null) {
                const { body, response } = upvoteRequestState.data;
                if (response.status === 200 && isMounted.current) {
                    setArticle(body.value);
                    setHasUpvoted(true);
                }
            } else if (upvoteRequestState.error !== null) {
                console.error(upvoteRequestState.error);
            }
        }
    }, [upvoteRequestState]);

    /**
     * useEffect triggered when the downvoteRequestState receives a response
     * from the API.
     *
     * - If no errors, update the article and set hasUpvoted flag.
     */
    useEffect(() => {
        if (isMounted.current) {
            if (downvoteRequestState.data !== null) {
                const { body, response } = downvoteRequestState.data;
                if (response.status === 200 && isMounted.current) {
                    setArticle(body.value);
                    setHasUpvoted(false);
                }
            } else if (downvoteRequestState.error !== null) {
                console.error(downvoteRequestState.error);
            }
        }
    }, [downvoteRequestState]);

    /**
     * Check if upvotes are 1.
     * -Used to generate conditional rendering to ensure the grammar is correct.
     */
    let upvotesIsOne = false;
    if (upvotes === 1) {
        upvotesIsOne = true;
    }

    return (
        <>
            <S.UpvoteSection>
                <i>This post has been upvoted <b>{upvotes}</b> time
                    {!upvotesIsOne && "s"}</i>
                <S.Button
                    className="upvote-button gradient justify-center"
                    $radius="0.5rem"
                    onClick={() => upvoteArticle()}>
                    {hasUpvoted ? "-1" : "+1"}
                </S.Button>
            </S.UpvoteSection>
            <S.HorizontalRuler thin smallMargin color="grey-tint-neutral" />
        </>
    );
};

UpvoteSection.propTypes = {
    /**
     * The article url articlePath.
     */
    articlePath: PropTypes.string,
    /**
     * The number of upvotes the article has.
     */
    upvotes: PropTypes.number,
    /**
     * useState React Hook passed down as props to update the article info
     * to include the new upvote value.
     */
    setArticle: PropTypes.func,
};

export default UpvoteSection;
