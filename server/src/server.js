import express from "express";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import router from "./api/routes";

const PORT = 9000;

/** Set up the Express.js app */
const app = express();

/** Helmet helps to secure Express server by setting various HTTP headers. */
app.use(helmet());

/** Serve static files on Express server using middleware */
app.use(express.static(path.join(__dirname, "/dist")));

/**
 * Parse JSON objects included in requests.
 * - Adds body property to the req parameter to the matching route.
 */
app.use(bodyParser.json());

/** Use API router as middleware with endpoint "/api" */
app.use("/api", router);

/**
 * All requests which are not caught by the other API routes should be
 * passed onto the app.
 * - Allows the client side app to navigate between pages and process
 * URLs correctly.
 */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
});

/** Bind Express app and listen for connections */
const server = app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer listening on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});

/* Close the server before Node.js exits */
process.on("exit", function () {
    server.close();
});
