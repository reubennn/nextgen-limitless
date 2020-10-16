import { MongoClient } from "mongodb";
import { MONGO_URI, DB_NAME } from "../../secrets";

/* Connects to MongoDB */
const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDB = async () => {
    try {
        await client.connect();
        console.log("Successfully connected to the MongoDB server.\n");
    } catch (error) {
        console.error(error);
    }
};

const withDB = async (operations, res) => {
    try {
        const db = client.db(DB_NAME);
        const collection = db.collection("articles");
        await operations(collection);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching / updating data from mongoDB",
            error,
        });
    }
};

connectDB().catch(console.error);

export const getAllArticles = async (req, res) => {
    withDB(async (collection) => {
        const result = await collection.find().toArray();

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Could not find the articles.",
            });
        }
    }, res);
};

export const getArticle = async (req, res) => {
    const articleName = req.params.name;

    withDB(async (collection) => {
        const result = await collection
            .findOne({ name: articleName });

        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                message: "Could not find the specified article.",
            });
        }
    }, res);
};

export const upvoteArticle = async (req, res) => {
    const articleName = req.params.name;

    withDB(async (collection) => {
        const articleInfo = await collection
            .findOne({ name: articleName });

        const updatedArticleInfo = await collection
            .findOneAndUpdate(
                { name: articleName },
                { "$set": { upvotes: articleInfo.upvotes + 1 } },
                { returnOriginal: false },
            );

        res.status(200).json(updatedArticleInfo);
    }, res);
};

export const addCommentToArticle = async (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (collection) => {
        const articleInfo = await collection
            .findOne({ name: articleName });

        const updatedArticleInfo = await collection
            .findOneAndUpdate(
                { name: articleName },
                {
                    "$set": {
                        comments: articleInfo.comments
                            .concat({ username, text }),
                    },
                },
                { returnOriginal: false },
            );
        res.status(200).json(updatedArticleInfo);
    }, res);
};

/* Close the MongoDB client before Node.js exits */
process.on("exit", function () {
    client.close();
});
