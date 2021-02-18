import passport from "passport";
import queryString from "querystring";
import jwt from "jsonwebtoken";

/**
 * Function used to pass to Express routes which require
 * JWT authentication.
 */
const jwtRequired = passport.authenticate("jwt", { session: false });

/**
 * Redirects client to Auth0 login page to be authenticated
 * using passport strategy.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const auth0Login =
    passport.authenticate("auth0", {
        scope: "openid email profile",
    });

/**
* Redirects client to Auth0 sign up page to be authenticated
* using passport strategy.
*
* @param {Object} req HTTP request object
* @param {Object} res HTTP response object
* @param {Object} next express next object
*/
export const auth0Signup =
    passport.authenticate("auth0", {
        scope: "openid email profile",
        screen_hint: "signup", // Redirect to sign up page
    });

/**
 * Dummy function so Passport Authentication can callback next() after
 * Auth0 log in.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const callNextAuth0 = (req, res, next) => {
    res.redirect("/");
};

/**
 * Callback function after a user has logged into Auth0 to
 * authenticate the user.
 *
 * - Checks to make sure user logged in:
 *          - If not, redirect to Auth0 login page.
 *          - If they did, establish a login session and
 *          redirect them
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const authenticateUser = async (req, res, next) => {
    passport.authenticate("auth0", (err, user, info) => {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.redirect("/auth/login");
        }
        /** Establish a login session */
        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            const PORT = process.env.CLIENT_PORT;
            const returnTo = req.session.returnTo;
            delete req.session.returnTo;
            res.redirect(returnTo || `${req.protocol}://${req.hostname}:${PORT}`);
        });
    })(req, res, next);
};

/**
 * Dummy function so Passport Authentication can callback next() after
 * Auth0 log in.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const checkAuth0Session = (req, res, next) => {
    const isAuthenticated = req.isAuthenticated();
    if (isAuthenticated) {
        res.status(200).json({
            message: "User is authenticated and logged in.",
            authenticated: true,
        });
    } else {
        res.status(200).json({
            message: "User is not authenticated and logged out.",
            authenticated: false,
        });
    }
    next();
};

/**
 * Function to log the user out of Auth0 session.
 *
 * - The session is logged out of.
 * - The return URL is generated to redirect client to a page
 * after being logged out.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const auth0Logout = async (req, res, next) => {
    req.logout();

    /** Generate the return URL */
    let returnTo = req.protocol + "://" + req.hostname;
    const PORT = process.env.CLIENT_PORT;

    if (PORT !== undefined && PORT !== 80 && PORT !== 443) {
        returnTo =
            process.env.NODE_ENV === "production" ?
                `${returnTo}/` :
                `${returnTo}:${PORT}/`;
    }

    /** Format the return URL */
    const logoutURL = new URL(
        `https://${process.env.AUTH0_DOMAIN}/v2/logout`,
    );

    /** Create URL query string */
    const searchString = queryString.stringify({
        client_id: process.env.REACT_APP_AUTH0_CLIENT_ID,
        returnTo: returnTo,
    });

    /** Get and set the serialized query portions */
    logoutURL.search = searchString;

    res.redirect(logoutURL);
};

// /**
//  * XXX
//  *
//  * @param {Object} req HTTP request object
//  * @param {Object} res HTTP response object
//  * @param {Object} next express next object
//  */
// export const authenticateUser = async (req, res, next) => {
//     passport.authenticate("auth0", (err, user) => {
//         if (err) {
//             return next(err);
//         }
//         if (!user) {
//             return res.redirect('/login');
//         }
//         console.log("CALLBACK SUCCESSFUL!")
//         const userReturnObject = {
//             nickname: user.nickname,
//         };
//         req.session.jwt = jwt.sign(userReturnObject, process.env.JWT_SECRET_KEY);
//         return res.redirect('/');
//     })(req, res, next);
// };
