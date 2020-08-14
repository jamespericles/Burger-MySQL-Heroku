const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

// Static content served from 'public' directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set handlebars
const handlebars = require("express-handlebars");

app.engine(
  "handlebars",
  handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", { layout: "index" });
});
