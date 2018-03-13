const express = require("express");
const app = express();
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require('cors');

app.use(bodyParser.json());
app.use(cors());

app.get("/users", (request, response) => {
    queries.list("users").then(users => {
        response.json({users});
    }).catch(console.error);
});

app.get("/tours", (request, response) => {
    queries.list("tours").then(tours => {
        response.json({tours});
    }).catch(console.error);
});

app.get("/tours/:id", (request, response) => {
    queries.read("tours", request.params.id).then(tours => {
        tours
            ? response.json({tours})
            : response.sendStatus(404)
    }).catch(console.error);
});

app.post("/users", (request, response) => {
    queries.create("users" , request.body).then(users => {
        response.status(201).json({users});
    }).catch(console.error);
});

app.post("/tours", (request, response) => {
    queries.create("tours" , request.body).then(tours => {
        response.status(201).json({tours});
    }).catch(console.error);
});



app.put("/tours/:id", (request, response) => {
    queries.update("tours", request.params.id, request.body).then(tours => {
        response.json({tours});
    }).catch(console.error);
});



app.delete("/tours/:id", (request, response) => {
    queries.delete("tours", request.params.id).then(() => {
        response.sendStatus(204);
    }).catch(console.error);
});


app.use((request, response) => {
    response.send(404);
});

module.exports = app;
