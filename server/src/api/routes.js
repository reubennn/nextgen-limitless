import express from "express";
import {
    getArticle,
    upvoteArticle,
    addCommentToArticle,
} from "../controllers/controllers";

const router = express.Router();

router.route("/articles/:name")
    .get(getArticle);

router.route("/articles/:name/upvote")
    .post(upvoteArticle);

/**
 * req.body {
 *   "username": "me",
 *   "text": "I love this article!"
 * }
 */
router.route("/articles/:name/add-comment")
    .post(addCommentToArticle);

export default router;
