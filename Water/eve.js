window.onload = function () {
  let tbody, data;

  tbody = document.querySelector("table>tbody");

  data = document.getElementsByClassName("reservoir");

  for (let i = 0; i < data.length; i++) {
    let tr = document.createElement("tr");

    let item = data[i];

    let name = item.children[0].innerText;
    let svg = item.children[1].innerHTML;
    let volumn = item.children[2].innerText;
    let dueDay = item.children[4].innerText;

    for (let j = 0; j < 5; j++) {
      let th = document.createElement("th");

      if (j == 0) {
        th.innerText = i + 1;
      } else if (j == 1) {
        th.innerText = name;
      } else if (j == 2) {
        th.innerHTML = `<svg>${svg}</svg>`;
      } else if (j == 3) {
        th.innerText = volumn;
      } else if (j == 4) {
        th.innerText = dueDay;
      }
      tr.appendChild(th);
    }
    tbody.appendChild(tr);
  }
};
