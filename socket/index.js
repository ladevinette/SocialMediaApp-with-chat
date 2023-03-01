import { Server } from "socket.io";

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some((user) => user.username === username) &&
    onlineUsers.push({ username, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (username) => {
  return onlineUsers.find((user) => user.username === username);
};

io.on("connection", (socket) => {
  io.emit("firstEvent", "Hello this is a test!");

  socket.on('hi', msg => console.log(msg));

  let timer;
  socket.on('foo', msg => console.log('foo', { msg }));
    let i = 0;
    (function tick() {{
      socket.emit('bar', i+=1);
      timer = setTimeout(tick, 1000);
    }})();

  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });

  socket.on("sendNotification", ({ senderName, reciverName }) => {
    const reciver = getUser(reciverName);
    io.to(reciver.socketId).emit("getNotification", {
      senderName,
      type,
    });
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
    clearTimeout(timer);
  });
});

io.listen(5000);
