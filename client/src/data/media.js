/**
 * Media breakpoints for responsive website design
 * using conditional rendering.
 */
const media = {
    breakpoints: {
        /**
         * Extra Small.
         * - Older, and mid-range phones.
         *
         * Note: Anything less classified as Super Small.
         */
        extraSmall: 360,
        /**
         * Small.
         * - Most smartphones in portrait mode.
         */
        small: 480,
        /**
         * Medium.
         * - Most tablets and iPads in portrait mode.
         */
        medium: 768,
        /**
         * Large.
         * - Most tablets and iPads in landscape mode.
         * - Older desktops/laptops.
         */
        large: 1024,
        /**
         * Extra Large.
         * - Was one of the most common sizes.
         * - iPad PRO, HD ready and Full HD desktops & laptops.
         */
        extraLarge: 1366,
        /**
         * Super Large.
         * - Standard screen resolution for modern desktops/laptops.
         */
        superLarge: 1920,
    },
};

export default media;
