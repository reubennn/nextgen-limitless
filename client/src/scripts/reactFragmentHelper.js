import React from "react";

/**
 * Checks if the component provided is a React Fragment.
 *
 * @param {*} component element to be checked
 * @return {Boolean} true if a React Component
 */
export const isReactFragment = (component) => {
    if (component.type) {
        return component.type === React.Fragment;
    }
    return component === React.Fragment;
};

/**
 * Gets the children of the React Component.
 *
 * - If a React Fragment is passed as the child,
 * we can extract the children from it.
 *
 * @param {*} children React Component children
 * @return {Array} React Component children as an array
 */
export const getComponentChildren = (children) => {
    return isReactFragment(children) ?
        children.props.children :
        children;
};
