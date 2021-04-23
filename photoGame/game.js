let container = document.getElementById("container");
let mycanvas = document.getElementById("mycanvas");
let mycxt = mycanvas.getContext("2d");
let img = new Image();
img.src =
  "data:image/jpeg;base64,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";

let photoRest;
let photoRule;
let photoChoose;

let randomStep = [];
let autoStep = [];

window.onload = () => {
  //預設難度
  startRender(`middle`);
  changeBox(photoRule);
};

function startRender(level) {
  let choose = photoTotal[level].rest.length;

  mycanvas.setAttribute("width", `${choose * 100}`);
  mycanvas.setAttribute("height", `${choose * 100}`);

  mycxt.drawImage(img, 0, 0, choose * 100, choose * 100);
  let photoChoose = photoTotal[level].rule.length;
  splitPhoto(photoChoose);
}

document.getElementsByClassName("newpohoto")[0].onclick = splitPhoto;

function urlCheck() {
  let url = document.getElementById("url");
  img.src = url.value;
  startRender(`middle`);

  changeBox(photoRule);
}

//分割圖片
function splitPhoto(level) {
  photoRule = [];
  photoRest = [];
  let id = 0;
  for (let i = 0; i < level; i++) {
    let rowArr1 = [];
    let rowArr2 = [];
    for (let j = 0; j < level; j++) {
      let data;
      if ((i + 1) * (j + 1) != level ** 2) {
        data = mycxt.getImageData(j * 100, i * 100, 100, 100);
      } else {
        data = mycxt.getImageData(j * 100, i * 100, 1, 1);
      }
      if (id == level ** 2 - 1) {
        id = "";
      } else {
        id++;
      }
      rowArr1.push({ id: id, photo: data });
      rowArr2.push({ id: id, photo: data });
    }
    photoRule.push(rowArr1);
    photoRest.push(rowArr2);
  }
}

//渲染方塊
function changeBox(rule) {
  container.innerHTML = "";
  rule.forEach((row, rowIndex) => {
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row justify-content-center");

    row.forEach((col, colIndex) => {
      let colDiv = document.createElement("div");
      colDiv.setAttribute(
        "class",
        "col-4 m-1 d-flex justify-content-center align-items-center text-white"
      );

      let canvas = document.createElement("canvas");
      canvas.setAttribute("width", "100");
      canvas.setAttribute("height", "100");
      canvas.setAttribute("id", `${col.id}`);
      canvas.getContext("2d").putImageData(col.photo, 0, 0);
      canvas.addEventListener("click", boxCheck);
      canvas.addEventListener("click", () => {
        changeBox(photoRule);
      });

      let input = document.createElement("input");
      input.value = rule[rowIndex][colIndex];
      input.setAttribute("class", "btn btn-primary border fs-1 w-100 h-100");
      if (col == "") {
        input.setAttribute("class", "btn btn-light fs-1 w-100 h-100");
      }

      colDiv.appendChild(canvas);
      rowDiv.appendChild(colDiv);
    });
    container.appendChild(rowDiv);
  });
}

let address = {
  x: 0,
  y: 0,
  dir: "",
};

//事件方塊
function boxCheck() {
  let text = event.target;
  randomStep.push(text.id);
  boxMove(text.id);
  console.log(text.id);
}

//方塊移動
function boxMove(target) {
  photoRule.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col.id == target) {
        address.x = rowIndex;
        address.y = colIndex;
        address.dir = boxDire();
        function boxDire() {
          if (rowIndex + 1 < photoRule.length) {
            if (photoRule[rowIndex + 1][colIndex].id == "") {
              return 1;
            }
          }
          if (rowIndex - 1 > -1) {
            if (photoRule[rowIndex - 1][colIndex].id == "") {
              return 2;
            }
          }
          if (colIndex + 1 < row.length) {
            if (photoRule[rowIndex][colIndex + 1].id == "") {
              return 3;
            }
          }
          if (colIndex - 1 > -1) {
            if (photoRule[rowIndex][colIndex - 1].id == "") {
              return 4;
            }
          }
        }
      }
    });
  });

  switch (address.dir) {
    case 1:
      autoStep.push(photoRule[address.x][address.y]);
      emptyBox = photoRule[address.x][address.y];
      photoRule[address.x][address.y] = photoRule[address.x + 1][address.y];
      photoRule[address.x + 1][address.y] = emptyBox;
      break;
    case 2:
      autoStep.push(photoRule[address.x][address.y]);
      emptyBox = photoRule[address.x][address.y];
      photoRule[address.x][address.y] = photoRule[address.x - 1][address.y];
      photoRule[address.x - 1][address.y] = emptyBox;
      break;
    case 3:
      autoStep.push(photoRule[address.x][address.y]);
      emptyBox = photoRule[address.x][address.y];
      photoRule[address.x][address.y] = photoRule[address.x][address.y + 1];
      photoRule[address.x][address.y + 1] = emptyBox;
      break;
    case 4:
      autoStep.push(photoRule[address.x][address.y]);
      emptyBox = photoRule[address.x][address.y];
      photoRule[address.x][address.y] = photoRule[address.x][address.y - 1];
      photoRule[address.x][address.y - 1] = emptyBox;
      break;
  }
}

//贏 條件
function winRule() {}

//開始遊戲(打亂數字)
function boxRandom() {
  let length = 0;
  photoRule.forEach((item) => {
    length += item.length;
  });
  let mathArr = [];
  for (let i = 0; i < 700; i++) {
    let random = Math.floor(Math.random() * (length - 1)) + 1;
    mathArr.push(random);
    randomStep.push(random);
  }
  mathArr.forEach((num) => {
    boxMove(num);
    changeBox(photoRule);
  });
}

//重新開始
function gameReStart() {
  randomStep = [];
  autoStep = [];
  changeBox(photoRest);
  splitPhoto(photoChoose);
}

//返回上一步
function gameReTurn() {}

//難易度
function chooceGame(chooce) {
  randomStep = [];
  autoStep = [];
  startRender(chooce);
  changeBox(photoRest);
}

//自動完成
function autoRun() {
  let time = 1;
  let copyStep = JSON.parse(JSON.stringify(autoStep));
  for (let i = autoStep.length - 1; i > -1; i--) {
    setTimeout(() => {
      boxMove(copyStep[i].id);
      changeBox(photoRule);
      if (i == 0) {
        autoStep = [];
      }
    }, 50 * time);
    time++;
  }
  randomStep = [];
}
