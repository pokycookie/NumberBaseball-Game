import { socketApp } from "./socket";
import { createController } from "./dataController";

const login = document.querySelector(".login");
const room = document.querySelector(".multiRoom");
const loginForm = document.querySelector(".login__form");
const loginInput = loginForm.querySelector(".login__input");
const loginModes = document.querySelectorAll(".modeBtn");

let MODE;

function handleLogin(event) {
  // Prevent Event
  event.preventDefault();

  // Save in LocalStorage & Initialize Login Input & Handle Invisi
  localStorage.setItem("nickname", loginInput.value);

  // Run Application
  createController(MODE);
  socketApp(MODE);

  // Invisi
  loginInput.value = "";
  handleInvisi();
}

function handleInvisi() {
  login.classList.add("invisi");
  room.classList.remove("invisi");
}

function handleMode() {
  MODE = this.dataset.mode;
  loginModes.forEach((element) => {
    if (element.classList.contains("checked")) element.classList.remove("checked");
  });
  this.classList.add("checked");
  localStorage.setItem("mode", MODE);
}

export const loginApp = () => {
  // Set EventListener
  loginForm.addEventListener("submit", handleLogin);

  // Get Nickname in LocalStorage
  const NICKNAME = localStorage.getItem("nickname");
  if (NICKNAME !== null) {
    loginInput.value = NICKNAME;
  }

  // Set Mode
  MODE = localStorage.getItem("mode");
  if (MODE === null) {
    MODE = 0;
  }
  loginModes.forEach((element) => {
    if (element.dataset.mode == MODE) {
      element.classList.add("checked");
    }
    element.addEventListener("click", handleMode);
  });
};
