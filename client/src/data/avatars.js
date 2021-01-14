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

export const cloudAvatars = {
    harveyCarson: "https://res.cloudinary.com/reuben/image/upload/v1608010751/fullstack-react/authors/harvey-carson_ghu2ms.jpg",
    jamilThomson: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/jamil-thomson_mkzu8o.jpg",
    jocelynWynn: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/jocelyn-wynn_p3o3rg.jpg",
    julieRoberts: "https://res.cloudinary.com/reuben/image/upload/v1608010637/fullstack-react/authors/julie-roberts_o3efc9.jpg",
    kaidanNairn: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/kaidan-nairn_toopg0.jpg",
    kalebMaxwell: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/kaleb-maxwell_wxds8a.jpg",
    kathrynSutherland: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/kathryn-sutherland_sxrwjn.jpg",
    lilianNoel: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/lilian-noel_byoqkl.jpg",
    oliviaBourne: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/olivia-bourne_x6qgwx.jpg",
    rogerWhite: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/roger-white_ryykyd.jpg",
    scottBryan: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/scott-bryan_mxciog.jpg",
    taylaMills: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/tayla-mills_hm0mbv.jpg",
    toddSullivan: "https://res.cloudinary.com/reuben/image/upload/v1608009190/fullstack-react/authors/todd-sullivan_bt8oqy.jpg",
    veraMercer: "https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/vera-mercer_h9cgoh.jpg",
    zaneFrost: "https://res.cloudinary.com/reuben/image/upload/v1608009192/fullstack-react/authors/zane-frost_q60eot.jpg",
};

export const defaultAvatar = "https://res.cloudinary.com/reuben/image/upload/v1610515162/fullstack-react/authors/default-avatar_umlq3b.png";

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
