const express = require("express");

const app = express();

app.get("/user", (req, res) => {
  res.send("User Page");
});

app.get("/user/:userid", (req, res) => {
  const { q } = req.query;
  const { userid } = req.params;
  if (q) {
    res.send(`View ${userid}'s Text : ${q}`);
  } else {
    res.send(`View UserID : ${userid}`);
  }
});

app.post("/user", (req, res) => {
  res.send("Create User info");
});

app.put("/user/:userid", (req, res) => {
  const { userid } = req.params;
  res.send(`Edit ${userid}'s info`);
});

app.delete("/user/:userid", (req, res) => {
  const { userid } = req.params;
  res.send(`Delete ${userid}'s info`);
});

app.listen(8080, () => {
  console.log("서버 실행 중");
});
