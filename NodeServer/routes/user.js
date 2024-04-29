const express = require("express");

const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    res.send("User Page");
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("Create User info");
  });

router
  .route("/:userid")
  .get((req, res) => {
    const { q } = req.query;
    const { userid } = req.params;
    if (q) {
      res.send(`View ${userid}'s Text : ${q}`);
    } else {
      res.send(`View UserID : ${userid}`);
    }
  })
  .put((req, res) => {
    const { userid } = req.params;
    res.send(`Edit ${userid}'s info`);
  })
  .delete((req, res) => {
    const { userid } = req.params;
    res.send(`Delete ${userid}'s info`);
  });

module.exports = router;
