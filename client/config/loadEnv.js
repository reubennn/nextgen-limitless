/**
 * We are using dotenv to load our secrets specified
 * in our secrets.env file into our environment
 * variables using keys and values.
 *
 * - We can access the environment variables with process.env.
 * - As ES6 import is asynchronous, we need to execute config
 * in this separate file.
 */
import dotenv from "dotenv";
dotenv.config({ path: __dirname + "/secrets.env" });
