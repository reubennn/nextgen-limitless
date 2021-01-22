import express from "express";
import {
    getAllArticles,
    getArticle,
    upvoteArticle,
    addCommentToArticle,
    getRootComments,
    upvoteComment,
    downvoteComment,
    getNestedReplies,
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

/**
* /comment endpoint routes.
*/
router.route("/comments/:path/add-comment")
    .post(addCommentToArticle);

router.route("/comments/:path")
    .get(getRootComments);

router.route("/comments/:path/:_id")
    .get(getNestedReplies);

router.route("/comments/:path/:_id/upvote")
    .post(upvoteComment);

router.route("/comments/:path/:_id/downvote")
    .post(downvoteComment);

export default router;
