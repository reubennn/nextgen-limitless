import express from "express";
import {
    getAllArticles,
    getArticle,
    upvoteArticle,
    addCommentToArticle,
} from "../controllers/controllers";

/** Set up the Express server router */
const router = express.Router();

/**
 * /articles endpoint routes.
 */
router.route("/articles")
    .get(getAllArticles);

router.route("/articles/:path")
    .get(getArticle);

router.route("/articles/:path/upvote")
    .post(upvoteArticle);

router.route("/articles/:path/add-comment")
    .post(addCommentToArticle);

export default router;
