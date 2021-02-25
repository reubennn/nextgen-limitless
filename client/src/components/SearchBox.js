import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { isEmpty } from "../scripts/empty";

import Icon from "./Icon";
import ClearText from "./ClearText";

import searchIcon from ".../icons/magnifying-glass.svg";

import * as S from "../styles/styled-components/styled";

/**
 * React Component for a search box which can be used to query
 * a set of data.
 *
 * - When text is provided to the search field, we can perform
 * some type of action using the input with the onChangeHandler prop function.
 *
 * @return {Component} search box to input a query
 */
const SearchBox = ({
    width = "100%",
    onChangeHandler = undefined,
}) => {
    const searchInputRef = useRef(null);

    /** React Hook for storing and setting the input text */
    const [text, setText] = useState("");

    /**
     * Handler function which sets the text state value with
     * the desired value inside the search input field.
     *
     * @param {Event} event the onchange event
     */
    const handleQueryOnChange = (event) => {
        const desiredValue = event.target.value;
        setText(desiredValue);
        if (onChangeHandler !== undefined) {
            onChangeHandler(desiredValue);
        }
    };

    /**
     * Handler function which clears the current search query.
     */
    const handleClearTextClick = () => {
        setText("");
        if (onChangeHandler !== undefined) {
            onChangeHandler("");
        }
    };

    /**
     * Handler which prevents the default event from occurring when
     * submitting the form.
     *
     * @param {Event} event event object
     */
    const handleSubmitEvent = (event) => {
        event.preventDefault();
    };

    /**
     * Handler function which puts the search input in focus
     * when clicking the search icon.
     */
    const handleSearchButtonClick = () => {
        searchInputRef.current.focus();
    };

    return (
        <S.SearchBoxContainer
            width={width}
            onSubmit={(e) => handleSubmitEvent(e)} >
            <ClearText
                hidden={isEmpty(text)}
                onClick={handleClearTextClick} />
            <S.SearchInput
                type="search"
                placeholder="Search for article..."
                value={text}
                onChange={(e) => handleQueryOnChange(e)}
                ref={searchInputRef} />
            <S.SearchButton onClick={handleSearchButtonClick}>
                <Icon
                    className="no-color-change"
                    xlinkHref={searchIcon}
                    height="30px"
                    width="30px"
                    fill="grey-tint-light" />
            </S.SearchButton>
        </S.SearchBoxContainer>
    );
};

SearchBox.propTypes = {
    /**
     * The width of the search box.
     */
    width: PropTypes.string,
    /**
     * onChange event handler function passed from parent to perform an
     * action with the input value.
     *
     * @param {String} value the textarea input value
     */
    onChangeHandler: PropTypes.func,
};

export default SearchBox;
