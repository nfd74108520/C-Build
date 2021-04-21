let lastYear = document.getElementById("btn-last");
let nextYear = document.getElementById("btn-next");
let displayYear = document.getElementById("display-year");

let lastMonth = document.getElementById("btn-last");
let nextMonth = document.getElementById("btn-next");
let displayMonth = document.getElementById("display-month");

let displayDate = document.getElementById("display-date");

let testdate = new Date(2021, 0, 1);
console.log(testdate.getDay())

let yearCount = 2021;
let monthCount = 0;
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

window.onload = changeYear;

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
  let row = document.createElement("div");
  row.setAttribute("class", "row");
  for (let i = 0; i < date; i++) {
    let div = document.createElement("div");
    div.addEventListener("click", todoList);
    div.setAttribute(
      "class",
      "col_7 text-center border py-3 btn btn-outline-secondary"
    );
    div.innerText = i + 1;

    row.appendChild(div);
  }
  displayDate.appendChild(row);
}

function todoList() {
  console.log(event.target.innerText);
}
