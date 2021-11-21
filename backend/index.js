// Define the routes from the app based on HTTP and URL's.
const express = require("express");

const app = express();

app.get("/", function (request, response) {
    response.status(200).send("Welcome to login api");
});

// Configure server listening door
const DOOR = 3333;
app.listen(DOOR, () => {
    console.log(`Listening on port ${DOOR}`);
});
