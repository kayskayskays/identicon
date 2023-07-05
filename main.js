
"use strict";

const canvas = document.querySelector("#canvas");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");

var iteti = new Iteti("", {});
iteti.render(ctx, canvas);

document.addEventListener("keydown", (e) => {
    var text = document.getElementById("input-box").value;
    iteti.hash = text;
    iteti.render(ctx, canvas);
});