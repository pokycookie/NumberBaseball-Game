/* eslint-disable no-undef */
import { chatApp, paintChat } from "./chat";
import { createUser, deleteUser, paintUserBoard } from "./user";
import { checkingData } from "./dataController";

let socket;
let roomUsers = 1;
let attackMode = 0;
let myTurn = false;
let roomStart = false;
let gameStart = false;

export const socketApp = (MODE) => {
  switch (parseInt(MODE)) {
    case 0:
      socket = io("/easy");
      break;
    default:
      console.log("FUCK", MODE);
  }

  // Set Nickname
  Nickname();

  // Set Room
  socket.emit("postRoom");

  // Join
  socket.on("meJoin", ({ nicknames, USER, IDs, ROOM }) => {
    console.log(socket.id);
    for (let i = 2; i < USER + 1; i++) {
      createUser(i, nicknames[i - 2], IDs[i - 2]);
    }
    socket.room = ROOM;
    paintRoomName(parseInt(MODE), ROOM);
    paintRoomStatus(USER);
    paintUserNickname();
    paintChat(`Welcome to join this game`, "system", 0);
  });

  // Someone Join
  socket.on("otherJoin", ({ nickname, USER, ID }) => {
    createUser(USER, nickname, ID);
    paintRoomStatus(USER);
    paintChat(`[${nickname}] joined this game`, "system", 0);
  });

  // Someone Leave
  socket.on("getLeave", ({ nickname, USER, clientDatas, clientIDs }) => {
    deleteUser();
    const IDs = [...clientIDs].filter((element) => element !== socket.id);
    const nicknames = [];
    IDs.forEach((ID) => {
      nicknames.push(clientDatas[ID]);
    });
    for (let i = 2; i < USER + 1; i++) {
      createUser(i, nicknames[i - 2], IDs[i - 2]);
    }
    paintRoomStatus(USER);
    paintChat(`[${nickname}] leaved this game`, "system", 0);
  });

  // Room Start
  socket.on("getRoomStart", () => {
    roomStart = true;
    const btn = document.querySelector(".attackBtn");
    if (btn.classList.contains("readyBtn")) {
      btn.classList.remove("readyBtn");
    }
    if (btn.classList.contains("ready")) {
      btn.classList.remove("ready");
    }
    btn.innerHTML = `<i class="fas fa-baseball-ball"></i>`;
    paintChat("Game Start", "system", 0);
    paintChat(`Please set up your number`, "system", 0);
    paintRoomStatus(roomUsers);
  });

  // Game Start
  socket.on("getGameStart", () => {
    gameStart = true;
    paintChat("All player has set a number", "system", 0);
    paintRoomStatus(roomUsers);
  });

  // Get Turn
  socket.on("getTurn", () => {
    myTurn = true;
    paintChat("It's your turn", "system", 0);
    socket.emit("postOtherTurn", socket.id);
    const userAreas = document.querySelectorAll(".userArea");
    userAreas.forEach((element) => {
      if (element.classList.contains("turn")) {
        element.classList.remove("turn");
      }
    });
  });
  socket.on("getOtherTurn", (ID) => {
    const userAreas = document.querySelectorAll(".userArea");
    const userArea = document.querySelector(`.userArea[data-id="${ID}"]`);
    userAreas.forEach((element) => {
      if (element.classList.contains("turn")) {
        element.classList.remove("turn");
      }
    });
    userArea.classList.add("turn");
  });

  // Attacked
  socket.on("getData", ({ dataArr, nickname }) => {
    paintChat(`[${dataArr}]`, nickname, 0);
    const DATA = checkingData(dataArr, parseInt(MODE) + 3, socket.numData);
    socket.emit("postChat", { chat: DATA });
    socket.emit("postCheckedData", { DATA, dataArr });
  });

  // Attack
  const attackBtn = document.querySelector(".attackBtn");
  socket.ready = false;
  attackBtn.addEventListener("click", () => {
    handleAttack(attackMode);
  });

  // Get Checked Data
  socket.on("getCheckedData", ({ DATA, dataArr, ID }) => {
    paintUserBoard(DATA, dataArr, ID);
  });

  // Chat
  socket.on("getChat", ({ chat, nickname }) => {
    paintChat(chat, nickname, 2);
  });

  Chat();
};

// Set Nickname
function Nickname() {
  const nickname = localStorage.getItem("nickname");
  socket.emit("postNickname", { nickname });
  socket.nickname = nickname;
}

// Room Title
function paintRoomName(MODE, ROOM) {
  let roomMode;
  const roomName = document.querySelector(".title--info .roomName");
  switch (MODE) {
    case 0:
      roomMode = "Easy";
      break;
    case 1:
      roomMode = "Normal";
      break;
    case 2:
      roomMode = "Hard";
      break;
  }
  roomName.innerText = `${roomMode} | ${ROOM}`;
}
function paintRoomStatus(USER) {
  const roomStatus = document.querySelector(".title--info .roomStatus");
  if (roomStart === true) {
    if (gameStart === true) {
      roomStatus.innerText = `Game has been started`;
    } else {
      roomStatus.innerText = `Game has been started (The player is setting a number)`;
    }
  } else {
    roomStatus.innerText = `Waiting for another player (${USER}/4)`;
  }
  roomUsers = USER;
}
function paintUserNickname() {
  const userNickname = document.querySelector(".title--nickname .userNickname");
  userNickname.innerText = socket.nickname;
}
function paintUserNumber() {
  const userNumber = document.querySelector(".title--nickname .userNumber");
  const numData = socket.numData.join("");
  userNumber.innerText = `| ${numData}`;
}

// Attack
function handleAttack(mode) {
  const datas = document.querySelectorAll(".dataDiv>span");
  const dataArr = [];
  let valid = true;

  // Validate Data
  datas.forEach((element) => dataArr.push(parseInt(element.innerText)));
  dataArr.forEach((element) => {
    if (dataArr.filter((i) => i !== element).length === dataArr.length - 1) {
      valid == true ? (valid = true) : (valid = false);
    } else {
      valid = false;
    }
  });

  // Attack MODE
  if (roomStart === true) {
    if (valid === false) {
      paintChat("Invalid Value", "system", 3);
    } else {
      if (mode === 0) {
        socket.numData = dataArr;
        socket.emit("postSetDataDone");
        paintChat("Your number has been set up successfully", "system", 0);
        paintUserNumber();
        attackMode = 1;
      } else {
        if (gameStart === true) {
          if (myTurn === true) {
            paintChat(`[${dataArr}]`, socket.nickname, 1);
            socket.emit("postData", { dataArr, nickname: socket.nickname, ID: socket.id });
            myTurn = false;
          } else {
            paintChat("It's not your turn", "system", 3);
          }
        } else {
          paintChat("Someone didn't set number yet", "system", 3);
        }
      }
    }
  } else {
    const btn = document.querySelector(".attackBtn");
    if (socket.ready === false) {
      socket.emit("ready");
      socket.ready = true;
      if (!btn.classList.contains("ready")) {
        btn.classList.add("ready");
      }
    } else {
      socket.emit("notReady");
      socket.ready = false;
      if (btn.classList.contains("ready")) {
        btn.classList.remove("ready");
      }
    }
  }
}

// Chat
function handleChat() {
  const chatInput = document.getElementById("chatInput");
  const { value } = chatInput;
  socket.emit("postChat", { chat: value });
  chatInput.value = "";
}
function Chat() {
  const { nickname } = socket;
  chatApp(nickname);

  const chatForm = document.getElementById("chatForm");
  chatForm.addEventListener("submit", () => {
    handleChat();
  });
}
