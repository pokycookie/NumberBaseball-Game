const dataSettingArea = document.querySelector(".dataSetting");

export const validateValue = () => {
  let valid = true;
  const attackBtn = document.querySelector(".attackBtn");
  const arrowBtn = document.querySelectorAll(".data__item button");
  const datas = document.querySelectorAll(".dataDiv>span");
  const dataArr = [];
  datas.forEach((element) => {
    dataArr.push(parseInt(element.innerText));
    if (element.classList.contains("invalid")) {
      element.classList.remove("invalid");
    }
    if (attackBtn.classList.contains("invalid")) {
      attackBtn.classList.remove("invalid");
    }
    arrowBtn.forEach((element) => {
      if (element.classList.contains("invalid")) {
        element.classList.remove("invalid");
      }
    });
  });
  dataArr.forEach((element) => {
    if (dataArr.filter((i) => i !== element).length === dataArr.length - 1) {
      valid == true ? (valid = true) : (valid = false);
    } else {
      valid = false;
      datas.forEach((e) => {
        if (parseInt(e.innerText) === element) {
          e.classList.add("invalid");
          e.parentElement.previousSibling.classList.add("invalid");
          e.parentElement.nextSibling.classList.add("invalid");
        }
        attackBtn.classList.add("invalid");
      });
    }
  });
};

function handleUpBtn() {
  const value = this.nextSibling.childNodes[0].innerText;
  if (parseInt(value) < 9) {
    this.nextSibling.childNodes[0].innerText = parseInt(value) + 1;
  } else {
    this.nextSibling.childNodes[0].innerText = 0;
  }
  validateValue();
}

function handleDownBtn() {
  const value = this.previousSibling.childNodes[0].innerText;
  if (parseInt(value) > 0) {
    this.previousSibling.childNodes[0].innerText = parseInt(value) - 1;
  } else {
    this.previousSibling.childNodes[0].innerText = 9;
  }
  validateValue();
}

function handleController() {
  const upBtns = document.querySelectorAll(".upBtn");
  const downBtns = document.querySelectorAll(".downBtn");

  upBtns.forEach((element) => {
    element.addEventListener("click", handleUpBtn);
    element.classList.add("invalid");
  });
  downBtns.forEach((element) => {
    element.addEventListener("click", handleDownBtn);
    element.classList.add("invalid");
  });
}

export const createController = (MODE) => {
  if (MODE < 3) {
    for (let i = 0; i < parseInt(MODE) + 3; i++) {
      const dataItem = document.createElement("div");
      const upBtn = document.createElement("button");
      const upI = document.createElement("i");
      const downBtn = document.createElement("button");
      const downI = document.createElement("i");
      const dataDiv = document.createElement("div");
      const span = document.createElement("span");

      upBtn.classList.add("upBtn");
      upI.classList.add("fas");
      upI.classList.add("fa-angle-up");
      upBtn.appendChild(upI);

      downBtn.classList.add("downBtn");
      downI.classList.add("fas");
      downI.classList.add("fa-angle-down");
      downBtn.appendChild(downI);

      dataDiv.classList.add("dataDiv");
      span.innerText = "0";
      span.classList.add("invalid");
      dataDiv.appendChild(span);

      dataItem.classList.add("data__item");
      dataItem.appendChild(upBtn);
      dataItem.appendChild(dataDiv);
      dataItem.appendChild(downBtn);

      dataSettingArea.appendChild(dataItem);
    }
    document.querySelector(".attackBtn").classList.add("invalid");
  }
  handleController();
};
