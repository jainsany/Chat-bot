const express = require("express");
const http = require("http");
const app = express();
const server = http.createServer(app);
const path = require("path");
const { Server } = require("socket.io");
const io = new Server(server);

app.use(express.static(path.resolve("./public")));

app.get("/", (req, res) => {
  return res.sendFile("./public/index.html");
});

io.on("connection", (socket) => {
  socket.on("user-message", (message) => {
    io.emit("reply-message", message);
  });
});

server.listen(3000, () => {
  console.log("Server listen at port 3000");
});
