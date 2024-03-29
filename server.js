const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/db", {});

app.use(require("./routes/api/workoutroutes.js"));
app.use(require("./routes/htmlroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});