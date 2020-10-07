import express from "express";
import bodyParser from "body-parser";

const PORT = 9000;
const app = express();

/* Parse JSON object included in the POST request,
 * adding body property to the req parameter to the matching route */
app.use(bodyParser.json());

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.post("/hello", (req, res) => {
    res.send(`Hello ${req.body.name}!`);
});

const server = app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer running on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});

/* Close the server before Node.js exits */
process.on("exit", function () {
    server.close();
});
