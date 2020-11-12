import { keyframes } from "styled-components";

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~ Themes ~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

export const theme = {
    color: {
        whiteGrey: "#dfdfdf",
        grey: "#7b7b7b",
        greyDarker: "#515151",
        lighter: "#bdbdbd",
        light: "#a6a6a6",
        dark: "#303030",
        darker: "#222",
    },
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~ Fonts ~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

export const fontFamily = {
    main: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, Helvetica, sans-serif, "Apple Color Emoji",
        "Segoe UI Emoji", "Segoe UI Symbol"`,
    secondary: `Roboto, "Helvetica Neue Light", "Helvetica Neue",
        Helvetica, Arial, "Lucida Grande", sans-serif`,
    logo: `"Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, Helvetica, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~ Handlers ~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Function to handle which color the property should be.
 * Created as some Components may need different color depending on background
 *
 * Two instances for each color have been created:
 *      1. For theme found in this file
 *      2. For color word simplicity in React Component render
 *
 * @param {String} color string to process
 * @return {String} the color to display
 */
export const handleColor = (color) => {
    switch (color) {
        case ("white"):
            return "#fff";
        case ("#fff"):
            return color;
        case ("whiteGrey"):
            return theme.color.whiteGrey;
        case (theme.color.whiteGrey):
            return color;
        case ("grey"):
            return theme.color.grey;
        case (theme.color.grey):
            return color;
        case ("darkerGrey"):
            return theme.color.greyDarker;
        case (theme.color.greyDarker):
            return color;
        case ("lighter"):
            return theme.color.lighter;
        case (theme.color.lighter):
            return color;
        case ("light"):
            return theme.color.light;
        case (theme.color.light):
            return color;
        case ("dark"):
            return theme.color.dark;
        case (theme.color.dark):
            return color;
        case ("darker"):
            return theme.color.darker;
        case (theme.color.darker):
            return color;
        case (color):
            if (typeof (color) === "string") {
                return color;
            }
            break;
        default:
            return theme.color.dark;
    }
};

/** ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~ Keyframes ~~~~~~~~~~~~~~
 * ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */

/**
 * Rotation Keyframe
 */
export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
