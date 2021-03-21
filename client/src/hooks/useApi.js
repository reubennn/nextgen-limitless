import { useState, useEffect, useRef } from "react";
import { handleFetchWithController } from "../api/handleFetch";

/**
 * Custom React Hook which is used to perform a call a secured server
 * API endpoint which requires an authenticated Auth0 user to be logged in.
 *
 * @param {String} url API url to call in fetch
 * @param {Object} initialOptions fetch options
 * @return {Object} result of the API call
 *
 * @example
 * // Simple use case of this custom React Hook:
 * Call the url with specified options and assign the resultant state variables:
 * const {
 *      state: result,
 *      securedApiRequest,
 *      securedApiRequestWithOptions,
 * } = useSecuredApi(url, options);
 *
 * Now we can now access the following:
 *      - result.loading: loading status
 *      - result.error: error if exists
 * ~ Fetch Failure ~
 *      - result.data: null
 * ~ Fetch Success ~
 *      - result.data.response: fetch response
 *      - result.data.body: fetch response body
 *
 * Perform the fetch call again simply by calling securedApiRequest();
 * Perform the fetch call with new options by calling
 * securedApiRequestWithOptions(newOptions);
 */
const useApi = (url, initialOptions = {}) => {
    const initialState = {
        error: null,
        loading: false,
        data: null,
    };
    const [state, setState] = useState(initialState);
    const [options, setOptions] = useState(initialOptions);
    const [callApi, setCallApi] = useState(false);

    /** useRef Mount status for cleanup and avoiding memory leaks  */
    const isMounted = useRef(true);

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
     * Async useEffect which performs the fetch call to the server API.
     *
     * - Gets Auth0 bearer access token.
     * - Uses the token to access the secured endpoint route, to access
     * protected HTTP request methods and resources.
     * - Updates the state with the data once fetched.
     */
    useEffect(() => {
        const controller = new AbortController();
        if (isMounted.current && callApi) {
            (async () => {
                try {
                    if (isMounted.current) {
                        setState({
                            error: null,
                            loading: true,
                            data: null,
                        });
                    }
                    const headers = options.headers !== undefined &&
                        {
                            ...options.headers,
                        };
                    const response =
                        await handleFetchWithController(
                            controller, async (controller) => {
                                return await fetch(
                                    url,
                                    {
                                        ...options,
                                        headers: headers,
                                        signal: controller.signal,
                                    },
                                );
                            });
                    if (response === null && isMounted.current) {
                        setState({
                            error: null,
                            loading: false,
                            data: null,
                        });
                    } else {
                        const body = await response.json();
                        if (isMounted.current) {
                            setState({
                                error: null,
                                loading: false,
                                data: {
                                    response,
                                    body,
                                },
                            });
                        }
                    }
                } catch (error) {
                    if (isMounted.current) {
                        setState({
                            ...state,
                            error,
                            loading: false,
                        });
                    }
                } finally {
                    if (isMounted.current) {
                        setCallApi(false);
                    }
                }
            })();
        }
        return () => {
            controller.abort();
        };
    }, [callApi]);

    /**
     * useEffect called when the HTTP options have been updated.
     *
     * - Options are only updated when securedApiRequestWithOptions is called.
     * - So we need to trigger the API call as soon as the options state
     * has been updated.
     */
    useEffect(() => {
        if (options !== initialOptions) {
            triggerApiCall();
        }
    }, [options]);

    /**
     * Function which sets the callApi state to true,
     * which in turn triggers the above useEffect to call
     * the API.
     */
    const triggerApiCall = () => {
        if (isMounted.current) {
            setCallApi(true);
        }
    };

    /**
     * Function which updates the HTTP options.
     *
     * @param {Object} options HTTP request options
     */
    const updateOptions = (options) => {
        if (isMounted.current) {
            setOptions(options);
        }
    };

    return {
        state,
        apiRequest: triggerApiCall,
        apiRequestWithOptions: (options) => updateOptions(options),
    };
};

export default useApi;
