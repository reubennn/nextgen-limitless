import { ObjectID } from "mongodb";
import { queryDB } from "../database/query";

/**
 * Adds a comment to the database based on the request.
 * - Stores name, comment and avatar as an Object from req.body.
 * - We know which article it belongs to with the :path property.
 *
 * @example
 * // Adds comment to database with specified name, comment and avatar.
 * endpoint: ".../articles/:path/add-comment"
 * req.body {
 *   "name": "John Doe",
 *   "comment": "I love this article!"
 *   "avatar": https://res.cloudinary.com/reuben/image/upload/v1608009191/fullstack-react/authors/jamil-thomson_mkzu8o.jpg"
 * }
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const addCommentToArticle = async (req, res) => {
    const { name, comment, avatar } = req.body;
    const articlePath = req.params.path;

    queryDB(process.env.COMMENTS, res, async (collection) => {
        const result = await collection
            .insertOne(
                {
                    name,
                    comment,
                    avatar,
                    timestamp: new Date(Date.now()),
                    upvotes: 0,
                    downvotes: 0,
                    depth: 0,
                    parent: "root",
                    path: articlePath,
                },
            );
        if (result.insertedCount !== 1) {
            res.status(500).json({
                message: "Server error: unable to add comment at this time.",
            });
        } else {
            res.status(200).json(result.ops[0]);
        }
    });
};

/**
 * Fetches all the root comments of an article.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const getRootComments = async (req, res) => {
    const articlePath = req.params.path;

    queryDB(process.env.COMMENTS, res, async (collection) => {
        const result = await collection
            .find({ path: articlePath, parent: "root" }).toArray();

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
 * Fetches all of the replies associated with a particular comment.
 *
 * - For each reply, the function calls itself recursively to see if
 * there are any replies associated with it until none are found.
 *
 * @param {String} _id the MongoDB ObjectID string => ObjectID(_id)
 * @param {String} path the article url path
 * @param {Object} res HTTP response object
 * @return {Array} array containing all associated replies and nested replies
 */
const getReplies = async (_id, path, res) => {
    const result = await queryDB(
        process.env.COMMENTS, res, async (collection) => {
            const result = await collection
                .find({ path: path, parent: ObjectID(_id) }).toArray();

            const replies = result.slice();
            if (result !== undefined && result !== null) {
                if (result.length > 0) {
                    for (const [index, element] of result.entries()) {
                        const deepResult =
                            await getReplies(element._id, element.path);
                        if (deepResult !== undefined && deepResult !== null) {
                            if (deepResult.length > 0) {
                                replies[index].replies = deepResult.slice();
                            }
                        }
                    };
                }
            } else {
                return null;
            }
            return replies;
        });
    return result;
};

/**
 * Fetches all of the replies associated with a particular comment.
 *
 * - Sends the array as JSON string which can be parsed by the client.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const getNestedReplies = async (req, res) => {
    const articlePath = req.params.path;
    const _id = req.params._id;

    getReplies(_id, articlePath, res)
        .then((result) => {
            if (result === null || result === undefined) {
                res.status(200).json(JSON.stringify([]));
            } else if (!result.length) {
                res.status(200).json(JSON.stringify([]));
            } else {
                res.status(200).json(JSON.stringify(result));
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(500).json({
                message: "An error occurred while trying to fetch the replies.",
            });
        });
};

/**
 * Using the _id, we can find the desired comment,
 * and add one upvote to it.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const upvoteComment = async (req, res) => {
    const articlePath = req.params.path;
    const _id = req.params._id;

    queryDB(process.env.COMMENTS, res, async (collection) => {
        const result = await collection
            .findOneAndUpdate(
                { path: articlePath, _id: ObjectID(_id) },
                {
                    "$inc": {
                        upvotes: 1,
                    },
                },
                { returnOriginal: false },
            );
        if (result.lastErrorObject.updatedExisting) {
            res.status(200).json(result.value);
        } else if (!result.lastErrorObject.updatedExisting) {
            res.status(404).json({
                message: "Could not find the specified comment.",
            });
        } else {
            res.status(500).json({
                message: "Server error: unable to upvote comment.",
            });
        }
    });
};

/**
 * Using the _id, we can find the desired comment,
 * and add one downvote to it.
 *
 * @param {Object} req HTTP request object
 * @param {Object} res HTTP response object
 */
export const downvoteComment = async (req, res) => {
    const articlePath = req.params.path;
    const _id = req.params._id;

    queryDB(process.env.COMMENTS, res, async (collection) => {
        const result = await collection
            .findOneAndUpdate(
                { path: articlePath, _id: ObjectID(_id) },
                {
                    "$inc": {
                        downvotes: 1,
                    },
                },
                { returnOriginal: false },
            );
        if (result.lastErrorObject.updatedExisting) {
            res.status(200).json(result.value);
        } else if (!result.lastErrorObject.updatedExisting) {
            res.status(404).json({
                message: "Could not find the specified comment.",
            });
        } else {
            res.status(500).json({
                message: "Server error: unable to upvote comment.",
            });
        }
    });
};
