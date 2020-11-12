import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    getViewportDimensions,
    getViewportSize,
    getViewportType,
} from "../selectors/viewportSelectors";

import unpluggedIcon from ".../assets/icons/unplugged.png";

import * as S from "../styles/styled-components/styled";

const Logo = ({ className, viewport }) => (
    <S.LogoContainer
        className={className}
        type={viewport.type}>
        <S.LogoIconContainer
            className={className}
            type={viewport.type}>
            <S.Image
                src={unpluggedIcon}
                alt="Unplugged Logo Icon" />
        </S.LogoIconContainer>
        <S.LogoTextContainer
            className={className}
            type={viewport.type}>
            <S.LogoText
                className={`first-line ${className}`}
                type={viewport.type}>
                Next Gen
            </S.LogoText>
            <S.LogoText
                className={`second-line ${className}`}
                type={viewport.type}>
                LIMITLESS
            </S.LogoText>
        </S.LogoTextContainer>
    </S.LogoContainer>
);

Logo.propTypes = {
    /**
     * The class name to be passed onto styled-components Logo.
     * - As the Logo React Component is called, the class name
     * needs to be passed down for it to be inherited.
     */
    className: PropTypes.string,
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

export default connect(mapStateToProps)(Logo);
