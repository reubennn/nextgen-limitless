import express from "express";
import {
    getAllArticles,
    getArticle,
    upvoteArticle,
} from "../controllers/article.controllers";

/** Set up the Express server router */
const router = express.Router();

router.route("/articles")
    .get(getAllArticles);

router.route("/articles/:path")
    .get(getArticle);

router.route("/articles/:path/upvote")
    .post(upvoteArticle);

export default router;
