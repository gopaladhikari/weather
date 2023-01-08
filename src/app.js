const express = require("express");
const hbs = require("hbs");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

// Staic path
const staticPath = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partials_path = path.join(__dirname, "../template/partials");

app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.use(express.static(staticPath));

// Routing
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/weather", (req, res) => {
  res.render("weather");
});
app.get("*", (req, res) => {
  res.render("404errorPage");
});

app.listen(port, () => {
  console.log("Your server is listening on port 3000!");
});
