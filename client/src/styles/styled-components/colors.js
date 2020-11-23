/**
 * Color object containing various color hex values.
 *
 * To add transparency values correctly, we need to specify
 * the full color values without shortcuts.
 */
export const color = {
    white: "#ffffff",
    black: "#000000",
    grey: {
        /** Mixture with white */
        tint: {
            lightest: "#eeeeee",
            lighter: "#dddddd",
            light: "#cccccc",
            neutral: "#bbbbbb",
            dark: "#aaaaaa",
            darker: "#999999",
            darkest: "#888888",
        },
        /** Mixture with black */
        shade: {
            lightest: "#777777",
            lighter: "#666666",
            light: "#555555",
            neutral: "#444444",
            dark: "#333333",
            darker: "#222222",
            darkest: "#111111",
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
        lightest: "#ffc1e3",
        lighter: "#fe97D1",
        light: "#fe6ebe",
        neutral: "#fe59b5",
        dark: "#de4e9e",
        darker: "#f34196",
        darkest: "#b63171",
    },
    orange: {
        lightest: "#ffd2a0",
        lighter: "#ffc788",
        light: "#ffbc71",
        neutral: "#ffb159",
        dark: "#ffa641",
        darker: "#ee9b3d",
        darkest: "#bf7e35",
    },
};

/**
 * Transparency object containing hex values for adding transparency.
 *
 * Simply add the transparency to the end of the hex value.
 *
 * @example
 * // Adds 80% transparency to color
 * input: ${color.purple.neutral + transparency.x80}
 * output: #a941fecc
 */
export const transparency = {
    x100: "ff",
    x99: "fc",
    x98: "fa",
    x97: "f7",
    x96: "f5",
    x95: "f2",
    x94: "f0",
    x93: "ed",
    x92: "eb",
    x91: "e8",
    x90: "e6",
    x89: "e3",
    x88: "e0",
    x87: "de",
    x86: "db",
    x85: "d9",
    x84: "d6",
    x83: "d4",
    x82: "d1",
    x81: "cf",
    x80: "cc",
    x79: "c9",
    x78: "c7",
    x77: "c4",
    x76: "c2",
    x75: "bf",
    x74: "bd",
    x73: "ba",
    x72: "b8",
    x71: "b5",
    x70: "b3",
    x69: "b0",
    x68: "ad",
    x67: "ab",
    x66: "a8",
    x65: "a6",
    x64: "a3",
    x63: "a1",
    x62: "9e",
    x61: "9c",
    x60: "99",
    x59: "96",
    x58: "94",
    x57: "91",
    x56: "8f",
    x55: "8c",
    x54: "8a",
    x53: "87",
    x52: "85",
    x51: "82",
    x50: "80",
    x49: "7d",
    x48: "7a",
    x47: "78",
    x46: "75",
    x45: "73",
    x44: "70",
    x43: "6e",
    x42: "6b",
    x41: "69",
    x40: "66",
    x39: "63",
    x38: "61",
    x37: "5e",
    x36: "5c",
    x35: "59",
    x34: "57",
    x33: "54",
    x32: "52",
    x31: "4f",
    x30: "4d",
    x29: "4a",
    x28: "47",
    x27: "45",
    x26: "42",
    x25: "40",
    x24: "3d",
    x23: "3b",
    x22: "38",
    x21: "36",
    x20: "33",
    x19: "30",
    x18: "2e",
    x17: "2b",
    x16: "29",
    x15: "26",
    x14: "24",
    x13: "21",
    x12: "1f",
    x11: "1c",
    x10: "1a",
    x9: "7",
    x8: "14",
    x7: "12",
    x6: "0f",
    x5: "d",
    x4: "a",
    x3: "8",
    x2: "05",
    x1: "03",
    x0: "00",
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

        /** Orange */
        case ("orange-lightest"):
            return color.orange.lightest;
        case ("orange-lighter"):
            return color.orange.lighter;
        case ("orange-light"):
            return color.orange.lighter;
        case ("orange-neutral"):
            return color.orange.neutral;
        case ("orange-dark"):
            return color.orange.dark;
        case ("orange-darker"):
            return color.orange.darker;
        case ("orange-darkest"):
            return color.orange.darkest;

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

        /** Orange */
        case (color.orange.lightest):
            return color.orange.lightest;
        case (color.orange.lighter):
            return color.orange.lighter;
        case (color.orange.light):
            return color.orange.light;
        case (color.orange.neutral):
            return color.orange.neutral;
        case (color.orange.dark):
            return color.orange.dark;
        case (color.orange.darker):
            return color.orange.darker;
        case (color.orange.darkest):
            return color.orange.darkest;

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
