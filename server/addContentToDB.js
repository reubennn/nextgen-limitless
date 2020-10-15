import { MongoClient } from "mongodb";
import documents from "./articleContent";

const MONGO_URI = "mongodb+srv://admin:<password>@fullstack-react.dle6p.mongodb.net/<dbname>?retryWrites=true&w=majority";

/* Connects to MongoDB */
const client = new MongoClient(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const run = async () => {
    try {
        await client.connect();
        const db = client.db("fullstack-react");
        const collection = db.collection("articles");
        console.log(`Successfully connected MongoDB server on ${MONGO_URI}\n`);

        /* This option prevents additional documents from being
         * inserted if one fails */
        const options = { ordered: true };

        console.log("Inserting article content to MongoDB.\n");

        const result = await collection.insertMany(documents, options);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
};

run().catch(console.error);
