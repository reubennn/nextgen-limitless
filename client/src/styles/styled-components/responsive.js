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
 * ~~~~~~~~~~~~~~ Carousel ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the Carousel toggle button padding, which ultimately
 * adjusts the position location.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the distance from one side of the viewport
 */
export const handleTogglePosition = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "0.75vw";
        case ("extra-small"):
            return "1vw";
        case ("small"):
            return "5vw";
        case ("medium"):
            return "8vw";
        case ("large"):
            return "12vw";
        case ("extra-large"):
            return "15vw";
        case ("super-large"):
            return "18vw";
        default: return "0.75vw";
    };
};

/**
 * Handles the Carousel toggle button padding, which ultimately
 * adjusts the position location.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the distance from one side of the viewport
 */
export const handleCarouselBlockWidth = (viewportType) => {
    switch (viewportType) {
        case ("medium"):
            return css`
                width: 70vw;
                margin: auto 15vw;
            `;
        case ("large"):
            return css`
                width: 65vw;
                margin: auto 17.5vw;
            `;
        case ("extra-large"):
            return css`
                width: 60vw;
                margin: auto 20vw;
            `;
        case ("super-large"):
            return css`
                width: 55vw;
                margin: auto 22.5vw;
            `;
        default:
            return css`
                width: 75vw;
                margin: auto 12.5vw;
            `;
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~ Forms ~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the width of the form.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the width for the form
 */
export const handleFormWidth = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "100%";
        case ("extra-small"):
            return "100%";
        case ("small"):
            return "100%";
        case ("medium"):
            return "80%";
        case ("large"):
            return "60%";
        default:
            return "50%";
    };
};

/**
 * Handles the padding of the form.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the padding for the form
 */
export const handleFormPadding = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "3rem 1rem 4rem 1rem";
        case ("extra-small"):
            return "3rem 1.2rem 4rem 1.2rem";
        case ("small"):
            return "3rem 3rem 4rem 3rem";
        case ("medium"):
            return "3rem 4rem 4rem 4rem";
        default:
            return "3rem 4rem 4rem 4rem";
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~ Comments ~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles the width of the conversation section.
 *
 * @param {String} viewportType the viewport type classification
 * @return {String} the width of the conversation section
 */
export const handleCommentsWidth = (viewportType) => {
    switch (viewportType) {
        case ("super-small"):
            return "100%";
        case ("extra-small"):
            return "100%";
        case ("small"):
            return "100%";
        case ("medium"):
            return "90%";
        case ("large"):
            return "90%";
        default:
            return "70%";
    };
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~ Background Image ~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
/**
 * Handles positioning of the ResponsiveImage background image.
 *
 * @param {String|Number} position the position of the image
 * @return {String} the positioning of the image
 */
export const handleBackgroundImagePosition = (position) => {
    switch (position) {
        case ("center"):
            return "50%";
        case ("left"):
            return "0%";
        case ("right"):
            return "100%";
        case ("top"):
            return "0%";
        case ("bottom"):
            return "100%";
        default:
            return position;
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
