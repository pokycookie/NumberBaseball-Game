import express from "express";
import socketIO from "socket.io";
import morgan from "morgan";
import dotenv from "dotenv";
import path from "path";
import "../frontend/styles/main.scss";

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.set("view engine", "pug");
app.set("views", path.resolve("src", "frontend", "templates"));

app.use(morgan("dev"));
app.use("/dist", express.static(path.resolve("dist")));

app.get("/", (req, res) => {
  res.render("main.pug", { FONTAWESOME: process.env.FONTAWESOME });
});

const server = app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
const io = socketIO.listen(server);

const easySpace = io.of("/easy");

// Easy Space
easySpace.on("connection", (socket) => {
  // Set Nickname
  socket.on("postNickname", ({ nickname }) => {
    socket.nickname = nickname;
  });

  // Set Room & Join
  socket.on("postRoom", async () => {
    let ROOM = 1;
    let clientIDs = [];
    let clientNicknames = [];

    await getClients();

    // eslint-disable-next-line no-constant-condition
    async function getClients() {
      const CLIENTS = await io
        .of("/easy")
        .in(ROOM)
        .clients((err, clients) => {
          console.log("Wait me");
          clientIDs = [...clients];
        });
      clientIDs.forEach((ID) => {
        clientNicknames.push(CLIENTS.sockets[ID].nickname);
      });
      if (clientIDs.length < 4) {
        console.log(`${socket.nickname} - Room: ${ROOM} | ${clientNicknames}`);
      } else {
        ROOM += 1;
        clientIDs = [];
        clientNicknames = [];
        console.log("next");
        getClients();
      }
    }
    const USER = clientIDs.length + 1;
    socket.join(ROOM);
    socket.room = ROOM;
    socket.to(socket.room).broadcast.emit("getJoin", { nickname: socket.nickname, USER, ROOM });
    socket.emit("postJoin", { nicknames: clientNicknames, USER, ROOM });
    if (USER === 4) {
      socket.emit("roomStart");
      socket.to(socket.room).broadcast.emit("roomStart");
    }
  });

  // Disconnect
  socket.on("disconnect", async () => {
    const ROOM = socket.room;
    let clientIDs = [];
    let clientNicknames = [];

    const CLIENTS = await io
      .of("/easy")
      .in(ROOM)
      .clients((err, clients) => {
        clientIDs = [...clients];
      });
    clientIDs.forEach((ID) => {
      clientNicknames.push(CLIENTS.sockets[ID].nickname);
    });
    const USER = clientIDs.length;
    socket.to(ROOM).broadcast.emit("getLeave", { nickname: socket.nickname, USER, clientNicknames });
  });

  // Chat Broadcast
  socket.on("postChat", ({ chat }) => {
    const ROOM = socket.room;
    socket.to(ROOM).broadcast.emit("getChat", { chat, nickname: socket.nickname });
  });

  // Data Broadcast
  socket.on("postData", ({ dataArr, nickname }) => {
    const ROOM = socket.room;
    socket.to(ROOM).broadcast.emit("getData", { dataArr, nickname });
  });
});
