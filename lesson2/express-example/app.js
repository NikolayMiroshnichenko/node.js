const express = require("express");

const app = express();


app.get("/", (request, response) => {
    console.log(request.url);

    response.send("<h2>Home Page<h2>")
});

app.get("/contacts", (request, response) => {
    response.send("<h2>Contacts Page<h2>")
});



app.listen(3000, () => console.log('Server running'));