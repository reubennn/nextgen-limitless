import express from "express";

const PORT = 9000;
const app = express();

app.get("/hello", (req, res) => {
    res.send("Hello");
});

app.listen(PORT, () => {
    console.log(`\n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\
    \nServer running on PORT ${PORT}.\
    \n~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n`);
});
