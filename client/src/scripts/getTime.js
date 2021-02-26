import { DateTime } from "luxon";
/**
 * Function which gets the relative time since a given date-time timestamp.
 *
 * - Uses Luxon library to determine deconstructed years, months, days,
 * hours, minutes and seconds since the timestamp to now.
 * - Depending how long ago, it will return that it was posted some time
 * ago.
 *
 * @param {Date} timestamp posted date-time
 * @param {DateTime} now the current time in DateTime format
 * @return {String} time since the given date-time
 */
export const getRelativeTime = (timestamp, now) => {
    const posted = DateTime.fromISO(timestamp);
    const delta = now.diff(
        posted, ["years", "months", "days", "hours", "minutes", "seconds"])
        .toObject();
    const { years, months, days, hours, minutes, seconds } = delta;
    if (years > 0) {
        return `${years} year${years === 1 ? "" : "s"} ago`;
    } else if (months > 0) {
        return `${months} month${months === 1 ? "" : "s"} ago`;
    } else if (days > 0) {
        return `${days} day${days === 1 ? "" : "s"} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours === 1 ? "" : "s"} ago`;
    } else if (minutes > 0) {
        return `${minutes} minute${minutes === 1 ? "" : "s"} ago`;
    }
    const secondsAsInt = parseInt(seconds);
    return seconds < 1 ?
        "Just now" :
        `${secondsAsInt} second${secondsAsInt === 1 ? "" : "s"} ago`;
};
