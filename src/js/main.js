var s = Snap('#svg');


var moveFunc = function (dx, dy, posx, posy) {
    this.attr({ x: 0 });
};



var move = function (dx, dy) {
    this.attr({
        transform: this.data('origTransform') + (this.data('origTransform') ? "T" : "t") + [0, dy]
    });
}

var start = function () {
    this.data('origTransform', this.transform().local);
}
var stop = function () {
    console.log('finished dragging');
}


createBar();
myRect.drag(move, start, stop);
