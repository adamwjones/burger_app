const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

// get route -> index
router.get("/", function (req, res) {
  res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
  burger.selectAll(function (allBurgers) {
    //console.log(allBurgers)
    res.render("index", { burger_data: allBurgers });
  });
});

// post route -> back to index
router.post("/burgers/create", (req, res) => {
  burger.insertOne(req.body.burger_name, (result) => {
    //console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/burgers/:id", (req, res) => {
  burger.updateOne(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});

module.exports = router;
