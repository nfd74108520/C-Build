let displayYear = document.getElementById("display-year");

let displayMonth = document.getElementById("display-month");

let displayDate = document.getElementById("display-date");

let todoLIstStorage = { id: 1, year: 2021, month: 12 };

localStorage.setItem(2021, JSON.stringify(todoLIstStorage));
var cat = JSON.parse(localStorage.getItem("2021"));
console.dir(cat.month);

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
  let modalBody = document.querySelector(".modal-body");

  modalTitle.innerText =
    "行事曆 - " +
    yearCount +
    "/" +
    (monthCount + 1) +
    "/" +
    event.target.innerText;

  modalBody.innerText = "";
}

function storageList() {}
