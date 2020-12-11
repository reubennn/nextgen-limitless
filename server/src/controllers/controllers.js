import { MongoClient } from "mongodb";
/** Retrieve secret data not stored in Git */
import { MONGO_URI, DB_NAME, ARTICLES } from "../../secrets";

/* Connect client to MongoDB */
const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/**
 * Async function used to connect to MongoDB.
 * - Keeps the connection open to reduce overhead.
 */
const connectDB = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to the MongoDB server.\n");
    } catch (error) {
        console.error(error);
    }
};

/** Immediately call db connect function */
connectDB().catch(console.error);

/**
 * Generic function to query the database with specified operations.
 *
 * @param {String} collectionName name of the collection to query
 * @param {Object} res HTTP response object
 * @param {Function} operations to be performed
 */
const queryDB = async (collectionName, res, operations) => {
    try {
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        await operations(collection);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching / updating data from MongoDB",
            error,
        });
    }
};

/**
 * Fetches all articles from the database.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const getAllArticles = async (req, res) => {
    queryDB(ARTICLES, res, async (collection) => {
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

    queryDB(ARTICLES, res, async (collection) => {
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

    queryDB(ARTICLES, res, async (collection) => {
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
 * Adds a comment to the database based on the request.
 * - Stores username and text as an Object from req.body.
 * - Concatenates to end of comments array.
 *
 * @example
 * // Adds comment to article with req :path in database with username and text.
 * endpoint: ".../articles/:path/add-comment"
 * req.body {
 *   "username": "me",
 *   "text": "I love this article!"
 * }
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const addCommentToArticle = async (req, res) => {
    const { username, text } = req.body;
    const articlePath = req.params.path;

    queryDB(ARTICLES, res, async (collection) => {
        const articleInfo = await collection
            .findOne({ path: articlePath });

        const updatedArticleInfo = await collection
            .findOneAndUpdate(
                { path: articlePath },
                {
                    "$set": {
                        comments: articleInfo.comments
                            .concat({ username, text }),
                    },
                },
                { returnOriginal: false },
            );
        res.status(200).json(updatedArticleInfo);
    });
};

/** Close the MongoDB client before Node.js exits */
process.on("exit", function () {
    client.close();
});
