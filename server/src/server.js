import express from "express";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";
import articlesInfo from "./fakeData";

const PORT = 9000;
const app = express();

/* Parse JSON object included in the POST request,
 * adding body property to the req parameter to the matching route */
app.use(bodyParser.json());

app.get("/api/articles/:name", async (req, res) => {
    try {
        const articleName = req.params.name;

        const client = await MongoClient.connect("mongodb://localhost:27017", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        const db = client.db("my-blog");

        const articleInfo = await db.collection("articles")
            .findOne({ name: articleName });
        res.status(200).json(articleInfo);

        client.close();
    } catch (error) {
        res.stats(500).json({ message: "Error connecting to db", error });
    }
});

app.post("/api/articles/:name/upvote", (req, res) => {
    const articleName = req.params.name;
    articlesInfo[articleName].upvotes += 1;
    res.status(200)
        .send(`${articleName} now has \
        ${articlesInfo[articleName].upvotes} upvotes`);
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

    articlesInfo[articleName].comments.push({ username, text });

    res.status(200).send(articlesInfo[articleName]);
});

const server = app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer listening on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});

/* Close the server before Node.js exits */
process.on("exit", function () {
    server.close();
});
