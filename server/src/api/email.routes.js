import express from "express";
import {
    sendEmail,
} from "../controllers/email.controllers";

/** Set up the Express server router */
const router = express.Router();

/**
* Public routes.
*/
router.route("/email/send/contact")
    .post(sendEmail);

export default router;
