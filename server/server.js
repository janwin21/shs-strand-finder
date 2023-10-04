require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express();
const mongoose = require("mongoose");

// ERROR HANDLING

// MIDDLEWARE

app.get("/", (req, res) => {
  res.json({
    name: "CALL",
  });
});

// LISTEN
const PORT = process.env.SHS_PORT;
const DB_URL = process.env.SHS_DATABASE_URL;
const db = mongoose.connection;

app.listen(PORT, async () => {
  console.log(`listen on server ${PORT}`);

  try {
    mongoose.connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`successfully connect to database: ${DB_URL}`);
  } catch (err) {
    console.log(err);
  }
});
