/**
 * For testing purposes, to check if the client can access the protected route.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 * @param {Object} next express next object
 */
export const accessProtectedResource = (req, res, next) => {
    res.status(200).json({
        message: "You've made it to a protected route!",
        authenticated: true,
    });
};
