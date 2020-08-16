const express = require("express");
const handlebars = require("express-handlebars");
const router = require("./controllers/burgers_controller.js");

const PORT = process.env.PORT || 3000;

const app = express();

// Static content served from 'public' directory
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine(
  "handlebars",

  handlebars({
    layoutsDir: __dirname + "/views/layouts",
  })
);
app.set("view engine", "handlebars");

app.use(router);

app.listen(process.env.PORT || PORT, () => {
  console.log("App now listening at localhost:" + PORT);
});
