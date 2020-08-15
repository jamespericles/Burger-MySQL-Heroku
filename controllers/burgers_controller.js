const express = require("express");

const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
  burger.all((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  console.log("POST, this post route was hit");
  burger.create(
    ["burger_name", "devoured"],
    [req.body.name, req.body.devoured],
    (result) => {
      res.json({ id: result.insertID });
    }
  );
});

router.put("/api/burgers/:id", (req, res) => {
  console.log("PUT, this put route was hit");
  const condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.update({ devoured: req.body.devoured }, condition, (result) => {
    if (result.changedRows === 0) {
      return res.status(404).end();
    }
    res.status(200).end();
  });
});

// Export routes for server.js
module.exports = router;
