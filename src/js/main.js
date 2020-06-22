var s = Snap('#svg');

var centerX = 1000;
var centerY = 700;



var bar1 = new Bar(centerX, centerY, 0);
bar1.all.drag(bar1.move1, bar1.start, bar1.stop);

var bar2 = new Bar(centerX, centerY, 45);
bar2.all.drag(bar2.move2, bar2.start, bar2.stop);

var bar3 = new Bar(centerX, centerY, 90);
bar3.all.drag(bar3.move3, bar3.start, bar3.stop);

var bar4 = new Bar(centerX, centerY, 135);
bar4.all.drag(bar4.move4, bar4.start, bar4.stop);

var centerCircle = s.circle(centerX,centerY,40)
centerCircle.attr({
    fill: "white"
})