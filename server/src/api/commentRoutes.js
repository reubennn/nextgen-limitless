import express from "express";
import {
    addCommentToArticle,
    getRootComments,
    upvoteComment,
    downvoteComment,
    getNestedReplies,
} from "../controllers/commentControllers";

/** Set up the Express server router */
const router = express.Router();

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
