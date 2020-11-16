/**
 * Color object containing various color hex values.
 */
export const color = {
    white: "#fff",
    black: "#000",
    grey: {
        /** Mixture with white */
        tint: {
            lightest: "#eee",
            lighter: "#ddd",
            light: "#ccc",
            neutral: "#bbb",
            dark: "#aaa",
            darker: "#999",
            darkest: "#888",
        },
        /** Mixture with black */
        shade: {
            lightest: "#777",
            lighter: "#666",
            light: "#555",
            neutral: "#444",
            dark: "#333",
            darker: "#222",
            darkest: "#111",
        },
    },
    blue: {
        lightest: "#6ecbff",
        lighter: "#41c9fe",
        light: "#3ebaff",
        neutral: "#4196fe",
        dark: "#3983de",
        darker: "#3273c2",
        darkest: "#1f4879",
    },
    purple: {
        lightest: "#db9ffc",
        lighter: "#c565fb",
        light: "#d841fe",
        neutral: "#a941fe",
        dark: "#9439de",
        darker: "#6a299f",
        darkest: "#3f185f",
    },
    pink: {
        lightest: "#ffb8f3",
        lighter: "#fe97f9",
        neutral: "#fe59f6",
        dark: "#fe41d6",
        darker: "#f34196",
        darkest: "#bf31a1",
    },
};

/**
 * Function to handle which color the property should be.
 * Created as some Components may need different color depending on background
 *
 * Two instances for each color have been created:
 *      1. For theme found in this file
 *      2. For color word simplicity in React Component render
 *
 * @param {String} inputColor string to process
 * @return {String} the color to display
 */
export const handleColor = (inputColor) => {
    switch (inputColor) {
        /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         * ~~~~~~~~~~~~~~~ Strings ~~~~~~~~~~~~~~~
         * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         */
        /** Neutrals */
        case ("white"):
            return color.white;
        case ("black"):
            return color.black;

        /** Grey */
        /** with tint  */
        case ("grey-tint-lightest"):
            return color.grey.tint.lightest;
        case ("grey-tint-lighter"):
            return color.grey.tint.lighter;
        case ("grey-tint-light"):
            return color.grey.tint.light;
        case ("grey-tint-neutral"):
            return color.grey.tint.neutral;
        case ("grey-tint-dark"):
            return color.grey.tint.dark;
        case ("grey-tint-darker"):
            return color.grey.tint.darker;
        case ("grey-tint-darkest"):
            return color.grey.tint.darkest;

        /** with shade */
        case ("grey-shade-lightest"):
            return color.grey.shade.lightest;
        case ("grey-shade-lighter"):
            return color.grey.shade.lighter;
        case ("grey-shade-light"):
            return color.grey.shade.light;
        case ("grey-shade-neutral"):
            return color.grey.shade.neutral;
        case ("grey-shade-dark"):
            return color.grey.shade.dark;
        case ("grey-shade-darker"):
            return color.grey.shade.darker;
        case ("grey-shade-darkest"):
            return color.grey.shade.darkest;

        /** Blue */
        case ("blue-lightest"):
            return color.blue.lightest;
        case ("blue-lighter"):
            return color.blue.lighter;
        case ("blue-light"):
            return color.blue.lighter;
        case ("blue-neutral"):
            return color.blue.neutral;
        case ("blue-dark"):
            return color.blue.dark;
        case ("blue-darker"):
            return color.blue.darker;
        case ("blue-darkest"):
            return color.blue.darkest;

        /** Purple */
        case ("purple-lightest"):
            return color.purple.lightest;
        case ("purple-lighter"):
            return color.purple.lighter;
        case ("purple-light"):
            return color.purple.lighter;
        case ("purple-neutral"):
            return color.purple.neutral;
        case ("purple-dark"):
            return color.purple.dark;
        case ("purple-darker"):
            return color.purple.darker;
        case ("purple-darkest"):
            return color.purple.darkest;

        /** Pink */
        case ("pink-lightest"):
            return color.pink.lightest;
        case ("pink-lighter"):
            return color.pink.lighter;
        case ("pink-light"):
            return color.pink.lighter;
        case ("pink-neutral"):
            return color.pink.neutral;
        case ("pink-dark"):
            return color.pink.dark;
        case ("pink-darker"):
            return color.pink.darker;
        case ("pink-darkest"):
            return color.pink.darkest;

        /** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         * ~~~~~~~~~~ Object Properties ~~~~~~~~~~
         * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
         */
        /** Neutrals */
        case (color.white):
            return color.white;
        case (color.black):
            return color.black;

        /** Grey */
        /** with tint  */
        case (color.grey.tint.lightest):
            return color.grey.tint.lightest;
        case (color.grey.tint.lighter):
            return color.grey.tint.lighter;
        case (color.grey.tint.light):
            return color.grey.tint.light;
        case (color.grey.tint.neutral):
            return color.grey.tint.neutral;
        case (color.grey.tint.dark):
            return color.grey.tint.dark;
        case (color.grey.tint.darker):
            return color.grey.tint.darker;
        case (color.grey.tint.darkest):
            return color.grey.tint.darkest;

        /** with shade */
        case (color.grey.shade.lightest):
            return color.grey.shade.lightest;
        case (color.grey.shade.lighter):
            return color.grey.shade.lighter;
        case (color.grey.shade.light):
            return color.grey.shade.light;
        case (color.grey.shade.neutral):
            return color.grey.shade.neutral;
        case (color.grey.shade.dark):
            return color.grey.shade.dark;
        case (color.grey.shade.darker):
            return color.grey.shade.darker;
        case (color.grey.shade.darkest):
            return color.grey.shade.darkest;

        /** Blue */
        case (color.blue.lightest):
            return color.blue.lightest;
        case (color.blue.lighter):
            return color.blue.lighter;
        case (color.blue.light):
            return color.blue.light;
        case (color.blue.neutral):
            return color.blue.neutral;
        case (color.blue.dark):
            return color.blue.dark;
        case (color.blue.darker):
            return color.blue.darker;
        case (color.blue.darkest):
            return color.blue.darkest;

        /** Purple */
        case (color.purple.lightest):
            return color.purple.lightest;
        case (color.purple.lighter):
            return color.purple.lighter;
        case (color.purple.light):
            return color.purple.light;
        case (color.purple.neutral):
            return color.purple.neutral;
        case (color.purple.dark):
            return color.purple.dark;
        case (color.purple.darker):
            return color.purple.darker;
        case (color.purple.darkest):
            return color.purple.darkest;

        /** Pink */
        case (color.pink.lightest):
            return color.pink.lightest;
        case (color.pink.lighter):
            return color.pink.lighter;
        case (color.pink.light):
            return color.pink.light;
        case (color.pink.neutral):
            return color.pink.neutral;
        case (color.pink.dark):
            return color.pink.dark;
        case (color.pink.darker):
            return color.pink.darker;
        case (color.pink.darkest):
            return color.pink.darkest;

        /** If a string is supplied, let's assume it is a valid color */
        case (inputColor):
            if (typeof (inputColor) === "string") {
                return inputColor;
            }
            break;
        default:
            return color.grey.shade.dark;
    }
};
