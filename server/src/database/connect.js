import { MongoClient } from "mongodb";

/* Connect client to MongoDB */
const client = new MongoClient(process.env.MONGO_URI, {
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
connectDB()
    .catch(console.error)
    .then(client.close());

/** Close the MongoDB client before Node.js exits */
process.on("exit", () => {
    client.close();
});

export default client;
