import harveyCarson from ".../avatars/harvey-carson.jpg";
import jamilThomson from ".../avatars/jamil-thomson.jpg";
import jocelynWynn from ".../avatars/jocelyn-wynn.jpg";
import julieRoberts from ".../avatars/julie-roberts.jpg";
import kaidanNairn from ".../avatars/kaidan-nairn.jpg";
import kathrynSutherland from ".../avatars/kathryn-sutherland.jpg";
import oliviaBourne from ".../avatars/olivia-bourne.jpg";
import rogerWhite from ".../avatars/roger-white.jpg";
import scottBryan from ".../avatars/scott-bryan.jpg";
import taylaMills from ".../avatars/tayla-mills.jpg";
import toddSullivan from ".../avatars/todd-sullivan.jpg";
import veraMercer from ".../avatars/vera-mercer.jpg";
import zaneFrost from ".../avatars/zane-frost.jpg";

export const avatars = {
    harveyCarson,
    jamilThomson,
    jocelynWynn,
    julieRoberts,
    kaidanNairn,
    kathrynSutherland,
    oliviaBourne,
    rogerWhite,
    scottBryan,
    taylaMills,
    toddSullivan,
    veraMercer,
    zaneFrost,
};

/**
 * Function for generating mock data.
 * Generates an array of random avatars using the avatars data
 * so that we can make the comments section look legitimate.
 *
 * - Used for initial comments section layout and styling.
 * - When user login feature has been implemented, we would then use
 * the user avatar.
 *
 * @param {Object} avatars stored avatars
 * @param {Number} commentsLength the length of the comments array
 * @return {Array} list of random avatars for the comments section
 */
export const getRandomAvatars = (avatars, commentsLength) => {
    if (commentsLength === 0) {
        return null;
    }
    const keys = Object.keys(avatars);
    const randomAvatars = [];
    for (let i = 0; i < commentsLength; i++) {
        randomAvatars.push(avatars[keys[keys.length * Math.random() << 0]]);
    }
    return randomAvatars;
};

/**
* Function for generating mock data.
* Generates a random avatar using the avatars data
* so that we can make the comments section look legitimate.
*
* - Used for when someone posts a new comment.
* - We need to assign an avatar when a new comment is posted.
* - When user login feature has been implemented, we would then use
 * the user avatar.
*
* @param {Object} avatars stored avatars
* @return {Array} list of random avatars for the comments section
*/
export const getRandomAvatar = (avatars) => {
    const keys = Object.keys(avatars);
    return avatars[keys[keys.length * Math.random() << 0]];
};
