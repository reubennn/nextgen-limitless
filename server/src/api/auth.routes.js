import express from "express";
import { accessProtectedResource } from "../controllers/auth.controllers.js";

/** Set up the Express server router */
const router = express.Router();

router.route("/authenticated")
    .get(accessProtectedResource);

export default router;
