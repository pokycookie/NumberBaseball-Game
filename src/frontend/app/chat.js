const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatUl = document.getElementById("chatUl");

export const paintChat = (text, nickname, mode) => {
  // mode 0: system, 1: self, 2: other
  const chatLi = document.createElement("li");
  const chatNick = document.createElement("span");
  const chatText = document.createElement("span");

  chatNick.innerText = `${nickname}:`;
  chatText.innerText = text;

  if (mode === 0) {
    chatLi.classList.add("chat__li--system");
  } else if (mode === 1) {
    chatLi.classList.add("chat__li--me");
  } else if (mode === 2) {
    chatLi.classList.add("chat__li--user");
  }

  chatLi.appendChild(chatNick);
  chatLi.appendChild(chatText);
  chatUl.appendChild(chatLi);
};

export const chatApp = (nickname) => {
  chatForm.addEventListener("submit", (event) => {
    event.preventDefault();
    paintChat(chatInput.value, nickname, 1);
  });
};
