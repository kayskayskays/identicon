
"use strict";

const canvas = document.querySelector("#canvas");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");

ctx.fillStyle = "rgb(255, 255, 255)";
ctx.fillRect(0, 0, width, height);

var iteti = new Iteti("236719438941839336449826", {});
iteti.render(ctx, canvas);
