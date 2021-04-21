let gameTotal = {
  easy: {
    rule: [
      [1, 2],
      [3, ""],
    ],
    rest: [
      [1, 2],
      [3, ""],
    ],
  },
  middle: {
    rule: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, ""],
    ],
    rest: [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, ""],
    ],
  },
  hard: {
    rule: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, ""],
    ],
    rest: [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, ""],
    ],
  },
  hell: {
    rule: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, ""],
    ],
    rest: [
      [1, 2, 3, 4, 5],
      [6, 7, 8, 9, 10],
      [11, 12, 13, 14, 15],
      [16, 17, 18, 19, 20],
      [21, 22, 23, 24, ""],
    ],
  },
  god: {
    rule: [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, ""],
    ],
    rest: [
      [1, 2, 3, 4, 5, 6],
      [7, 8, 9, 10, 11, 12],
      [13, 14, 15, 16, 17, 18],
      [19, 20, 21, 22, 23, 24],
      [25, 26, 27, 28, 29, 30],
      [31, 32, 33, 34, 35, ""],
    ],
  },
  nothuman: {
    rule: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 32, 33, 34, 35],
      [36, 37, 38, 39, 40, 41, 42],
      [43, 44, 45, 46, 47, 48, ""],
    ],
    rest: [
      [1, 2, 3, 4, 5, 6, 7],
      [8, 9, 10, 11, 12, 13, 14],
      [15, 16, 17, 18, 19, 20, 21],
      [22, 23, 24, 25, 26, 27, 28],
      [29, 30, 31, 32, 33, 34, 35],
      [36, 37, 38, 39, 40, 41, 42],
      [43, 44, 45, 46, 47, 48, ""],
    ],
  },
};

let gameRest = gameTotal.easy.rest;
let gameRule = gameTotal.easy.rule;
let randomStep = [];
let autoStep = [];

let container = document.getElementById("container");

window.onload = changeBox(gameRule);

//渲染方塊
function changeBox(rule) {
  container.innerHTML = "";
  rule.forEach((row, rowIndex) => {
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row justify-content-center");

    row.forEach((col, colIndex) => {
      let colDiv = document.createElement("div");
      colDiv.addEventListener("click", boxCheck);
      colDiv.addEventListener("click", () => {
        changeBox(gameRule);
      });
      colDiv.setAttribute(
        "class",
        "col-4 d-flex justify-content-center align-items-center text-white p-0"
      );
      let input = document.createElement("input");
      input.value = rule[rowIndex][colIndex];
      input.setAttribute("class", "btn btn-primary border fs-1 w-100 h-100");
      if (col == "") {
        input.setAttribute("class", "btn btn-light fs-1 w-100 h-100");
      }
      colDiv.appendChild(input);
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
  let text = event.target.value;
  randomStep.push(text);
  boxMove(text);
}

//方塊移動
function boxMove(target) {
  gameRule.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (col == target) {
        address.x = rowIndex;
        address.y = colIndex;
        address.dir = boxDire();
        function boxDire() {
          if (rowIndex + 1 < gameRule.length) {
            if (gameRule[rowIndex + 1][colIndex] == "") {
              return 1;
            }
          }
          if (rowIndex - 1 > -1) {
            if (gameRule[rowIndex - 1][colIndex] == "") {
              return 2;
            }
          }
          if (colIndex + 1 < row.length) {
            if (gameRule[rowIndex][colIndex + 1] == "") {
              return 3;
            }
          }
          if (colIndex - 1 > -1) {
            if (gameRule[rowIndex][colIndex - 1] == "") {
              return 4;
            }
          }
        }
      }
    });
  });

  switch (address.dir) {
    case 1:
      autoStep.push(gameRule[address.x][address.y]);
      emptyBox = gameRule[address.x][address.y];
      gameRule[address.x][address.y] = gameRule[address.x + 1][address.y];
      gameRule[address.x + 1][address.y] = emptyBox;
      break;
    case 2:
      autoStep.push(gameRule[address.x][address.y]);
      emptyBox = gameRule[address.x][address.y];
      gameRule[address.x][address.y] = gameRule[address.x - 1][address.y];
      gameRule[address.x - 1][address.y] = emptyBox;
      break;
    case 3:
      autoStep.push(gameRule[address.x][address.y]);
      emptyBox = gameRule[address.x][address.y];
      gameRule[address.x][address.y] = gameRule[address.x][address.y + 1];
      gameRule[address.x][address.y + 1] = emptyBox;
      break;
    case 4:
      autoStep.push(gameRule[address.x][address.y]);
      emptyBox = gameRule[address.x][address.y];
      gameRule[address.x][address.y] = gameRule[address.x][address.y - 1];
      gameRule[address.x][address.y - 1] = emptyBox;
      break;
  }
}

//贏 條件
function winRule() {}

//開始遊戲(打亂數字)
function boxRandom() {
  let length = 0;
  gameRule.forEach((item) => {
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
    changeBox(gameRule);
  });
}

//重新開始
function gameReStart() {
  randomStep = [];
  autoStep = [];
  gameRule = JSON.parse(JSON.stringify(gameRest));
  changeBox(gameRest);
}

//難易度
function chooceGame(chooce) {
  randomStep = [];
  autoStep = [];
  gameRest = JSON.parse(JSON.stringify(gameTotal[chooce].rest));
  gameRule = JSON.parse(JSON.stringify(gameTotal[chooce].rest));
  changeBox(gameRest);
}

//自動完成
function autoRun() {
  let time = 1;
  let copyStep = JSON.parse(JSON.stringify(autoStep));
  console.log(autoStep);
  for (let i = autoStep.length - 1; i > -1; i--) {
    setTimeout(() => {
      boxMove(copyStep[i]);
      changeBox(gameRule);
      if (i == 0) {
        autoStep = [];
      }
    }, 50 * time);
    time++;
  }
  randomStep = [];
}