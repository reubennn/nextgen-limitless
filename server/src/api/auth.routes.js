import express from "express";
import {
    auth0Login,
    auth0Signup,
    callNextAuth0,
    authenticateUser,
    checkAuth0Session,
    auth0Logout,
} from "../controllers/auth.controllers.js";

/** Set up the Express server router */
const router = express.Router();

router.route("/login")
    .get(auth0Login,
        callNextAuth0);

router.route("/signup")
    .get(auth0Signup,
        callNextAuth0);

router.route("/callback")
    .get(authenticateUser);

router.route("/logout")
    .get(auth0Logout);

router.route("/authenticated")
    .get(checkAuth0Session);

export default router;
