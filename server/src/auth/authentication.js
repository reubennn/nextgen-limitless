import jwt from "express-jwt";
import jwksRsa from "jwks-rsa";

/**
 * Authorization middleware checking.
 *
 * - Secures an endpoint by checking that the Access Token
 * exists and is verified against the Auth0 JWKS (JSON Web Key Set)
 * - If it does not exist or is not verified, access to the
 * endpoint will be rejected.
 * - This middleware does not check if the token has the sufficient scope
 * to access the requested resource.
 */
const checkJwt = jwt({
    /**
     * Dynamically provide a signing key, based on the kid provided in the
     * header of request and the signing keys provided by the JWKS endpoint.
     */
    secret: jwksRsa.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 100,
        jwksUri: `https://${process.env.AUTH0_DOMAIN}/.well-known/jwks.json`,
    }),
    /** Validate the audience and the issuer */
    audience: process.env.AUTH0_AUDIENCE,
    issuer: `https://${process.env.AUTH0_DOMAIN}/`,
    algorithms: [`${process.env.JWT_SIGNATURE_ALGORITHM}`],
});

/**
 * Error handler function for handling any errors that occurred
 * during authentication check.
 *
 * @param {Object} err error object
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
const errorHandler = (err, req, res, next) => {
    if (err) {
        console.error(err);
        if (err.code === "credentials_required") {
            res.status(401).json({
                error: "credentials_required",
                message: "No authorization token was found",
            });
        } else if (err.code === "invalid_token") {
            res.status(401).json({
                error: "invalid_token",
                message: "Invalid token provided. Unauthorized access.",
            });
        }
    }
};

/**
 * Function which performs the authentication check.
 * If any errors occur, the errorHandler function is performed
 * to log the error and send the appropriate response to the client.
 *
 * @return {Array} jwt check and error handler function
 */
export const checkAuthentication = () => {
    return [
        checkJwt,
        errorHandler,
    ];
};
