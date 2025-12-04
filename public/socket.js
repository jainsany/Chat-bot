const socket = io();
const sendbtn = document.getElementById("send-btn");
const messageInput = document.getElementById("message-input");
const allMessage = document.getElementById("messages");

sendbtn.addEventListener("click", (e) => {
  //e.preventDefault(); e.preventDefault();
  const message = messageInput.value;
  console.log(message);
  if (message != "") {
    socket.emit("user-message", message);
    messageInput.value = "";
    messageInput.focus();
  }
});

socket.on("reply-message", (message) => {
  const p = document.createElement("p");
  p.innerText = message;
  allMessage.append(p);
});
