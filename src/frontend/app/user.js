export const createUser = (users, NICKNAME, ID) => {
  const userArea = document.createElement("div");
  const title = document.createElement("div");
  const nickname = document.createElement("div");
  const nicknameSpan = document.createElement("span");
  const avatar = document.createElement("div");
  const board = document.createElement("div");
  const ul = document.createElement("ul");

  userArea.classList.add("userArea");
  userArea.classList.add(`user${users - 1}`);
  userArea.setAttribute("data-id", ID);
  title.classList.add("user__title");
  nickname.classList.add("user__nickname");
  nicknameSpan.classList.add("user__nickname-span");
  avatar.classList.add("user__avatar");
  board.classList.add("user__board");
  ul.classList.add("user__board-ul");

  nicknameSpan.innerText = NICKNAME;
  nickname.appendChild(nicknameSpan);
  title.appendChild(nickname);
  title.appendChild(avatar);
  board.appendChild(ul);
  userArea.appendChild(title);
  userArea.appendChild(board);

  if (users < 4) {
    const nav1 = document.querySelector(".nav1");
    nav1.appendChild(userArea);
  } else {
    const nav2 = document.querySelector(".nav2");
    const chat = nav2.querySelector(".chat");
    nav2.insertBefore(userArea, chat);
  }
};

export const deleteUser = () => {
  const userAreas = document.querySelectorAll(".userArea");
  userAreas.forEach((element) => element.remove());
};

export const paintUserBoard = (DATA, dataArr, ID) => {
  const userArea = document.querySelector(`.userArea[data-id="${ID}"]`);
  const userBoardUl = userArea.lastChild.firstChild;

  const li = document.createElement("li");
  const numSpan = document.createElement("span");
  const dataSpan = document.createElement("span");

  numSpan.innerText = dataArr.join("");
  dataSpan.innerText = DATA;

  li.appendChild(numSpan);
  li.appendChild(dataSpan);
  userBoardUl.appendChild(li);
};
