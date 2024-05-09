const { createServer } = require("node:http");
const OS = require("os");

const CPU = OS.cpus();

const requestHandler = (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET",
    "Content-Type": "text/plain",
  };
  if (req.url === "/" && req.method === "GET") {
    setTimeout(() => {
      res.writeHead(200, headers);
      res.end(
        JSON.stringify({
          message: {
            CPU,
            OS,
          },
        })
      );
      console.log("Data Loaded");
    }, 5000);
    console.log("Data is Loading...");
  } else {
    res.end(JSON.stringify({ message: "Not Found" }));
  }
};
const server = createServer(requestHandler);

server.listen(5500, "localhost", () => {
  console.log("Server is listening on port 5500...");
});
