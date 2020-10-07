import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const PORT = 9000;
const app = express();
const MONGO_URI = "mongodb://localhost:27017";

/* Connects to MongoDB */
const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectDB = async () => {
    try {
        await client.connect();
    } catch (error) {
        console.error(error);
    }
};

const withDB = async (operations, res) => {
    try {
        const db = client.db("my-blog");
        await operations(db);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching / updating data from mongoDB",
            error,
        });
    }
};

connectDB().catch(console.error);

/* Parse JSON object included in the POST request,
 * adding body property to the req parameter to the matching route */
app.use(bodyParser.json());

app.get("/api/articles/:name", async (req, res) => {
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection("articles")
            .findOne({ name: articleName });

        res.status(200).json(articleInfo);
    }, res);
});

app.post("/api/articles/:name/upvote", async (req, res) => {
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection("articles")
            .findOne({ name: articleName });

        const updatedArticleInfo = await db.collection("articles")
            .findOneAndUpdate(
                { name: articleName },
                { "$set": { upvotes: articleInfo.upvotes + 1 } },
                { returnOriginal: false },
            );

        res.status(200).json(updatedArticleInfo);
    }, res);
});

/**
 * req.body {
 *   "username": "me",
 *   "text": "I love this article!"
 * }
 */
app.post("/api/articles/:name/add-comment", (req, res) => {
    const { username, text } = req.body;
    const articleName = req.params.name;

    withDB(async (db) => {
        const articleInfo = await db.collection("articles")
            .findOne({ name: articleName });

        const updatedArticleInfo = await db.collection("articles")
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
});

const server = app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer listening on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});

/* Close the server before Node.js exits */
process.on("exit", function () {
    client.close();
    server.close();
});