/**
 * This file adds initial article content to the database using
 * data from articles.js.
 *
 * - Simply run `npm run db-setup:articles`.
 * - Or to load all data into MongoDB:`npm run db-setup`.
 */
import { MongoClient } from "mongodb";
import documents from "./articles";

/** dotenv config setup for loading secret environment variables */
import "../config/loadEnv";

/* Connects client to MongoDB */
const client = new MongoClient(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

/**
 * Main function to run to add the data to the database.
 */
const run = async () => {
    try {
        await client.connect();
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(process.env.ARTICLES);
        console.log("Successfully connected to MongoDB server\n");

        /**
         * This option prevents additional documents from being
         * inserted if one fails.
         */
        const options = { ordered: true };

        console.log("Inserting article content to MongoDB.\n");

        const result = await collection.insertMany(documents, options);
        console.log(`${result.insertedCount} documents were inserted.`);
    } finally {
        await client.close();
    }
};

run().catch(console.error);
