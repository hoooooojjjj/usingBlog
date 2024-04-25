const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/plain");
  const { url, method } = req;
  if (method === "GET" && url === "/home") {
    res.write("home page");
    res.end();
  } else if (method === "GET" && url === "/about") {
    res.write("about page");
    res.end();
  } else {
    res.write("404 page Not Found");
    res.end();
  }
});

server.listen(8080, () => {
  console.log("서버 실행중");
});
