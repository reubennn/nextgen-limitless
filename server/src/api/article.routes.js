import express from "express";
import {
    getAllArticles,
    getArticle,
    upvoteArticle,
    downvoteArticle,
} from "../controllers/article.controllers";
import { checkAuthentication } from "../auth/authentication";

/** Set up the Express server router */
const router = express.Router();

/**
* Public routes.
*/
router.route("/articles")
    .get(getAllArticles);

router.route("/articles/:path")
    .get(getArticle);

/**
* Protected routes requiring Auth0 authentication.
*/
router.route("/articles/:path/upvote")
    .post(...checkAuthentication(),
        upvoteArticle);

router.route("/articles/:path/downvote")
    .post(...checkAuthentication(),
        downvoteArticle);

export default router;
