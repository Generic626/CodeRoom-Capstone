const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const notebookRoutes = require("./routes/notebook-routes");

// establish Express Server
const app = express();

// middleware to be used
// Parse for JSON
app.use(bodyParser.json());
// enable cors
app.use(cors());

// routers
app.use("/api/notebook", notebookRoutes);

mongoose.set("strictQuery", false);
mongoose
  .connect(
    "mongodb+srv://codeboard-admin:KrWyIaUxx5kuxf0b@cluster0.nqg35.mongodb.net/coderoom?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(5001, () => {
      console.log("Sucessful");
    });
  })
  .catch();
