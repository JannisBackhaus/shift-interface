var s = Snap('#svg');





var bar1 = new Bar(700, 200, 0);
bar1.all.drag(bar1.move1, bar1.start, bar1.stop);

var bar2 = new Bar(700, 200, 45);
bar2.all.drag(bar2.move2, bar2.start, bar2.stop);

var bar3 = new Bar(700, 200, 90);
bar3.all.drag(bar3.move3, bar3.start, bar3.stop);

var bar4 = new Bar(700, 200, 135);
bar4.all.drag(bar4.move4, bar4.start, bar4.stop);

