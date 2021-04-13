var list = [
  { Item: "啤酒", Type: "喝的" },
  { Item: "汽水", Type: "喝的" },
  { Item: "火鍋", Type: "吃的" },
  { Item: "燒烤", Type: "吃的" },
  { Item: "冰淇淋", Type: "吃的" },
];

// console.log(list.find((x) => x.Type == "吃的").Item);

let r = list.filter((x) => x.Type == "吃的");
// r.forEach((x) => console.log(x.Item));

let r5 = list.map((x) => {
  return {
    Id: list.length - list.indexOf(x),
    Name: x.Item,
  };
});

// console.log(r5);

var nums = [10000, 10, 100, 1, 101];
let r7 = nums.sort((a, b) => b - a);

// console.log(r7);

Array.prototype.groupBy = function (prop) {
  return this.reduce((groups, item) => {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

let r8 = list.groupBy("Type");
console.log(r8);

// var curAni = [
//   "鼠",
//   "牛",
//   "虎",
//   "兔",
//   "龍",
//   "蛇",
//   "馬",
//   "羊",
//   "猴",
//   "雞",
//   "狗",
//   "豬",
// ];
// var ani = ["豬", "龍", "鼠", "狗", "羊", "雞", "馬"];

// let sorAni = ani.sort((a, b) => curAni.indexOf(a) - curAni.indexOf(b));

// console.log(sorAni);
