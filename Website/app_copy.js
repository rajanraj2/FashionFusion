import express from "express";
import db from "./db/database.js";
import session from 'express-session';
import dotenv from 'dotenv';
// import '../passport.js';
// import '../Website/passport.cjs';

dotenv.config();


const app = express();
const port = 3000;

db();
// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: process.env.SESSION_SECRET
// }));

export default app;


app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/about", (req, res) => {
  res.render("about.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
})

app.get("/wardrobe", (req, res) => {
  res.render("wardrobe.ejs");
})

app.get("/subscription", (req, res) => {
  res.render("subscription.ejs");
})

app.get("/buy", (req, res) => {
  res.render("contact.ejs");
})

app.get("/calendar", (req, res) => {
  res.render("calendar.ejs");
})

app.get("/log", (req, res) => {
  res.render("log.ejs");
})

app.get("/recommendation", (req, res) => {
  res.render("recommendation.ejs");
})

app.get("/team", (req, res) => {
  res.render("team.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
