/**
 * Function which shuffles an array using the Fisher-Yates (aka Knuth) Shuffle.
 *
 * Special thanks to Mike Bostock for the shuffle function.
 * - Code acquired from: https://bost.ocks.org/mike/shuffle/
 *
 * @param {Array} array array to shuffle
 * @return {Array} shuffled array
 */
export const shuffle = (array) => {
    let m = array.length;
    let t;
    let i;

    // While there remain elements to shuffle…
    while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m--);

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }

    return array;
};
