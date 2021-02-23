import express from "express";
import {
    addCommentToArticle,
    getRootComments,
    upvoteComment,
    downvoteComment,
    getNestedReplies,
} from "../controllers/comment.controllers.js";
import { checkAuthentication } from "../auth/authentication";

/** Set up the Express server router */
const router = express.Router();

/**
* Public routes.
*/
router.route("/comments/:path")
    .get(getRootComments);

router.route("/comments/:path/:_id")
    .get(getNestedReplies);

/**
* Protected routes requiring Auth0 authentication.
*/
router.route("/comments/:path/add-comment")
    .post(...checkAuthentication(),
        addCommentToArticle);

router.route("/comments/:path/:_id/upvote")
    .post(upvoteComment);

router.route("/comments/:path/:_id/downvote")
    .post(downvoteComment);

export default router;
