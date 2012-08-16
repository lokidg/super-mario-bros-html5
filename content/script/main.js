const PATH_TO_LEVEL_MAP = "content/image/level.png";

var level = new Image();

var playground;
var context;

var x = 0;
var y = 0;

window.onload = function() {

    playground = document.getElementById("playground");
    context = playground.getContext("2d");

    $('#playground').mousemove(move);

    level.onload = function() {
        context.drawImage(level, 0, 0);
    }

    level.src = PATH_TO_LEVEL_MAP;
}

function redrawPlayground(x, y) {

}

function move() {

    x -= 1;
    context.drawImage(level, x, y);
}
