/* eslint-disable no-undef */
import { chatApp, paintChat } from "./chat";
import { createUser, deleteUser } from "./user";

let socket;
let attackMode = 0;
let myTurn = true;
let roomStart = false;

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
  socket.on("postJoin", ({ nicknames, USER, ROOM }) => {
    for (let i = 2; i < USER + 1; i++) {
      createUser(i, nicknames[i - 2]);
    }
    paintChat(`Welcome to join this game ${ROOM} ${USER}/4`, "system", 0);
  });

  // Someone Join
  socket.on("getJoin", ({ nickname, USER, ROOM }) => {
    createUser(USER, nickname);
    paintChat(`[${nickname}] joined this game ${ROOM} ${USER}/4`, "system", 0);
  });

  // Someone Leave
  socket.on("getLeave", ({ nickname, USER, clientNicknames }) => {
    deleteUser();
    const nicknames = [...clientNicknames].filter((element) => element !== socket.nickname);
    for (let i = 2; i < USER + 1; i++) {
      createUser(i, nicknames[i - 2]);
    }
    paintChat(`${nickname} leaved this game ${USER}/4`, "system", 0);
  });

  // room Start
  socket.on("roomStart", () => {
    paintChat("Game Start", "system", 0);
    paintChat(`Please set up your number`, "system", 0);
    roomStart = true;
  });

  // Attack
  socket.on("getData", ({ dataArr, nickname }) => {
    paintChat(`[${dataArr}]`, nickname, 0);
  });

  const attackBtn = document.querySelector(".attackBtn");
  attackBtn.addEventListener("click", () => {
    handleAttack(attackMode);
  });

  // Chatting
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

  // Attack
  if (roomStart === true) {
    if (valid === false) {
      paintChat("Invalid Value", "system", 0);
    } else {
      if (mode === 0) {
        paintChat("Your number has been set up successfully", "system", 0);
        paintChat(`[${dataArr}] is your number`, "system", 0);
        socket.numData = dataArr;
        attackMode = 1;
      } else {
        if (myTurn === true) {
          paintChat(`[${dataArr}]`, socket.nickname, 1);
          socket.emit("postData", { dataArr, nickname: socket.nickname });
          myTurn = false;
        } else {
          paintChat("It's not your turn", "system", 0);
        }
      }
    }
  } else {
    paintChat("Game has not started yet.", "system", 0);
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
