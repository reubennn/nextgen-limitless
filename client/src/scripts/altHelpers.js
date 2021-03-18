/**
 * Function which extracts the company name from the
 * path of the corresponding SVG.
 *
 * @param {String} path the svg url path
 * @return {String} the company name
 */
export const getAltFromPath = (path) => {
    const COMPANY_START = path.indexOf("logos/") + 6;
    const COMPANY_END = path.length - 4;
    /** Extract the company name */
    let companyStr = path.substring(COMPANY_START, COMPANY_END);
    /** Replace all hyphens with a space */
    companyStr = companyStr.replace(/-/g, " ");
    /** Capitalize the first letter of each word */
    companyStr = companyStr.split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
        .join(" ");
    return companyStr;
};
