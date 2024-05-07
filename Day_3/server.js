const http = require("http");
const EventEmitter = require("events");
const controller = require("./controller");

const httpRequestEvent = new EventEmitter();

httpRequestEvent.on("request", (event) => {
  console.log(`Http request received`, event.url);
});

const server = http.createServer((req, res) => {
  httpRequestEvent.emit("request", { url: req.url });
  if (controller[req.url]) return controller[req.url](req, res);
  return controller["/404"](req, res);
  //   res.end("Hello world" + req.url);
});

server.on("listening", () => {
  console.log("Server started");
});

server.listen(5000);

// Write Http server
// index.html, contacts.html, 404.html
// server / with index.html. serve /contacts with contacts.html, serve anything else with
// 404.html
