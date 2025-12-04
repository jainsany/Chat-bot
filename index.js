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
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log("Server listen at port 3000");
});

