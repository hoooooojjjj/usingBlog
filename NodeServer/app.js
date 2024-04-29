// app.js
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.use("/user", require("./routes/user"));

app.listen(8080, () => {
  console.log("서버 실행 중");
});
