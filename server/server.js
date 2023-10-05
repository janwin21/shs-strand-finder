require("dotenv").config();
require("express-async-errors");

const express = require("express");
const Connect = require("./database/Connection");
const app = express();

// ROUTES
const testRoute = require("./router/testRoute");

// IMPORT DB TEST
const User = require("./model/users");

// ERROR HANDLING

// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MAIN MIDDLEWARE
app.use("/shs-strand-finder/test", testRoute);

/*
// TEST
app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User({
      email: "janwin2@email.com",
      password: "password2",
      isAdmin: false,
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
});
*/

// LISTEN
const PORT = process.env.SHS_PORT;
const DB_URL = process.env.SHS_DATABASE_URL;

// CONNECTION
const connection = new Connect(DB_URL);

app.listen(PORT, async () => {
  console.log(`listen on server ${PORT}`);
  connection.connect(() => {
    console.log("TRIGGER THIS CALLBACK ONCE THE DATABASE CAUSED AN ERROR!");
  });
});
