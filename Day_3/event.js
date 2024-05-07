const EventEmitter = require("events");

const event = new EventEmitter();

event.on("listening", (e) => {
  console.log(e);
});

event.emit("listening", { name: "Texas" });

// npm i events
