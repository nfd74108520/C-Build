// let h1 = document.createElement("h1");
// h1.innerText = "DOM";
// document.body.appendChild(h1);

// let div = document.createElement("div");

// let list = ["window", "document", "html"];

// for (let i = 0; i < 3; i++) {
//   let p = document.createElement("p");
//   p.innerText = list[i];
//   div.appendChild(p);
// }

// document.body.appendChild(div);

// let ul = document.createElement("ul");
// let lis = ["window", "document", "html"];

// lis.forEach((item) => {
//   let li = document.createElement("li");
//   li.innerText = item;
//   ul.appendChild(li);
// });

// document.body.appendChild(ul);

function genUl(liArray) {
  let ul = document.createElement("ul");

  liArray.forEach((item) => {
    let li = document.createElement("li");
    li.innerText = item;
    ul.appendChild(li);
  });

  return ul;
}

function $g(value) {
  //判斷是否為id selector
  if (value.includes("#")) {
    //回傳Element
    return document.querySelector(value);
  }
  //回傳NodeList集合
  var nodelist = document.querySelectorAll(value);
  return nodelist.length == 1 ? nodelist[0] : nodelist;
}


export { $g, genUl };
