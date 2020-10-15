import express from "express";
import bodyParser from "body-parser";
import path from "path";
import helmet from "helmet";
import router from "./api/routes";

const PORT = 9000;

const app = express();

// Helmet helps to secure Express server by setting various HTTP headers.
app.use(helmet());

app.use(express.static(path.join(__dirname, "/dist")));

/* Parse JSON object included in the POST request,
 * adding body property to the req parameter to the matching route */
app.use(bodyParser.json());

// Use API router as middleware with endpoint "/api"
app.use("/api", router);

/* All requests which are not caught by the other API routes should be
 * passed onto the app.
 * Allows the client side app to navigate between pages and process
 * URLs correctly */
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/dist/index.html"));
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
