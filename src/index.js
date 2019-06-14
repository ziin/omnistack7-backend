require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect(
  `mongodb+srv://${process.env.DB_MONGO_USER}:${
    process.env.DB_MONGO_PASSWORD
  }@cluster0-nsadm.mongodb.net/test?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true
  }
);

const app = express();

// Static access to images
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

app.use(require("./routes"));

app.listen(3333);