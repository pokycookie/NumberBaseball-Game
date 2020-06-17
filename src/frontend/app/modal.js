export const paintInfo = (text, mode) => {
  // mode 0: Good, 1: Bad, 2: Error
  const modalArea = document.querySelector(".info-window");
  const newInfo = document.createElement("li");
  newInfo.innerText = text;
  switch (mode) {
    case 0:
      newInfo.classList.add("good");
      break;
    case 1:
      newInfo.classList.add("bad");
      break;
    case 2:
      newInfo.classList.add("error");
      break;
    default:
      break;
  }
  modalArea.appendChild(newInfo);
  setTimeout(deleteInfo, 5000, newInfo);
};

function deleteInfo(target) {
  target.remove();
}
