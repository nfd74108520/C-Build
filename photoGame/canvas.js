let canvas = document.getElementById("myCanvas");

let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let img = new Image();

img.src =
  "https://i.pinimg.com/originals/0e/d2/1f/0ed21f71e21ddc279a4a23c1130c79f3.jpg";

ctx.drawImage(img, 0, 0, 600, 600);

