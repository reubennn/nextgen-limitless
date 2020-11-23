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
 * ~~~~~~~~~~~~~~~~~ Logo ~~~~~~~~~~~~~~~~
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
