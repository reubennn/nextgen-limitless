import client from "./connect";

/**
 * Generic function to query the database with specified operations.
 *
 * @param {String} collectionName name of the collection to query
 * @param {Object} res HTTP response object
 * @param {Function} operations to be performed
 */
export const queryDB = async (collectionName, res, operations) => {
    try {
        const db = client.db(process.env.DB_NAME);
        const collection = db.collection(collectionName);
        return await operations(collection);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching / updating data from MongoDB",
            error,
        });
    }
};
