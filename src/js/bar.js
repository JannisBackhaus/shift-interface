
var rectSize = 60;

function createBar(){
    var rectTop = s.rect(0, 0, rectSize, rectSize)
    rectTop.attr({
        fill: "white",
        stroke: '#969696',
        strokeWidth: 3,
    });

    for(var i = 1; i < 6; i++) {
    var rectBottom = s.rect(0, i*rectSize, rectSize, rectSize)
    rectBottom.attr({
        fill: "transparent",
        stroke: 'red',
        strokeWidth: 1,
    });
    }

    var rectBottom = s.rect(0, 6*rectSize, rectSize, rectSize)
    rectBottom.attr({
        fill: "white",
        stroke: '#969696',
        strokeWidth: 3,
    });
    

}
