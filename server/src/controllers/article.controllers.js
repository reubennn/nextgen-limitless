import { queryDB } from "../database/query";

/**
 * Fetches all articles from the database.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const getAllArticles = async (req, res) => {
    queryDB(process.env.ARTICLES, res, async (collection) => {
        const result = await collection.find({}).toArray();

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Could not find the articles.",
            });
        }
    });
};

/**
 * Fetches a single article from database matching a name from the request.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const getArticle = async (req, res) => {
    const articlePath = req.params.path;

    queryDB(process.env.ARTICLES, res, async (collection) => {
        const result = await collection
            .findOne({ path: articlePath });

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Could not find the specified article.",
            });
        }
    });
};

/**
 * Updates the article upvote +1 in the database.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const upvoteArticle = async (req, res) => {
    const articlePath = req.params.path;

    queryDB(process.env.ARTICLES, res, async (collection) => {
        const articleInfo = await collection
            .findOne({ path: articlePath });

        const updatedArticleInfo = await collection
            .findOneAndUpdate(
                { path: articlePath },
                { "$set": { upvotes: articleInfo.upvotes + 1 } },
                { returnOriginal: false },
            );

        res.status(200).json(updatedArticleInfo);
    });
};

/**
 * Updates the article upvote +1 in the database.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const downvoteArticle = async (req, res) => {
    const articlePath = req.params.path;

    queryDB(process.env.ARTICLES, res, async (collection) => {
        const articleInfo = await collection
            .findOne({ path: articlePath });

        const updatedArticleInfo = await collection
            .findOneAndUpdate(
                { path: articlePath },
                { "$set": { upvotes: articleInfo.upvotes - 1 } },
                { returnOriginal: false },
            );

        res.status(200).json(updatedArticleInfo);
    });
};
