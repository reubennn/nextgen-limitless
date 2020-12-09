import { css } from "styled-components";

/**
 * Responsive Design Handler Functions
 */

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~ Navbar ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the padding of the Navbar Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the padding value
 */
export const handleNavbarPadding = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "0.8rem 1.2rem";
        case ("extra-small"):
            return "0.8rem 1.6rem";
        default:
            return "0.8rem 1.8rem";
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~ Feature Text ~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the font size of the Feature Text Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the font-size value
 */
export const handleFeatureTextFontSize = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "1.4rem";
        case ("extra-small"):
            return "1.8rem";
        default:
            return "2rem";
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~ Sample Article ~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the article sample textbox height for ArticleSampleText.
 *
 * - Ensures the textbox is the same height no matter the text content.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the font-size value
 */
export const handleTextSampleHeight = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "16rem";
        case ("extra-small"):
            return "13rem";
        case ("small"):
            return "10rem";
        case ("medium"):
            return "15rem";
        case ("large"):
            return "16rem";
        case ("extra-large"):
            return "17rem";
        case ("super-large"):
            return "14rem";
        default: return "17rem";
    };
};

/**
 * Handles the article sample flex basis.
 *
 * - On larger viewports, a list of article samples will display
 * in a row so we need to adjust the flex-basis to display them correctly.
 * - On smaller viewports, the article list displays as a single column,
 * so the flex-basis is not relevant.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the font-size value
 */
export const handleFlexBasis = (viewportType) => {
    switch (viewportType) {
        case ("medium"):
            return "40%";
        case ("large"):
            return "28%";
        case ("extra-large"):
            return "20%";
        case ("super-large"):
            return "17%";
        default: return "100%";
    };
};


/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~ Logo ~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
* Handles the large logo margin for the homepage header.
*
* @param {String} viewportType the viewport type classification
* @return {String} the CSS for margin properties
*/
export const handleLargeLogoMargin = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return css`
                margin-top: 20vh;
            `;
        case ("extra-small"):
            return css`
                margin-top: 20vh;
            `;
        case ("super-large"):
            return css`
                margin-top: 20vh;
                margin-bottom: 7vh;
            `;
        default:
            return css`
                margin-top: 15vh;
            `;
    };
};

/**
* Handles the large logo size for the homepage header.
*
* @param {String} viewportType the viewport type classification
* @return {String} the CSS for the logo height
*/
export const handleLargeLogoSize = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return css`
                height: 60vw;
            `;
        case ("extra-small"):
            return css`
                height: 55vw;
            `;
        case ("small"):
            return css`
                height: 55vw;
            `;
        case ("medium"):
            return css`
                height: 35vw;
            `;
        default:
            return css`
                height: 35vh;
            `;
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~ Legacy Logo ~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Handles the padding of the Logo Container Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the padding value
 */
export const handleLogoContainerPadding = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "0.1rem 0.8rem 0.4rem";
        default:
            return "0.1rem 1rem 0.4rem";
    };
};

/**
 * Handles the margin of the Logo Container Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the margin value
 */
export const handleLogoContainerMargin = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "3rem auto";
        default:
            return "5rem auto";
    };
};

/**
 * Handles the width and height of the Logo Icon Container Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the width and height values
 */
export const handleLogoIconWidthHeight = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "5rem";
        default:
            return "7rem";
    };
};

/**
 * Handles the line height of the Logo Text Component.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the line-height value
 */
export const handleLogoTextLineHeight = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "2.5rem";
        default:
            return "2.9rem";
    };
};

/**
 * Handles the line height of the Logo Text Component.
 *
 * @param {String} line the target line
 * @param {String} viewportType the viewport type classification
 * @return {String} the line-height value
 */
export const handleLogoTextFontSize = (line, viewportType) => {
    if (line === "first") {
        switch (viewportType) {
            case ("super-small"):
                return "2.7rem";
            default:
                return "3.5rem";
        }
    } else {
        switch (viewportType) {
            case ("super-small"):
                return "2.4rem";
            default:
                return "3.1rem";
        }
    }
};
