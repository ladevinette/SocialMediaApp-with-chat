import { Server } from "socket.io";

// const io = new Server({
//   cors: {
//     origin: [
//       "https://final-project-bs-33.vercel.app/homepage",
//       "https://final-project-bs-33.vercel.app/chat",
//     ],
//   },
// });

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (newUser, socketId) => {
  !onlineUsers.some((data) => data.newUser.id === newUser.id) &&
    onlineUsers.push({ newUser, socketId });
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter((user) => user.socketId !== socketId);
};

const getUser = (newUser) => {
  return onlineUsers.find((user) => user.newUser.id === newUser);
};

io.on("connection", (socket) => {
  io.emit("firstEvent", "Hello this is a test!");

  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });

  socket.on("sendNotification", ({ senderName, reciverId }) => {
    const reciver = getUser(reciverId);
    if (reciver) {
      io.to(reciver.socketId).emit("getNotification", {
        senderName,
      });
    } else {
      console.log("uers is offline");
    }
  });

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });

  console.log(onlineUsers);
});

io.listen(5000);
