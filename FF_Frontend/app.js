import express from "express";
import session from 'express-session';
import dotenv from 'dotenv';
import axios from 'axios';
import path from 'path';
import bodyParser from 'body-parser';

// import '../passport.js';
// import '../Website/passport.cjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4060;
const server = process.env.SERVER || "http://localhost:4060";


app.use(bodyParser.urlencoded({ extended: true }));


// function sign() {
//   axios.post(`${server}/api/v1/user/create-account`, async (req, res) => {
//     try {
//       console.log(req.body);
//       const type = req.body.type;
//       const participants = req.body.participants;
//       const response = await axios.get(`https://bored-api.appbrewery.com/filter?type=${type}&participants=${participants}`);
//       const result = response.data;
//       console.log(result);
//       res.render("index.ejs", { 
//         data: result[Math.floor(Math.random() * result.length)],
//        });
//     } catch (error) {
//       console.error("Failed to make request:", error.message);
//       res.render("index.ejs", {
//         error: "No activities match your criteria.",
//       });
//     }
//   });
// }

// sign();

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

app.get("/logsign", (req, res) => {
  res.render("team.ejs");
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
