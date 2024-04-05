import express from "express";

const app = express();
const port = 3000;

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

app.get("/wadrobe", (req, res) => {
  res.render("wadrobe.ejs");
})

app.get("/subscription", (req, res) => {
  res.render("subscription.ejs");
})

app.get("/buy", (req, res) => {
  res.render("contact.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
