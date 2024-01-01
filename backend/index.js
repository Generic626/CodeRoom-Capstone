const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const notebookRoutes = require("./routes/notebook-routes");

// establish Express Server
const app = express();

// middleware to be used
// Parse for JSON
app.use(bodyParser.json());

// routers
app.use("/api/notebook", placesRoutes);
