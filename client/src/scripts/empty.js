/**
 * Function which checks if the message contains whitespace only
 * (spaces, line-breaks or tabs) or is an empty string.
 *
 * @param {String} value the input value to check
 * @return {Boolean} true if the input is empty, otherwise false
 */
export const isEmpty = (value) => {
    return value.trim() === "" ? true : false;
};
