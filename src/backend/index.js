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
easySpace.room = {};

// Easy Space
easySpace.on("connection", (socket) => {
  socket.settedData = false;
  socket.lose = false;

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
          clientIDs = [...clients];
        });
      clientIDs.forEach((ID) => {
        clientNicknames.push(CLIENTS.sockets[ID].nickname);
      });
      if (!(ROOM in easySpace.room)) {
        console.log("create Object");
        easySpace.room[ROOM] = { roomStart: false, gameStart: false, users: 0, settedData: 0, ready: 0, lose: 0 };
      }
      if (clientIDs.length >= 4 || easySpace.room[ROOM].roomStart === true) {
        console.log("can't enter room", ROOM);
        ROOM += 1;
        clientIDs = [];
        clientNicknames = [];
        getClients();
      }
    }
    const USER = clientIDs.length + 1;
    socket.join(ROOM);
    socket.room = ROOM;
    socket.to(socket.room).broadcast.emit("otherJoin", { nickname: socket.nickname, USER, ID: socket.id });
    socket.emit("meJoin", { nicknames: clientNicknames, USER, IDs: clientIDs, ROOM });
    easySpace.room[socket.room].users += 1;
    if (USER === 4) {
      socket.emit("getRoomStart");
      socket.to(socket.room).broadcast.emit("getRoomStart");
      easySpace.room[socket.room].roomStart = true;
      easySpace.room[socket.room].users = 4;
    }
    console.log(easySpace.room);
  });

  // Disconnecting
  socket.on("disconnecting", () => {
    try {
      if (easySpace.room[socket.room].gameStart === true) {
        io.of("/easy")
          .in(socket.room)
          .clients((err, clients) => {
            if (clients.length > 1) {
              console.log("I will LEAVE!!!");
              let nextID = clients[clients.findIndex((element) => element === socket.id) + 1];
              if (typeof nextID === "undefined") {
                nextID = clients[0];
              }
              io.of("/easy").connected[nextID].emit("getTurn");
            }
          });
      }
    } catch (error) {
      console.log(error);
    }
  });

  // Disconnect
  socket.on("disconnect", async () => {
    const ROOM = socket.room;
    let clientIDs = [];
    let clientDatas = {};

    const CLIENTS = await io
      .of("/easy")
      .in(ROOM)
      .clients((err, clients) => {
        clientIDs = [...clients];
      });
    clientIDs.forEach((ID) => {
      clientDatas[ID] = CLIENTS.sockets[ID].nickname;
    });

    const USER = clientIDs.length;
    socket.to(ROOM).broadcast.emit("getLeave", { nickname: socket.nickname, USER, clientDatas, clientIDs });

    try {
      if (socket.lose === true) {
        easySpace.room[socket.room].lose -= 1;
      }
      if (socket.settedData === true) {
        easySpace.room[socket.room].settedData -= 1;
      }
      if (easySpace.room[socket.room].settedData === easySpace.room[socket.room].users && easySpace.room[socket.room].gameStart === false) {
        startGame();
      }
      easySpace.room[socket.room].users -= 1;
      if (easySpace.room[socket.room].users === easySpace.room[socket.room].lose + 1 && easySpace.room[socket.room].roomStart === true) {
        const winner = clientIDs.filter((element) => io.of("/easy").connected[element].lose === false);
        io.of("/easy").connected[winner[0]].emit("getWin");
      }
      if (easySpace.room[socket.room].users === 0) {
        easySpace.room[socket.room] = { roomStart: false, gameStart: false, users: 0, settedData: 0, ready: 0, lose: 0 };
      }
    } catch (error) {
      console.log(error);
    }
    console.log(easySpace.room);
  });

  // Close Game
  socket.on("postCloseGame", () => {
    io.of("/easy").to(socket.room).emit("getCloseGame");
  });

  // User Ready
  socket.on("ready", () => {
    easySpace.room[socket.room].ready += 1;
    if (easySpace.room[socket.room].ready > 4) {
      easySpace.room[socket.room].ready = 4;
    }
    if (easySpace.room[socket.room].users >= 2) {
      if (easySpace.room[socket.room].ready === easySpace.room[socket.room].users) {
        socket.emit("getRoomStart");
        socket.to(socket.room).broadcast.emit("getRoomStart");
        easySpace.room[socket.room].roomStart = true;
      }
    }
    console.log(easySpace.room);
  });
  socket.on("notReady", () => {
    easySpace.room[socket.room].ready -= 1;
    if (easySpace.room[socket.room].ready < 0) {
      easySpace.room[socket.room].ready = 0;
    }
    console.log(easySpace.room);
  });

  // User Set Data
  socket.on("postSetDataDone", async () => {
    easySpace.room[socket.room].settedData += 1;
    socket.settedData = true;
    if (easySpace.room[socket.room].settedData === easySpace.room[socket.room].users) {
      startGame();
    }
    console.log(easySpace.room);
  });

  // Start Game
  function startGame() {
    easySpace.room[socket.room].gameStart = true;
    socket.emit("getGameStart");
    socket.to(socket.room).broadcast.emit("getGameStart");
    io.of("/easy")
      .in(socket.room)
      .clients((err, clients) => {
        if (clients.length > 0) {
          io.of("/easy").connected[clients[0]].emit("getTurn");
        }
      });
  }

  // Turn
  socket.on("postOtherTurn", (ID) => {
    socket.to(socket.room).broadcast.emit("getOtherTurn", ID);
  });

  // Post Lose
  socket.on("postLose", (ID) => {
    easySpace.room[socket.room].lose += 1;
    console.log(easySpace.room);
    socket.lose = true;
    const nickname = io.of("/easy").in(socket.room).clients().sockets[ID].nickname;
    socket.to(socket.room).broadcast.emit("getLose", { ID, nickname });
    if (easySpace.room[socket.room].lose + 1 === easySpace.room[socket.room].users) {
      io.of("/easy")
        .in(socket.room)
        .clients((err, clients) => {
          const winner = clients.filter((id) => io.of("/easy").connected[id].lose === false);
          io.of("/easy").connected[winner].emit("getWin");
          const nickname = io.of("/easy").in(socket.room).clients().sockets[winner].nickname;
          socket.to(socket.room).broadcast.emit("otherWin", { ID: winner, nickname });
        });
    }
  });

  // Chat Broadcast
  socket.on("postChat", ({ chat }) => {
    socket.to(socket.room).broadcast.emit("getChat", { chat, nickname: socket.nickname });
  });

  // Data Broadcast
  socket.on("postData", ({ dataArr, nickname, ID }) => {
    if (dataArr !== "LOSE") {
      socket.to(socket.room).broadcast.emit("getData", { dataArr, nickname });
    }
    try {
      io.of("/easy")
        .in(socket.room)
        .clients((err, clients) => {
          if (clients.length > 0) {
            let nextID = clients[clients.findIndex((element) => element === ID) + 1];
            if (typeof nextID === "undefined") {
              nextID = clients[0];
            }
            io.of("/easy").connected[nextID].emit("getTurn");
          }
        });
    } catch (error) {
      console.log(error);
    }
  });

  // Checked Data Broadcast
  socket.on("postCheckedData", ({ DATA, dataArr }) => {
    socket.to(socket.room).broadcast.emit("getCheckedData", { DATA, dataArr, ID: socket.id });
  });
});
