import React, { useState, useEffect, useReducer, cloneElement } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import { carouselReducer } from "../reducers/carouselReducers";
import {
    moveCarousel,
    moveToNext,
    moveToPrev,
    updateCurrent,
    switchCurrent,

} from "../actions/carouselActions";

import Icon from "./Icon";

import leftArrow from ".../icons/left-arrow.svg";
import rightArrow from ".../icons/right-arrow.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component that displays a carousel slider, which seemingly
 * moves infinitely left or right.
 *
 * - Must place a child element inside the Carousel to display for each slide.
 * - Each item inside the data array will be transferred to the child component
 * so each item is displayed within the Carousel.
 *
 * @return {Component} carousel slider with specified child for each slide
 *
 * @example
 * // Renders a Carousel with Testimonial Component displayed for each slide.
 * <Carousel initialData={testimonialData}><Testimonial /></Carousel>
 */
const Carousel = ({
    initialData,
    interval,
    transitionTime = 0.5,
    children,
    viewport,
}) => {
    /**
     * Initial Carousel state values.
     */
    const initialState = {
        desired: null,
        current: 1,
        length: initialData.length,
        extended: false,
        data: initialData,
    };

    /**
     * Init function to modify the state for lazy initialization.
     *
     * - Extends the initial data array with buffer elements
     * to create an infinite loop effect:
     *      - First element pushed to last
     *      - Last element inserted at the front
     * - Updates the length.
     *
     * - When user is at the start of the Carousel, pressing previous button
     * will slide left to the "last" element (buffer).
     * - The same occurs in reverse for the next button.
     *
     * @param {Object} initialState the initial Carousel state
     * @return {Object} new state with buffer elements and updated length
     */
    const init = (initialState) => {
        const temp = initialState.data.slice();
        temp.unshift(initialState.data[initialState.data.length - 1]);
        temp.push(initialState.data[0]);
        return {
            ...initialState,
            data: temp,
            length: temp.length,
        };
    };
    /**
     * Set up the Carousel reducer using React Hooks and run the
     * init function immediately for lazy initialization.
     */
    const [state, dispatch] = useReducer(carouselReducer, initialState, init);

    /** Transition CSS properties */
    const transition = {
        smooth: `transform ${transitionTime}s ease`,
        none: "none",
    };

    /** CSS styling properties to be passed to styled-components */
    const [style, setStyle] = useState({
        offset: state.current * -100, // => translateX(offset)
        width: `${100 * (state.length + 2)}%`, // Width in %
        transition: transition.smooth,
    });

    const buffer = {
        first: 0,
        last: state.length - 1,
    };
    const actual = {
        first: 1,
        last: state.length - 2,
    };

    /**
     * useEffect which runs when state.current is changed.
     *
     * If interval is set: automatically move to the next item.
     * - Resets each time the current item is updated, so automatic
     * or manual transition will cause the timer to reset.
     *
     * - If state.current is at the first or last buffer elements,
     *  then we need to turn off style transitions so we can secretly
     * move the Carousel position to the actual position the
     * buffer represents.
     */
    useEffect(() => {
        let isMounted = true; // Flag which denotes mount status
        let timeout;
        if (isMounted) {
            if (interval) {
                timeout = setTimeout(() =>
                    dispatch(moveToNext()), interval * 1000);
            }
            if (state.current === buffer.first) {
                setStyle({
                    ...style,
                    transition: transition.none,
                    offset: actual.last * -100,
                });
            } else if (state.current === buffer.last) {
                setStyle({
                    ...style,
                    transition: transition.none,
                    offset: actual.first * -100,
                });
            }
        }
        /**
         * Clean-up to remove timeout and reset mount status.
         */
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [state.current]);

    /**
     * useEffect which runs when style is changed.
     *
     * - This function is implemented when we set style transition to "none",
     * which allowed us to secretly move the Carousel to the actual element
     * the buffer was representing.
     * - Now that the Carousel has been moved, this function switches to the
     * actual index.
     */
    useEffect(() => {
        let isMounted = true;
        if (isMounted && style.transition === "none") {
            if (state.current === buffer.first) {
                dispatch(switchCurrent(actual.last));
            } else if (state.current === buffer.last) {
                dispatch(switchCurrent(actual.first));
            }
        }
        return () => {
            isMounted = false;
        };
    }, [style]);

    /**
     * useEffect which updates when a desired slide is selected
     * using the Carousel Nav buttons, or the interval timeout
     * triggers the next slide to display.
     *
     * - Updates the offset to move the Carousel, and updates the
     * current value index in state.
     */
    useEffect(() => {
        let isMounted = true;
        let timeout;
        if (isMounted && state.desired !== null) {
            if (state.desired !== state.current) {
                setStyle({
                    ...style,
                    transition: transition.smooth,
                    offset: state.desired * -100,
                });
            };
            timeout = setTimeout(() =>
                dispatch(updateCurrent()), transitionTime * 1000);
        }
        return () => {
            clearTimeout(timeout);
            isMounted = false;
        };
    }, [state.desired]);

    return (
        <>
            <S.CarouselContainer>
                <S.CarouselToggleLeft
                    type={viewport.type}
                    aria-label="Toggle Left"
                    onClick={() =>
                        dispatch(moveToPrev())}>
                    <Icon
                        xlinkHref={leftArrow}
                        height="30px"
                        width="30px"
                        fill="grey-tint-light"
                        bgColor="black-x20"
                        alt="Carousel Left Arrow" />
                </S.CarouselToggleLeft>
                <S.CarouselSlider
                    $offset={style.offset}
                    width={style.width}
                    transition={style.transition}>
                    {state.data.map((item, index) => (
                        <S.CarouselBlock key={index} type={viewport.type}>
                            {cloneElement(children, { item })}
                        </S.CarouselBlock>
                    ))}
                </S.CarouselSlider>
                <S.CarouselToggleRight
                    type={viewport.type}
                    aria-label="Toggle Right"
                    onClick={() =>
                        dispatch(moveToNext())}>
                    <Icon
                        xlinkHref={rightArrow}
                        height="30px"
                        width="30px"
                        fill="grey-tint-light"
                        bgColor="black-x20"
                        alt="Carousel Right Arrow" />
                </S.CarouselToggleRight>
            </S.CarouselContainer >
            <S.CarouselNav>
                {state.data.map((item, index) => {
                    const hidden =
                        index === buffer.first || index === buffer.last ?
                            true : false;
                    return (
                        <S.CarouselNavButton
                            key={index}
                            onClick={() =>
                                dispatch(moveCarousel(index))}
                            current={state.current === index ? true : false}
                            hidden={hidden} />
                    );
                })}
            </S.CarouselNav>
        </>
    );
};

Carousel.propTypes = {
    /**
     * The initial data containing items to be used in the carousel.
     * - Must be in the form of an array of objects.
     */
    initialData: PropTypes.array,
    /**
     * The time to display the item before sliding to the next (in sec).
     */
    interval: PropTypes.number,
    /**
     * The time to transition to the next item (in sec).
     */
    transitionTime: PropTypes.number,
    /**
     * The children of the React Component.
     * - Must place a child element inside the Carousel to display for
     * each slide.
     * - Each item inside the data array will be transferred to the
     * child component.
     */
    children: PropTypes.object,
    /**
     * Viewport Redux state.
     * - Contains information about the viewport.
     */
    viewport: PropTypes.object,
};

/**
 * Assign props using Redux selectors
 * to connect the Component to the Redux store.
 *
 * @param {*} state the Redux store state
 * @return {*} props mapped to the Component
 */
const mapStateToProps = (state) => ({
    viewport: {
        dimensions: getViewportDimensions(state),
        size: getViewportSize(state),
        type: getViewportType(state),
    },
});

export default connect(mapStateToProps)(Carousel);
