const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { url } = req;
  if (url === '/friends') {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ id: 1, name: "Sir Isac Newton" }));
  } else if (url === '/login') {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.end(JSON.stringify({ id: 1, name: "Login" }));
  } else {
    res.statusCode = 404;
    res.end();
  }
 
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
