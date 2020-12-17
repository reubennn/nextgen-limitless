import aDayOnTheGreen from ".../logos/a-day-on-the-green.svg";
import accenture from ".../logos/accenture.svg";
import adobe from ".../logos/adobe.svg";
import alphabet from ".../logos/alphabet.svg";
import amazon from ".../logos/amazon.svg";
import apple from ".../logos/apple.svg";
import aruza from ".../logos/aruza.svg";
import att from ".../logos/att.svg";
import berkshireHathaway from ".../logos/berkshire-hathaway.svg";
import bing from ".../logos/bing.svg";
import carmelsBarAndGrill from ".../logos/carmels-bar-and-grill.svg";
import chevron from ".../logos/chevron.svg";
import cisco from ".../logos/cisco.svg";
import dassaultSystemes from ".../logos/dassault-systemes.svg";
import dell from ".../logos/dell.svg";
import disney from ".../logos/disney.svg";
import ebay from ".../logos/ebay.svg";
import exxonMobil from ".../logos/exxon-mobil.svg";
import facebook from ".../logos/facebook.svg";
import flindersUniversity from ".../logos/flinders-university.svg";
import foxconn from ".../logos/foxconn.svg";
import google from ".../logos/google.svg";
import hitachi from ".../logos/hitachi.svg";
import huawei from ".../logos/huawei.svg";
import ibm from ".../logos/ibm.svg";
import instagram from ".../logos/instagram.svg";
import intel from ".../logos/intel.svg";
import linkedin from ".../logos/linkedin.svg";
import mcdonalds from ".../logos/mcdonalds.svg";
import microsoft from ".../logos/microsoft.svg";
import netflix from ".../logos/netflix.svg";
import oracle from ".../logos/oracle.svg";
import panasonic from ".../logos/panasonic.svg";
import reddit from ".../logos/reddit.svg";
import roundhouse from ".../logos/roundhouse.svg";
import salesforce from ".../logos/salesforce.svg";
import samsung from ".../logos/samsung.svg";
import sap from ".../logos/sap.svg";
import sony from ".../logos/sony.svg";
import subway from ".../logos/subway.svg";
import surfDiveNSki from ".../logos/surf-dive-n-ski.svg";
import tencent from ".../logos/tencent.svg";
import tesla from ".../logos/tesla.svg";
import toyota from ".../logos/toyota.svg";
import volkswagen from ".../logos/volkswagen.svg";
import walmart from ".../logos/walmart.svg";
import wellsFargo from ".../logos/wells-fargo.svg";
import woolworths from ".../logos/woolworths.svg";
import yahoo from ".../logos/yahoo.svg";
import yourLogoHere from ".../logos/your-logo-here.svg";

/**
 * Contains the relative url path to the logos.
 *
 * @example
 * // Calls the relative asset url path for Alphabet
 * import { logos } from "...data/logos";
 * logos.alphabet;
 */
const logos = {
    aDayOnTheGreen,
    accenture,
    adobe,
    alphabet,
    amazon,
    apple,
    aruza,
    att,
    berkshireHathaway,
    bing,
    carmelsBarAndGrill,
    chevron,
    cisco,
    dassaultSystemes,
    dell,
    disney,
    ebay,
    exxonMobil,
    facebook,
    flindersUniversity,
    foxconn,
    google,
    hitachi,
    huawei,
    ibm,
    instagram,
    intel,
    linkedin,
    mcdonalds,
    microsoft,
    netflix,
    oracle,
    panasonic,
    reddit,
    roundhouse,
    salesforce,
    samsung,
    sap,
    sony,
    subway,
    surfDiveNSki,
    tencent,
    tesla,
    toyota,
    volkswagen,
    walmart,
    wellsFargo,
    woolworths,
    yahoo,
    yourLogoHere,
};

/**
 * Create Logo Slider arrays.
 */
/** Create empty placeholder */
const logoSlider = {
    primary: [],
    secondary: [],
};

/**
 * Populate the logo slider with the url path to the logos.
 *
 * - Place the first half inside primary, and the second half
 * into secondary.
 * - For the logo slider on the homepage.
 */
let index = 0;
for (const key in logos) {
    if (Object.prototype.hasOwnProperty.call(logos, key)) {
        index < Math.floor(Object.keys(logos).length / 2) ?
            logoSlider.primary.push(logos[key]) :
            logoSlider.secondary.push(logos[key]);
        index++;
    }
}

export { logos, logoSlider };
