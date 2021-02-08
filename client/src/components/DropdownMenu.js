import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getComponentChildren } from "../scripts/reactFragmentHelper";

import Icon from "./Icon";

import dropdownIcon from ".../icons/dropdown-arrow.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a styled dropdown menu (HTML select) which displays
 * its children as options.
 *
 * - Simply place the components you wish to display as options as a child
 * of this Component directly or within a React Fragment.
 * - To perform handler function on the current value, simply pass the
 * function to onSelection.
 * - To change the background color of the child on hover:
 *          - For all styled-components simply use bgHoverColor.
 *          - For all regular HTML elements, use bghovercolor.
 *
 * @return {Component} dropdown menu which displays the children as options
 */
const DropdownMenu = ({
    className = "",
    children,
    imageComponent = undefined,
    displaySelectedValue = false,
    displayArrow = false,
    hide = false,
    onSelection = undefined,
}) => {
    /** Initially display the first child as the current value */
    const firstValue = getComponentChildren(children)[0].props.value;

    /** Ref used when closing the dropdown upon clicking away from it */
    const dropdownRef = useRef(null);
    /** Component mount status reference */
    const isMounted = useRef(true);

    /** Flag indicating if the dropdown menu is active */
    const [isActive, setIsActive] = useState(false);
    /** Current selected value */
    const [current, setCurrent] = useState(firstValue);
    /** Flag indicating the dropdown menu button is being hovered over */
    const [hover, setHover] = useState(false);
    /** Flag to disable any active state change from a click */
    const [disableClick, setDisableClick] = useState(false);

    const imageSupplied = imageComponent !== undefined ? true : false;
    displaySelectedValue = imageComponent ? displaySelectedValue : true;
    displayArrow = imageComponent ? displayArrow : true;

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
     * useEffect used to hide the dropdown menu when the hide props flag
     * is true.
     */
    useEffect(() => {
        if (isMounted.current && hide) {
            setIsActive(false);
        }
    }, [hide]);

    /**
     * useEffect triggered when dropdown menu is activated, or when
     * click is disabled.
     * - Creates an event listener, which will close the dropdown menu
     * if clicked anywhere on the page
     */
    useEffect(() => {
        const pageClickEvent = () => {
            if (!disableClick &&
                dropdownRef.current !== null) {
                setIsActive(!isActive);
            }
        };
        /** Listen for clicks when the dropdown menu is active */
        if (isActive && isMounted.current) {
            window.addEventListener("click", pageClickEvent);
        }

        /** Cleanup event listener */
        return () => {
            window.removeEventListener("click", pageClickEvent);
        };
    }, [isActive, disableClick]);

    /**
     * useEffect triggered when mouse hovers over the dropdown menu button.
     *
     * - If hovering, temporarily disable clicking in case a user clicks as they
     * hover, so the dropdown menu options do not close.
     * - Use timeouts to make the options appear and disappear with a delay.
     */
    useEffect(() => {
        let timeout;
        let clickTimeout;
        if (isMounted.current) {
            isActive ?
                setDisableClick(false) :
                hover ? setDisableClick(true) : setDisableClick(false);
            const delay = hover ? 100 : 400;

            /**
             * Hover event function called using delayed timeout
             * to set the active state.
             */
            const hoverEvent = () => {
                setIsActive(hover);
            };

            timeout = setTimeout(() => hoverEvent(), delay);
            if (hover) {
                clickTimeout = setTimeout(() => setDisableClick(false), 500);
            }
        }
        /** Cleanup the timeouts */
        return () => {
            clearTimeout(timeout);
            clearTimeout(clickTimeout);
        };
    }, [hover]);

    useEffect(() => {
        if (isMounted.current && onSelection !== undefined) {
            onSelection(current);
        }
    }, current);

    /**
     * Click handler function which will set the active status
     * to the opposite of whatever it currently is, if clicking
     * is currently allowed.
     */
    const handleButtonClick = () => {
        if (!disableClick) {
            setIsActive(!isActive);
        }
    };

    /**
     * Handler function when an option has been clicked on.
     *
     * @param {String} value selected value
     */
    const handleOptionClick = (value) => {
        setCurrent(value);
        setIsActive(false);
    };

    /**
     * Set hover state to true when mouse enters the dropdown menu button
     * or options container.
     */
    const handleMouseEnter = () => {
        setHover(true);
    };

    /**
     * Set hover state to false when mouse enters the dropdown menu button
     * or options container.
     */
    const handleMouseLeave = () => {
        setHover(false);
    };

    return (
        <S.DropdownContainer
            className={className}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
            <S.DropdownButtonContainer
                imageSupplied={imageSupplied}
                onClick={handleButtonClick}>
                {
                    displaySelectedValue &&
                    <S.DropdownSelectedValue>
                        {current}
                    </S.DropdownSelectedValue>
                }
                {
                    imageSupplied &&
                    imageComponent
                }
                {
                    displayArrow &&
                    <Icon
                        className="no-color-change"
                        fill="grey-shade-dark"
                        xlinkHref={dropdownIcon}
                        width="16px"
                        height="16px"
                        alt="Dropdown Icon" />
                }
            </S.DropdownButtonContainer>
            <S.DropdownOptionsContainer>
                <S.DropdownOptions
                    className={`${isActive ? "active" : ""}`}
                    ref={dropdownRef}>
                    {React.Children
                        .map(getComponentChildren(children), (child, index) => (
                            <S.DropdownOption
                                key={index}
                                onClick={() =>
                                    handleOptionClick(child.props.value)}
                                bgHoverColor={child.props.bgHoverColor ?
                                    child.props.bgHoverColor :
                                    child.props.bghovercolor ?
                                        child.props.bghovercolor :
                                        "blue-lightest"}>
                                {child}
                            </S.DropdownOption>
                        ))}
                </S.DropdownOptions>
            </S.DropdownOptionsContainer>
        </S.DropdownContainer>
    );
};

DropdownMenu.propTypes = {
    /**
     * The class name to be passed onto the DropdownMenu container.
     */
    className: PropTypes.string,
    /**
     * The children of the Component.
     * - Each child will be displayed as an option for the
     * dropdown menu.
     * - Object if a React Fragment, array if children passed directly.
     */
    children: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.array,
    ]).isRequired,
    /**
     * Image component to be displayed for the dropdown menu button.
     * - If no image is supplied, the current selected value will be displayed.
     */
    imageComponent: PropTypes.object,
    /**
     * Flag which prompts the current selected value to be displayed.
     * - If image component is supplied, we need to set this to true if
     * we want to display the selected value alongside the image.
     */
    displaySelectedValue: PropTypes.bool,
    /**
     * Flag which prompts the dropdown arrow to be displayed
     * - If image component is supplied, we need to set this to true if
     * we want to display the dropdown arrow next to the image.
     */
    displayArrow: PropTypes.bool,
    /**
     * Flag used to hide the options, making the DropdownMenu inactive.
     */
    hide: PropTypes.bool,
    /**
     * Handler function to perform actions when an option is selected.
     */
    onSelection: PropTypes.func,
};

export default DropdownMenu;
