// Dependencies
const express = require("express");
const exphbs = require("express-handlebars");

// Instance of the express app
const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// Set the port of our application // process.env.PORT lets port be set by Heroku
const PORT = process.env.PORT || 8080;

// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});