let displayYear = document.getElementById("display-year");

let displayMonth = document.getElementById("display-month");
let addBtn = document.getElementById("addBtn");
let displayDate = document.getElementById("display-date");

let hrLine = document.getElementById("hrLine");
let textArea = document.getElementById("textArea");

let todoLIstStorage = {};

let yearCount = 2020;
let monthCount = 4;
let monthArray = [
  "一 月",
  "二 月",
  "三 月",
  "四 月",
  "五 月",
  "六 月",
  "七 月",
  "八 月",
  "九 月",
  "十 月",
  "十一 月",
  "十二 月",
];

window.onload = changeMonth();

function changeYear(select) {
  if (select) {
    displayYear.textContent = yearCount += 1;
  } else {
    displayYear.textContent = yearCount -= 1;
  }
  monthCount = 0;
  changeMonth(false);
}

function changeMonth(select) {
  if (select) {
    if (monthCount < monthArray.length - 1) {
      monthCount++;
    }
    displayMonth.textContent = monthArray[monthCount];
  } else {
    if (monthCount > 0) {
      monthCount--;
    }
    displayMonth.textContent = monthArray[monthCount];
  }
  let date = new Date(yearCount, monthCount + 1, 0).getDate();
  createDate(date);
}

function createDate(date) {
  displayDate.innerHTML = "";

  let firstTime = new Date(yearCount, monthCount, 1);
  let firstDay = firstTime.getDay();

  let lastTime = new Date(yearCount, monthCount, date);
  let lastDay = lastTime.getDay();

  let row = document.createElement("div");
  row.setAttribute("class", "row");

  for (let j = 0; j < firstDay; j++) {
    let div = document.createElement("div");
    div.setAttribute("class", "col_7 py-3 border");
    row.appendChild(div);
  }

  for (let i = 0; i < date; i++) {
    let div = document.createElement("div");
    div.addEventListener("click", todoList);

    let nowTime = new Date(yearCount, monthCount, i + 1);
    let nowDay = nowTime.getDay();
    div.setAttribute(
      "class",
      "col_7 text-start border btn btn-outline-secondary day-box fs-4"
    );
    div.setAttribute("data-bs-toggle", "modal");
    div.setAttribute("data-bs-target", "#exampleModal");

    if (nowDay == 0) {
      div.classList.add("text-danger");
    } else if (nowDay == 6) {
      div.classList.add("text-success");
    }

    if (i % 3 == 0) {
      // div.classList.add("border-primary");
    }

    div.innerText = i + 1;

    row.appendChild(div);
  }

  for (let k = 0; k < 6 - lastDay; k++) {
    let div = document.createElement("div");
    div.setAttribute("class", "col_7 py-3 border");
    row.appendChild(div);
  }
  displayDate.appendChild(row);
}

function todoList() {
  let modalTitle = document.querySelector(".modal-title");
  let todoShow = document.getElementById("todoShow");
  todoShow.innerHTML = "";
  let ul = document.createElement("ul");
  ul.classList.add("list-group");
  todoShow.appendChild(ul);

  let todo = JSON.parse(localStorage.getItem(yearCount + 1));

  modalTitle.innerText =
    "行事曆 - " +
    yearCount +
    "/" +
    (monthCount + 1) +
    "/" +
    event.target.innerText;

  for (let i = 0; i < 5; i++) {
    let li = document.createElement("li");
    li.classList.add("list-group-item");
    li.classList.add("check");
    li.addEventListener("click", todoClick);

    li.innerText = i + 1;
    ul.appendChild(li);
  }
}

function fixList(e) {
  let inputText = document.getElementById("inputText");

  hrLine.setAttribute("class", "");
  textArea.setAttribute("class", "input-group");
  addBtn.setAttribute("class", "btn btn-success invisible");

  inputText.innerText = e.innerText;
}

function storageList() {
  todoLIstStorage[monthCount + 1] = { 1: "123", 2: "456", 3: "789" };

  localStorage.setItem(yearCount, JSON.stringify(todoLIstStorage));
  leaveList();
}

function leaveList() {
  hrLine.setAttribute("class", "d-none");
  textArea.setAttribute("class", "input-group d-none");
  addBtn.setAttribute("class", "btn btn-success visible");
}

function todoClick() {
  let liArray = document.querySelectorAll(".check");
  let target = event.target;

  target.classList.toggle("active");
  fixList(target);

  if (!target.classList.contains("active")) {
    leaveList();
  }

  liArray.forEach((item) => {
    if (target.innerText != item.innerText) {
      item.classList.remove("active");
    }
  });
}

function addTodo() {
  leaveList();
}
