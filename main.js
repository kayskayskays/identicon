
"use strict";

const canvas = document.querySelector("#canvas");
const width = canvas.width;
const height = canvas.height;
const ctx = canvas.getContext("2d");

var iteti = new Iteti(hash("heeheeheeheehee"), {});
iteti.render(ctx, canvas);

document.addEventListener("keyup", (e) => {
    var text = document.getElementById("input-box").value;
    if (text == '') {
        iteti.hash = hash("heeheeheeheehee");
        iteti.render(ctx, canvas);
    } else { 
        iteti.hash = hash(text);
        iteti.render(ctx, canvas);
    }
});