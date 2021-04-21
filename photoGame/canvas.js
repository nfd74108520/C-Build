let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let img = new Image();
img.onload = function () {
  //原圖要截取的座標起點
  let sourceX = 30;
  let sourceY = 5;
  //原圖要截取的尺寸
  let sourceW = 66;
  let sourceH = 32;
  //被截取的圖片要放在畫布的座標
  let destX = 150;
  let destY = 100;
  //被截取的圖片的尺寸,通常會和截取的尺寸相同,否則就會被放大或縮小
  let destW = sourceW;
  let destH = sourceH;
  ctx.drawImage(
    img,
    sourceX,
    sourceY,
    sourceW,
    sourceH,
    destX,
    destY,
    destW,
    destH
  );
};

img.src =
  "https://i.pinimg.com/originals/0e/d2/1f/0ed21f71e21ddc279a4a23c1130c79f3.jpg";
