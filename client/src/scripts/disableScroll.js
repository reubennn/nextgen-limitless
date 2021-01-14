/**
 * Algorithms to disable and enable scrolling
 *
 * Based off: gblazex @ https://stackoverflow.com/questions/4770025/how-to-disable-scrolling-temporarily
 */

/**
 * Assign keyboard keys with scrolling capability.
 *
 * - left: 37, up: 38, right: 39, down: 40,
 * - spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
 */
const keys = { 37: 1, 38: 1, 39: 1, 40: 1, 32: 1, 33: 1, 34: 1, 35: 1, 36: 1 };

const preventDefault = (e) => {
    e.preventDefault();
};

const preventDefaultForScrollKeys = (e) => {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
};

/** Modern Chrome requires { passive: false } when adding event */
let supportsPassive = false;
try {
    window.addEventListener("test", null, Object.defineProperty({}, "passive", {
        get: () => supportsPassive = true,
    }));
} catch (e) {
    console.error("Does not support passive.");
}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = "onwheel" in document.createElement("div") ?
    "wheel" :
    "mousewheel";

/**
 * Disables the scrollbar for various browsers and devices.
 */
export const disableScroll = () => {
    /** Older FireFox */
    window.addEventListener("DOMMouseScroll", preventDefault, false);
    /** Modern desktop */
    window.addEventListener(wheelEvent, preventDefault, wheelOpt);
    window.addEventListener("keydown", preventDefaultForScrollKeys, false);
    /** Mobile */
    window.addEventListener("touchmove", preventDefault, wheelOpt);
};

/**
 * Enables the scrollbar for various browsers and devices.
 */
export const enableScroll = () => {
    /** Older FireFox */
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
    /** Modern desktop */
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
    /** Mobile */
    window.removeEventListener("touchmove", preventDefault, wheelOpt);
};
