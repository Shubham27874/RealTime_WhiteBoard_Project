let canvas = document.querySelector("canvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let tool = canvas.getContext("2d");

tool.fillRect(0, 0, canvas.width, canvas.height);